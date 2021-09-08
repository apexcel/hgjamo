export function hangulJamo(code: number) {
    // Initial consonants
    if (code >= 0x1100 && code <= 0x1112) return 1;
    // Medial vowels
    if (code >= 0x1160 && code <= 0x1175) return 2;
    // Final consonants
    if (code >= 0x11a8 && code <= 0x11c2) return 3;
    return 0;
}

export function hangulCompatibilityJamo(code: number) {
    // Consonants
    if (code >= 0x3131 && code <= 0x314e) return 1;
    // Vowels
    if (code >= 0x314f && code <= 0x3163) return 2;
    return 0;
}

export function isHangulSyllables(code: number) {
    return code >= 0xac00 && code <= 0xd7a3;
}

export function isHangul(code: number) {
    return (isHangulSyllables(code) || hangulJamo(code) > 0 || hangulCompatibilityJamo(code) > 0);
}
