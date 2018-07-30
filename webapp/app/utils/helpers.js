const MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 */
const isArrayLike = value => (
  value != null &&
  typeof value != 'function' &&
  isLength(value.length)
);

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
const isLength = value => (
  typeof value == 'number' &&
  value > -1 &&
  value % 1 == 0 &&
  value <= MAX_SAFE_INTEGER
);

/**
 * Checks if `value` is likely a prototype object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
const isPrototype = value => {
  const ctor = value && value.constructor;
  const proto = (typeof ctor === 'function' && ctor.prototype) || Object.prototype;

  return value === proto;
};

/**
 * Checks if `key` is a direct property of `object`.
 *
 * @param {Object} object The object to query.
 * @param {string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
export function has(object, key) {
  return object != null && Object.hasOwnProperty.call(object, key);
}

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 */
export function isEmpty(value) {
  if (value === null) {
    return true;
  }

  if (isArrayLike(value) || Array.isArray(value)) {
    return !value.length;
  }

  if (isPrototype(value)) {
    return !Object.keys(value).length;
  }

  for (const key in value) {
    if (Object.hasOwnProperty.call(value, key)) {
      return false;
    }
  }

  return true;
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 */
export function get(object, path, defaultValue = undefined) {
  const result = object == null ? undefined : object[path];
  return result === undefined ? defaultValue : result;
}
