const {
  pathSatisfies,
  prepend,
  prop,
  reject,
  reversePolish,
} = require('.');

describe('1 pathSatisfies', () => {
  const isPositive = n => n > 0;

  it('returns true if the specified object path satisfies the given predicate', () => {
    expect(pathSatisfies(isPositive, ['x', 1, 'y'], { x: [{ y: -1 }, { y: 1 }] })).toBe(true);
  });

  it('returns false if the specified path does not exist', () => {
    expect(pathSatisfies(isPositive, ['x', 'y'], { x: { z: 42 } })).toBe(false);
  });

  it('returns false if the path is empty', () => {
    expect(pathSatisfies(isPositive, [], { x: { z: 42 } })).toBe(false);
  });

  it('returns false otherwise', () => {
    expect(pathSatisfies(isPositive, ['x', 'y'], { x: { y: 0 } })).toBe(false);
  });
});

describe('2 prepend', () => {
  it('adds the element to the beginning of the list', () => {
    expect(prepend('x', ['y', 'z'])).toEqual(['x', 'y', 'z']);
    expect(prepend(['a', 'z'], ['x', 'y'])).toEqual([['a', 'z'], 'x', 'y']);
  });

  it('works on empty list', () => {
    expect(prepend(1, [])).toEqual([1]);
  });
});

describe('3 prop', () => {
  const fred = { name: 'Fred', age: 23 };

  it('returns a function that fetches the appropriate property', () => {
    const nm = prop('name');
    expect(typeof nm).toBe('function');
    expect(nm(fred)).toBe('Fred');
  });
});

describe('4 reject', () => {
  const even = x => x % 2 === 0;

  it('reduces an array to those not matching a filter', () => {
    expect(reject(even, [1, 2, 3, 4, 5])).toEqual([1, 3, 5]);
  });

  it('returns an empty array if no element matches', () => {
    expect(reject(x => x < 100, [1, 9, 99])).toEqual([]);
  });

  it('returns an empty array if asked to filter an empty array', () => {
    expect(reject(x => x > 100, [])).toEqual([]);
  });

  it('returns an empty array if no element matches', () => {
    expect(reject(x => x < 100, [1, 9, 99])).toEqual([]);
  });

  it('returns an empty array if asked to filter an empty array', () => {
    expect(reject(x => x > 100, [])).toEqual([]);
  });
});

describe('5 reverse polish notation', () => {
  test('should implement the problem statement properly', () => {
    expect(reversePolish([2, 6, '+', 2, '*'])).toBe(16);
    expect(reversePolish([8, 2, '/', 2, '*'])).toBe(8);
    expect(reversePolish([2, 6, '-', 2, '*'])).toBe(-8);
    expect(reversePolish([1])).toBe(1);
    expect(reversePolish([4, 6, 2, -8, 1, 9, '*', '+', '/', '-', '*'])).toBe(16);
  });
});

