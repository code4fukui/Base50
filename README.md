# Base50

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

Base50 is a library for encoding binary data using a set of 50 Japanese hiragana characters.

## Demo
[https://code4fukui.github.io/Base50/](https://code4fukui.github.io/Base50/)

## Features
- Base50 library (but the base number is 46)
- ES module for web and [Deno](https://deno.land)

## Usage
```js
import { Base50 } from "https://code4fukui.github.io/Base50/Base50.js";

console.log(Base50.encode(new Uint8Array([1, 2, 0xfe, 0xff])));
console.log(Base50.decode("えゆつのふ"));
```

## License
MIT