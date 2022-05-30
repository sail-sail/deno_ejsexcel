// deno-lint-ignore-file no-var no-inner-declarations
import {
  Readable,
} from "../../../deps.ts";
import {
  QR,
} from "./qr-base.js";
import * as png from "./png.js";
import * as vector from "./vector.js";

var fn_noop = function() {};

var BITMAP_OPTIONS = {
    parse_url: false,
    ec_level: 'M',
    size: 5,
    margin: 4,
    customize: null
};

var VECTOR_OPTIONS = {
    parse_url: false,
    ec_level: 'M',
    margin: 1,
    size: 0
};

function get_options(options, force_type) {
    if (typeof options === 'string') {
        options = { 'ec_level': options }
    } else {
        options = options || {};
    }
    var _options = {
        type: String(force_type || options.type || 'png').toLowerCase()
    };

    var defaults = _options.type == 'png' ? BITMAP_OPTIONS : VECTOR_OPTIONS;

    for (var k in defaults) {
        _options[k] = k in options ? options[k] : defaults[k];
    }

    return _options;
}

function qr_image(text, options) {
    options = get_options(options);

    var matrix = QR(text, options.ec_level, options.parse_url);
    var stream = new Readable();
    stream._read = fn_noop;

    switch (options.type) {
    case 'svg':
    case 'pdf':
    case 'eps':
    	// setImmediate(function() {
        //     vector[options.type](matrix, stream, options.margin, options.size);
        // });
        vector[options.type](matrix, stream, options.margin, options.size);
        break;
    case 'svgpath':
        // deprecated, use svg_object method
    	// setImmediate(function() {
        //     var obj = vector.svg_object(matrix, options.margin, options.size);
        //     stream.push(obj.path);
        //     stream.push(null);
        // });
        var obj = vector.svg_object(matrix, options.margin, options.size);
        stream.push(obj.path);
        stream.push(null);
        break;
    case 'png':
    default:
    	// setImmediate(function() {
        //     var bitmap = png.bitmap(matrix, options.size, options.margin);
        //     if (options.customize) {
        //         options.customize(bitmap);
        //     }
        //     png.png(bitmap, stream);
        // });
        var bitmap = png.bitmap(matrix, options.size, options.margin);
        if (options.customize) {
            options.customize(bitmap);
        }
        png.png(bitmap, stream);
    }

    return stream;
}

function svg_object(text, options) {
    options = get_options(options, 'svg');

    var matrix = QR(text, options.ec_level);
    return vector.svg_object(matrix, options.margin);
}

export const matrix = QR;
export const image = qr_image;
export const svgObject = svg_object;