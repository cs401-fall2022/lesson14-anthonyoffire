import {describe, expect, test} from '@jest/globals';
import {hello} from '../app';

describe('test module 1', () => {
  test('returns the string hello', () => {
    expect(hello()).toBe('Hello World');
  });
});