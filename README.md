# Base50 ひらがな50音エンコーディング

- Base50 library (but the base number is 46)
- ES module for web and [Deno](https://deno.land)

## alphabet

```
あいうえお
かきくこけ
さしすせそ
たちつてと
なにぬねの
はひふへほ
まみむめも
やゆよ
らりるれろ
わをん
```

## sample app

https://code4fukui.github.io/Base50/

## usage

```js
import { Base50 } from "https://code4fukui.github.io/Base58/Base50.js";

console.log(Base50.encode(new Uint8Array([1, 2, 0xfe, 0xff])));
console.log(Base50.decode("えゆつのふ"));
```
