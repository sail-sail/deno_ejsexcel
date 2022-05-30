
/*!
 * EJS - Filters
 * Copyright(c) 2010 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */

/**
 * First element of the target `obj`.
 */

export function first(obj) {
  return obj[0];
}

/**
 * Last element of the target `obj`.
 */

export function last(obj) {
  return obj[obj.length - 1];
}

/**
 * Capitalize the first letter of the target `str`.
 */

export function capitalize(str){
  str = String(str);
  return str[0].toUpperCase() + str.substr(1, str.length);
}

/**
 * Downcase the target `str`.
 */

export function downcase(str){
  return String(str).toLowerCase();
}

/**
 * Uppercase the target `str`.
 */

export function upcase(str){
  return String(str).toUpperCase();
}

/**
 * Sort the target `obj`.
 */

export function sort(obj){
  return Object.create(obj).sort();
}

/**
 * Sort the target `obj` by the given `prop` ascending.
 */

export function sort_by(obj, prop){
  return Object.create(obj).sort(function(a, b){
    a = a[prop], b = b[prop];
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
}

/**
 * Size or length of the target `obj`.
 */

export function length(obj) {
  return obj.length;
}

export const size = length;

/**
 * Add `a` and `b`.
 */

export function plus(a, b){
  return Number(a) + Number(b);
}

/**
 * Subtract `b` from `a`.
 */

export function minus(a, b){
  return Number(a) - Number(b);
}

/**
 * Multiply `a` by `b`.
 */

export function times(a, b){
  return Number(a) * Number(b);
}

/**
 * Divide `a` by `b`.
 */

export function divided_by(a, b){
  return Number(a) / Number(b);
}

/**
 * Join `obj` with the given `str`.
 */

export function join(obj, str){
  return obj.join(str || ', ');
}

/**
 * Truncate `str` to `len`.
 */

export function truncate(str, len){
  str = String(str);
  return str.substr(0, len);
}

/**
 * Truncate `str` to `n` words.
 */

export function truncate_words(str, n){
  str = String(str);
  const words = str.split(/ +/);
  return words.slice(0, n).join(' ');
}

/**
 * Replace `pattern` with `substitution` in `str`.
 */

export function replace(str, pattern, substitution){
  return String(str).replace(pattern, substitution || '');
}

/**
 * Prepend `val` to `obj`.
 */

export function prepend(obj, val){
  return Array.isArray(obj)
    ? [val].concat(obj)
    : val + obj;
}

/**
 * Append `val` to `obj`.
 */

export function append(obj, val){
  return Array.isArray(obj)
    ? obj.concat(val)
    : obj + val;
}

/**
 * Map the given `prop`.
 */

export function map(arr, prop){
  return arr.map(function(obj){
    return obj[prop];
  });
}

/**
 * Reverse the given `obj`.
 */

export function reverse(obj){
  return Array.isArray(obj)
    ? obj.reverse()
    : String(obj).split('').reverse().join('');
}

/**
 * Get `prop` of the given `obj`.
 */

export function get(obj, prop){
  return obj[prop];
}

/**
 * Packs the given `obj` into json string
 */
export function json(obj){
  return JSON.stringify(obj);
}