// deno-lint-ignore-file
import { Buffer } from "./deps.ts";

/**
 * 渲染excel模板
 * @param exlBuf 模板excel的Buff
 * @param _data_ 数据
 */
export declare function renderExcel(exlBuf: Buffer, _data_: any): Promise<Buffer>;

/**
 * 渲染excel模板
 * @param exlBuf 模板excel的Buff
 * @param _data_ 数据
 * @param opt 选项, cache 是否缓存, 默认为true
 */
export declare function renderExcel(exlBuf: Buffer, _data_: any, opt: { cache?: boolean }): Promise<Buffer>;
