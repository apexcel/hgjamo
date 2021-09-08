declare function compose(jamoArray: readonly string[][]): string;
declare function composeSingle(jamoArray: readonly string[]): string;
declare function decompose(hangul: string): string[][];

export { compose, composeSingle, decompose };
