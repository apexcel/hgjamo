import { compose, composeSingle } from "../src/compose";

describe('compose.ts test', () => {

    test('composeSingle()', () => {
        expect(compose([
            ['ㄱ', 'ㅏ', 'ㅁ'],
            ['ㅈ', 'ㅏ'],
            [' '],
            ['ㄱ', 'ㅏ'],
            ['ㅁ'],
            ['ㅈ', 'ㅏ']
        ])).toBe('감자 가ㅁ자');

        expect(compose([
            ['ㄱ', 'ㅏ', 'ㅁ'],
            ['ㅈ', 'ㅏ'],
            [' '],
            ['ㄱ'],
            ['ㅏ'],
            ['ㅁ'],
            ['ㅈ'],
            ['ㅏ']
        ])).toBe('감자 ㄱㅏㅁㅈㅏ');
    });

    test('compose()', () => {
        expect(composeSingle(['!'])).toBe('!');
        expect(composeSingle(['ㄱ'])).toBe('ㄱ');
        expect(composeSingle(['g'])).toBe('g');
        expect(composeSingle(['ㄱ', 'ㅏ', 'ㅁ'])).toBe('\uac10');
    });
})