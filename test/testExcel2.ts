import { readFile, writeFile } from "https://deno.land/std@0.141.0/node/fs/promises.ts";
import { renderExcel } from "../mod.ts";

//获得Excel模板的buffer对象
const exlBuf = await readFile("./test/report.xlsx");
//数据源
const data = [
	[{
		"table_name": "现金报表",
		"date": '2014-04-09'
	}],
	[{
		"cb1": "001",
		"cb1_": "002",
		"bn1": "1",
		"bn1_": "1"
	}, {
		"cb1": "001",
		"cb1_": "002",
		"bn1": "1",
		"bn1_": "1"
	}]
];
//用数据源(对象)data渲染Excel模板
const exlBuf2 = await renderExcel(exlBuf, data);
await writeFile("./test/report2.xlsx", exlBuf2);
console.log("生成report2.xlsx");

