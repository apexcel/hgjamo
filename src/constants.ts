type TStringIndex = {
    [key: string]: string;
}

const CONSONANTS_TABLE: TStringIndex = {
    // Inital consonants to compatibility consonants
    '\u1100': '\u3131',
    '\u1101': '\u3132',
    '\u1102': '\u3134',
    '\u1103': '\u3137', 
    '\u1104': '\u3138',
    '\u1105': '\u3139',
    '\u1106': '\u3141',
    '\u1107': '\u3142',
    '\u1108': '\u3143',
    '\u1109': '\u3145',
    '\u110a': '\u3146',
    '\u110b': '\u3147',
    '\u110c': '\u3148',
    '\u110d': '\u3149',
    '\u110e': '\u314a',
    '\u110f': '\u314b',
    '\u1110': '\u314c',
    '\u1111': '\u314d',
    '\u1112': '\u314e',
    // Final consonants to compatibility consonants
    '\u11a8': '\u3131',
    '\u11a9': '\u3132',
    '\u11aa': '\u3133',
    '\u11ab': '\u3134',
    '\u11ac': '\u3135',
    '\u11ad': '\u3137',
    '\u11ae': '\u3137',
    '\u11af': '\u3139',
    '\u11b0': '\u313a',
    '\u11b1': '\u313b',
    '\u11b2': '\u313c',
    '\u11b3': '\u313d',
    '\u11b4': '\u313e',
    '\u11b5': '\u313f',
    '\u11b6': '\u3140',
    '\u11b7': '\u3141',
    '\u11b8': '\u3142',
    '\u11b9': '\u3144',
    '\u11ba': '\u3145',
    '\u11bb': '\u3146',
    '\u11bc': '\u3147',
    '\u11bd': '\u3148',
    '\u11be': '\u314a',
    '\u11bf': '\u314b',
    '\u11c0': '\u314c',
    '\u11c1': '\u314d',
    '\u11c2': '\u314e',
};

const VOWEL_TABLE: TStringIndex = {
    '\u1160': '\u1160',
    '\u1161': '\u314f',
    '\u1162': '\u3150',
    '\u1163': '\u3151',
    '\u1164': '\u3152',
    '\u1165': '\u3153',
    '\u1166': '\u3154',
    '\u1167': '\u3155',
    '\u1168': '\u3156',
    '\u1169': '\u3157',
    '\u116a': '\u3158',
    '\u116b': '\u3159',
    '\u116c': '\u315a',
    '\u116d': '\u315b',
    '\u116e': '\u315c',
    '\u116f': '\u315d',
    '\u1170': '\u315e',
    '\u1171': '\u315f',
    '\u1172': '\u3160',
    '\u1173': '\u3161',
    '\u1174': '\u3162',
    '\u1175': '\u3163',
}

const COMPATIBILITY_TABLE: string[][] = [
    ['\u3131', '\u3132', '\u3134', '\u3137', '\u3138', '\u3139', '\u3141', '\u3142', '\u3143', '\u3145', '\u3146', '\u3147', '\u3148', '\u3149', '\u314a', '\u314b', '\u314c', '\u314d', '\u314e'],
    ['\u314f', '\u3150', '\u3151', '\u3152', '\u3153', '\u3154', '\u3155', '\u3156', '\u3157', '\u3158', '\u3159', '\u315a', '\u315b', '\u315c', '\u315d', '\u315e', '\u315f', '\u3160', '\u3161', '\u3162', '\u3163'],
    ['_', '\u3131', '\u3132', '\u3133', '\u3134', '\u3135', '\u3137', '\u3137', '\u3139', '\u313a', '\u313b', '\u313c', '\u313d', '\u313e', '\u313f', '\u3140', '\u3141', '\u3142', '\u3144', '\u3145', '\u3146', '\u3147', '\u3148', '\u314a', '\u314b', '\u314c', '\u314d', '\u314e',]
];

const COMPATIBILITY_HANGUL_BEGIN = 0xac00;
const COMPATIBILITY_HANGUL_END = 0xd7a3;

Object.freeze(CONSONANTS_TABLE);
Object.freeze(VOWEL_TABLE);
Object.freeze(COMPATIBILITY_TABLE);

export {
    CONSONANTS_TABLE, VOWEL_TABLE, COMPATIBILITY_TABLE, COMPATIBILITY_HANGUL_BEGIN, COMPATIBILITY_HANGUL_END
}