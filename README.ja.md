# Base50

Base50は、50文字の日本語のひらがなを使用してバイナリデータをエンコードするためのライブラリです。

## デモ
[https://code4fukui.github.io/Base50/](https://code4fukui.github.io/Base50/)

## 特徴
- Base50ライブラリ（ただし基数は46）
- Webおよび[Deno](https://deno.land)向けのESモジュール

## 使い方
```js
import { Base50 } from "https://code4fukui.github.io/Base50/Base50.js";

console.log(Base50.encode(new Uint8Array([1, 2, 0xfe, 0xff])));
console.log(Base50.decode("えゆつのふ"));
```

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
