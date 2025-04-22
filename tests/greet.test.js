const { describe, it } = require('mocha')
const assert = require('assert')
const { hello, hi } = require('../src/greet')

describe('Greet', function () {
  describe('#hello()', function () {
    it('should return a hello message', function () {
      const expected = 'Hello, John!'
      const actual = hello('John')
      assert.equal(actual, expected)
    })
  })

  describe('#hi()', function () {
    it('should return a hi message', function () {
      const expected = 'Hi, James!'
      const actual = hi('James')
      assert.equal(actual, expected)
    })
  })
})
