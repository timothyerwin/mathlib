const assert = require('assert');
const should = require('should');
const expect = require('expect');

const _ = require('lodash');

const math = require('../math');

describe('findMax', function() {
  it('should be a function', function() {
    expect(typeof(math.findMax) === 'function').toEqual(true);
  });

  it('should throw errors with no arguments', function() {
    (function() { math.findMax() }).should.throw(Error);
  });

  it('should throw errors with less than 2 array values', function() {
    (function() { math.findMax([1]) }).should.throw(Error);
  });

  it('should throw errors with non array', function() {
    (function() { math.findMax("hello") }).should.throw(Error);
  });

  it('should throw errors with non number array', function() {
    (function() { math.findMax(["hello", 1, "goodbye"]) }).should.throw(Error);
  });

  it('should throw errors with non number array', function() {
    (function() { math.findMax([{}, 1]) }).should.throw(Error);
  });

  it('should return the top 2 max values', function() {
    math.findMax([0,1,2,3]).should.deepEqual([3,2]);
  });

  it('should return the top 2 max values', function() {
    math.findMax([4,5,3,1]).should.deepEqual([5,4]);
  });

  it('should return the top 2 max values with negative numbers', function() {
    math.findMax([-2,-5,3,1]).should.deepEqual([3,1]);
  });
});
