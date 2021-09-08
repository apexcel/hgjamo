import { COMPATIBILITY_TABLE } from "./constants";

export function compose(jamoArray: readonly string[][]) {
    return jamoArray.map(letter => composeSingle(letter)).join('');
}

export function composeSingle(jamoArray: readonly string[]) {
    if (jamoArray.length === 1) return jamoArray[0];

    const indices = [0, 0, 0];
    jamoArray.map((jamo, i) => indices[i] = COMPATIBILITY_TABLE[i].findIndex(ch => ch === jamo));
    return String.fromCharCode(((indices[0] * 21) + indices[1]) * 28 + indices[2] + 0xac00);
}