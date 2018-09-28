/* Q1 (*)
 * Returns `true` if the specified object property at given path satisfies the
 * given predicate; `false` otherwise.
 *
 *   pathSatisfies(y => y > 0, ['x', 'y'], {x: {y: 2}}); //=> true
 */

function pathSatisfies(predFn, propPath, obj) {
  if (propPath.length === 0) return false;
  if (propPath.length === 1) return predFn(obj[propPath[0]]);

  return Reflect.has(obj, propPath[0]) &&
    pathSatisfies(predFn, propPath.slice(1), obj[propPath[0]]);
}

/* Q2 (*)
 * Returns a new list with the given element at the front, followed by the
 * contents of the list.
 *
 *      R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
 */

function prepend(elem, list) {
  return [elem].concat(list);
}

/* Q3 (*)
 * Returns a function that when supplied an object returns the indicated
 * property of that object, if it exists.
 *
 *      prop('x', {x: 100}); //=> 100
 *      prop('x', {}); //=> undefined
 */

function prop(key) {
  return obj => obj[key];
}

/* Q4 (*)
 * The complement of [`filter`](#filter).
 *
 * Acts as a transducer if a transformer is given in list position. Filterable
 * objects include plain objects or any object that has a filter method such
 * as `Array`.
 *
 *      const isOdd = (n) => n % 2 === 1;
 *
 *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */

function reject(predFn, arr) {
  // TODO: handle objects
  return arr.reduce((acc, elem) => (predFn(elem) ? acc : acc.concat(elem)), []);
}

/* Q5
 * Evaluate reverse polish notation (RPN). To learn about RPN see:
 * http://en.wikipedia.org/wiki/Reverse_Polish_notation
 *
 * You can assume all inputs are valid, all operands are numbers and
 * only the following operands will appear: + - * /
 *
 * input: Array of operands/operators to be evaluated left to right.
 *
 * output: Number that results from evaluating the input.
 */

function reversePolish() { }

module.exports = {
  pathSatisfies,
  prepend,
  prop,
  reject,
  reversePolish,
};
