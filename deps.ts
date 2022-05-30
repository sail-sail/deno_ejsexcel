export { Buffer } from "https://deno.land/std@0.141.0/node/buffer.ts";
import zlib from "https://deno.land/std@0.141.0/node/zlib.ts";
export { Readable, Stream } from "https://deno.land/std@0.141.0/node/stream.ts";
export { readFile } from "https://deno.land/std@0.141.0/node/fs/promises.ts";
import path from "https://deno.land/std@0.141.0/node/path.ts";
import * as crypto from "https://deno.land/std@0.141.0/node/crypto.ts"
import { nextTick } from "https://deno.land/std@0.141.0/node/process.ts";
import { qrcode } from "https://deno.land/x/qrcode@v2.0.0/mod.ts";

export {
  zlib,
  path,
  crypto,
  nextTick,
  qrcode,
}
