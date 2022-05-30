import {
  nextTick,
} from "./deps.ts";

// deno-lint-ignore no-explicit-any
(window as any).process = (window as any).process || {};
// deno-lint-ignore no-explicit-any
(window as any).process.nextTick = nextTick;

// deno-types="./index.d.ts"
export { renderExcel } from "./ejsExcel.js";
