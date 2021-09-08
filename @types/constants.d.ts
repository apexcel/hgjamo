declare type TStringIndex = {
    [key: string]: string;
};
declare const CONSONANTS_TABLE: TStringIndex;
declare const VOWEL_TABLE: TStringIndex;
declare const COMPATIBILITY_TABLE: string[][];
declare const COMPATIBILITY_HANGUL_BEGIN = 44032;
declare const COMPATIBILITY_HANGUL_END = 55203;
export { CONSONANTS_TABLE, VOWEL_TABLE, COMPATIBILITY_TABLE, COMPATIBILITY_HANGUL_BEGIN, COMPATIBILITY_HANGUL_END };
