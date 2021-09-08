# 한글 호환형 자모 분리 및 조합

문자열을 호환형 한글 자모로 분리하거나 분리된 호환형 한글 자모를 문자열로 결합하는 것을 도와줍니다.

## 설치

```shell
npm install hgjamo
```

## API

### `decompose(<string>)`

문자열을 입력받아 호환형 자모로 분리된 이중 배열로 반환

```js
hgjamo.decompose('한글') // [['ㅎ', 'ㅏ', 'ㄴ'], ['ㄱ', 'ㅡ', 'ㄹ']]
```

### `composeSingle(<string[]>)`

자모 배열을 문자열로 변환

```js
hgjamo.composeSingle(['ㅎ', 'ㅏ', 'ㄴ']) // '한'
```

### `compose(<string>)`

자모 이중 배열을 문자열로 반환

```js
hgjamo.compose([['ㅎ', 'ㅏ', 'ㄴ'], ['ㄱ', 'ㅡ', 'ㄹ']]) // 한글
```