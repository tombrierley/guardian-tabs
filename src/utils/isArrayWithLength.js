/**
 *
 * @param {array} array - An array
 * @return {bool} if the parameter is an arry with length
 *
 */

const isArrayWithLength = array =>
  array && Array.isArray(array) && array.length;

export default isArrayWithLength;
