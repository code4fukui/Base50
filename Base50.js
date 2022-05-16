import { decode, encode } from "https://code4fukui.github.io/Base58/baseN.js";

export const BASE50_CHARS = "あいうえおかきくこけさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";

export const Base50 = {
  encode: (input, maxline) => encode(input, BASE50_CHARS, maxline),
  decode: (input) => decode(input, BASE50_CHARS),
};
