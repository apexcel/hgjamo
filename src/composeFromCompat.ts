import { COMPATIBILITY_TABLE } from "./constants";

export function composeFromCompatArray(jamoArray: readonly string[][]) {
    return jamoArray.map(letter => composeFromCompat(letter)).join('');
}

export function composeFromCompat(jamoArray: readonly string[]) {
    if (jamoArray.length === 1) return jamoArray[0];

    const indices = [0, 0, 0];
    jamoArray.map((jamo, i) => indices[i] = COMPATIBILITY_TABLE[i].findIndex(ch => ch === jamo));
    return String.fromCharCode(((indices[0] * 21) + indices[1]) * 28 + indices[2] + 0xac00);
}