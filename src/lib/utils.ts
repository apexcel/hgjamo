import { COMPATIBILITY_CONSONANT_BEGIN, COMPATIBILITY_CONSONANT_END, COMPATIBILITY_VOWEL_BEGIN, FINAL_CONSONANT_BEGIN, FINAL_CONSONANT_END, HANGUL_SYLLABLES_BEGIN, HANGUL_SYLLABLES_END, INITIAL_CONSONANT_BEGIN, INITIAL_CONSONANT_END, MEDIAL_VOWEL_BEGIN, MEDIAL_VOWEL_END } from "./constants";

export function hangulJamo(code: number) {
    if (code >= INITIAL_CONSONANT_BEGIN && code <= INITIAL_CONSONANT_END) return 1;
    if (code >= MEDIAL_VOWEL_BEGIN && code <= MEDIAL_VOWEL_END) return 2;
    if (code >= FINAL_CONSONANT_BEGIN && code <= FINAL_CONSONANT_END) return 3;
    return 0;
}

export function hangulCompatibilityJamo(code: number) {
    if (code >= COMPATIBILITY_CONSONANT_BEGIN && code <= COMPATIBILITY_CONSONANT_END) return 1;
    if (code >= COMPATIBILITY_VOWEL_BEGIN && code <= COMPATIBILITY_CONSONANT_END) return 2;
    return 0;
}

export function isHangulSyllables(code: number) {
    return code >= HANGUL_SYLLABLES_BEGIN && code <= HANGUL_SYLLABLES_END;
}

export function isHangul(code: number) {
    return (isHangulSyllables(code) || hangulJamo(code) > 0 || hangulCompatibilityJamo(code) > 0);
}
