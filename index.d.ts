// deno-lint-ignore-file

/**
 * 渲染excel模板
 * @param exlBuf 模板excel的Buff
 * @param _data_ 数据
 */
export declare function renderExcel(exlBuf: Uint8Array, _data_: any): Promise<Uint8Array>;

/**
 * 渲染excel模板
 * @param exlBuf 模板excel的Buff
 * @param _data_ 数据
 * @param opt 选项, cache 是否缓存, 默认为true
 */
export declare function renderExcel(exlBuf: Uint8Array, _data_: any, opt: { cache?: boolean }): Promise<Uint8Array>;
