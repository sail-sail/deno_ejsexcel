export { Buffer } from "https://deno.land/std/node/buffer.ts";
import zlib from "https://deno.land/std/node/zlib.ts";
export { Readable, Stream } from "https://deno.land/std/node/stream.ts";
export { readFile } from "https://deno.land/std/node/fs/promises.ts";
import path from "https://deno.land/std/node/path.ts";
import * as crypto from "https://deno.land/std/node/crypto.ts"
import { nextTick } from "https://deno.land/std/node/process.ts";
import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

export {
  zlib,
  path,
  crypto,
  nextTick,
  DOMParser,
}
