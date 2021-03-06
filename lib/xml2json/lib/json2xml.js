// deno-lint-ignore-file no-var no-inner-declarations no-unused-vars no-redeclare
import {
  Buffer,
} from "../../../deps.ts";
  
//sail 2013-04-21
var chars =  {
		'&amp;' :'&',
		'&lt;'  :'<',
		'&gt;'  :'>'
        };
//sail 2013-04-21 end
export function toXml(json, xml,j2xOp) {
    xml = xml || '';
    if (json instanceof Buffer) {
        json = json.toString();
    }

    var obj = null;
    if (typeof(json) == 'string') {
        try {
            obj = JSON.parse(json);
        } catch(e) {
            throw new Error("The JSON structure is invalid");
        }
    } else {
        obj = json;
    }

    if(obj === undefined || obj === null) return xml;
    var keys = Object.keys(obj);
    var len = keys.length;

    // First pass, extract strings only
    for (var i = 0; i < len; i++) {
        var key = keys[i];
        if (typeof(obj[key]) == 'string') {
        	var val = obj[key];
            if (key == '$t') {
            	if(j2xOp !== undefined && j2xOp.reSanitize === true) {
            		for(kc in chars) val = val.replace(new RegExp(kc,"gm"),chars[kc]);
            	}
                xml += val;
            } else {
                xml = xml.replace(/>$/, '');
                xml += ' ' + key + '="' + String(val).replace(new RegExp("\"", "gm"), "&quot;") + '">';
            }
        }
    }

    // Second path, now handle sub-objects and arrays
    for (var i = 0; i < len; i++) {
        var key = keys[i];

        if (Array.isArray(obj[key])) {
            var elems = obj[key];
            var l = elems.length;
            for (var j = 0; j < l; j++) {
                xml += '<' + key + '>';
                xml = toXml(elems[j], xml,j2xOp);
                xml += '</' + key + '>';
            }
        } else if (typeof(obj[key]) == 'object') {
            xml += '<' + key + '>';
            xml = toXml(obj[key], xml,j2xOp);
            xml += '</' + key + '>';
        }
    }

    return xml;
};

