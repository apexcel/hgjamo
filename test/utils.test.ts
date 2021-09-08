import { hangulCompatibilityJamo, hangulJamo, isHangul, isHangulSyllables } from "../src/utils"

describe('utils.ts test', () => {

    const initialConsonants = Array(19).fill(0).map((_, i) => String.fromCharCode(0x1100 + i));
    const medialVowels = Array(22).fill(0).map((_, i) => String.fromCharCode(0x1160 + i));
    const finalConsonants = Array(27).fill(0).map((_, i) => String.fromCharCode(0x11a8 + i));
    const compatibilityJamo = [
        ['\u3131', '\u3132', '\u3134', '\u3137', '\u3138', '\u3139', '\u3141', '\u3142', '\u3143', '\u3145', '\u3146', '\u3147', '\u3148', '\u3149', '\u314a', '\u314b', '\u314c', '\u314d', '\u314e'],
        ['\u314f', '\u3150', '\u3151', '\u3152', '\u3153', '\u3154', '\u3155', '\u3156', '\u3157', '\u3158', '\u3159', '\u315a', '\u315b', '\u315c', '\u315d', '\u315e', '\u315f', '\u3160', '\u3161', '\u3162', '\u3163'],
        ['_', '\u3131', '\u3132', '\u3133', '\u3134', '\u3135', '\u3137', '\u3137', '\u3139', '\u313a', '\u313b', '\u313c', '\u313d', '\u313e', '\u313f', '\u3140', '\u3141', '\u3142', '\u3144', '\u3145', '\u3146', '\u3147', '\u3148', '\u314a', '\u314b', '\u314c', '\u314d', '\u314e',]
    ];

    test('hangulJamo()', () => {
        expect(initialConsonants.map(consonant => hangulJamo(consonant.charCodeAt(0)))).toStrictEqual(Array(19).fill(1));
        expect(medialVowels.map(vowel => hangulJamo(vowel.charCodeAt(0)))).toStrictEqual(Array(22).fill(2));
        expect(finalConsonants.map(consonant => hangulJamo(consonant.charCodeAt(0)))).toStrictEqual(Array(27).fill(3));
    })

    test('hanfulCompatibilityJamo()', () => {
        expect(compatibilityJamo.map(jamos => jamos.map(jamo => hangulCompatibilityJamo(jamo.charCodeAt(0))))).toStrictEqual([
            Array(19).fill(1),
            Array(21).fill(2),
            [0, ...Array(27).fill(1)],
        ]);
    })

    test('isHangulSyllables()', () => {
        const syllables = Array(11172).fill(0).map((_, i) => 0xac00 + i);
        expect(syllables.every(isHangulSyllables)).toBe(true);
    })

    test('isHangul', () => {
        const eng = 97;
        const kor1 = 0x1100;
        const kor2 = 0x3131;
        expect(isHangul(eng)).toBe(false);
        expect(isHangul(kor1)).toBe(true);
        expect(isHangul(kor2)).toBe(true);
    })
})
