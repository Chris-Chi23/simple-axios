const toStr = Object.prototype.toString;
const isDate = (val: any): val is Date => toStr.call(val) === "[object Date]";
const isObject = (val: any): val is Object => val !== null && typeof val === "object";

export {
  isDate,
  isObject
}
