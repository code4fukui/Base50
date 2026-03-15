# Base50
Base50は、日本語の平仮名50文字を使って二進データをエンコードするためのライブラリです。

## デモ
[https://code4fukui.github.io/Base50/](https://code4fukui.github.io/Base50/)

## 機能
- Base50ライブラリ（ただし、基数は46）
- ウェブやDenoのためのESモジュール

## 使い方
```js
import { Base50 } from "https://code4fukui.github.io/Base50/Base50.js";

console.log(Base50.encode(new Uint8Array([1, 2, 0xfe, 0xff])));
console.log(Base50.decode("えゆつのふ"));
```

## ライセンス
MIT