import { COMPATIBILITY_HANGUL_BEGIN, COMPATIBILITY_TABLE, CONSONANTS_TABLE, VOWEL_TABLE } from "./constants";
import { hangulJamo, isHangul, isHangulSyllables, hangulCompatibilityJamo } from "./utils";

export function useJamo() {
    let jamoArray: string[] = [];
    let index = 0;

    const push = (letter: string) => {
        jamoArray[index] = letter;
        index += 1
    };

    const clear = () => {
        jamoArray = [];
        index = 0;
    };

    const getJamo = () => jamoArray;

    return [push, clear, getJamo] as const;
}

export function disassemble(code: number) {
    const ii = Math.floor((code - COMPATIBILITY_HANGUL_BEGIN) / 588)
        , mi = Math.floor((code - COMPATIBILITY_HANGUL_BEGIN - (ii * 588)) / 28)
        , fi = (code - COMPATIBILITY_HANGUL_BEGIN - (ii * 588)) - (mi * 28);

    const is = COMPATIBILITY_TABLE[0][ii]
        , ms = COMPATIBILITY_TABLE[1][mi]
        , fs = COMPATIBILITY_TABLE[2][fi];

    const ret = [is, ms];

    if (fi > 0) ret.push(fs);
    return ret;
}

export function decomposeToCompatJamo(hangul: string) {
    const letters = hangul.split('');
    const [push, clear, getJamo] = useJamo();
    const result: string[][] = [];

    for (let i = 0; i < letters.length; i += 1) {
        const letter = letters[i];
        const code = letter.charCodeAt(0);
        const jamoNumber = hangulJamo(code);

        if (!jamoNumber) {
            if (getJamo().length > 0) {
                result.push(getJamo());
                clear();
            }
        }

        if (!isHangul(code) || hangulCompatibilityJamo(code) > 0) {
            result.push([letter]);
            continue;
        }

        if (isHangulSyllables(code)) {
            result.push(disassemble(code));
            continue;
        }

        if (jamoNumber) {
            if (getJamo()[jamoNumber - 1]) {
                result.push(getJamo());
                clear();
            }
            if (jamoNumber === 1) {
                push(CONSONANTS_TABLE[letter])
            }
            if (jamoNumber === 2) {
                push(VOWEL_TABLE[letter]);
            }
            if (jamoNumber === 3) {
                push(CONSONANTS_TABLE[letter])
            }
        }
    }

    if (getJamo().length > 0) result.push(getJamo());

    return result;
}