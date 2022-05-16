import * as t from "https://deno.land/std/testing/asserts.ts";
import { Base50 } from "./Base50.js";

Deno.test("encode", () => {
  t.assertEquals(Base50.encode(new Uint8Array([1, 2, 3])), "みけれ");
  t.assertEquals(Base50.encode(new Uint8Array([])), "");
  t.assertEquals(Base50.encode(new Uint8Array([0])), "あ");
});
Deno.test("decode", () => {
  t.assertEquals(Base50.decode("みけれ"), new Uint8Array([1, 2, 3]));
});
