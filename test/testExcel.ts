import { readFile, writeFile } from "https://deno.land/std@0.141.0/node/fs/promises.ts";
import { renderExcel } from "../mod.ts";

//获得Excel模板的buffer对象
const exlBuf = await readFile("./test/test.xlsx");
//数据源
const data = [[{"dpt_des":"开发部","doc_dt":"2013-09-09","doc":"a001"}],[{"pt":"pt1","des":"des1","due_dt":"2013-08-07","des2":"2013-12-07"},{"pt":"pt1","des":"des1","due_dt":"2013-09-14","des2":"des21"}]];
//用数据源(对象)data渲染Excel模板
const exlBuf2 = await renderExcel(exlBuf, data);
await writeFile("./test/test2.xlsx", exlBuf2);
console.log("生成test2.xlsx");