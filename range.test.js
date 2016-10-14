/* global describe expect it */
var range = require('./range')

describe('The range constructor', function () {
  it('throws an error if it is not passed an array', function () {
    expect(function () {
      range('foo')
    }).toThrow('range must be an array')
  })
  it('throws an error if it is passed an array without valid dates', function () {
    expect(function () {
      range(['foo', 'bar'])
    }).toThrow('range array must contain valid dates')
  })
  it('throws an error if it is passed an array without valid dates', function () {
    expect(function () {
      range(['Oct 1, 2016', 'Oct 1, 2015'])
    }).toThrow('the second date must be greater than the first date')
  })
})
describe('The range object', function () {
  var rangeTest = range(['Oct 1, 2016', 'Oct 15, 2016'])
  it('contains contains, toArray, duration, start, and end methods', function () {
    expect(typeof rangeTest.contains === 'function' &&
      typeof rangeTest.toArray === 'function' &&
      typeof rangeTest.duration === 'function' &&
      typeof rangeTest.start === 'function' &&
      typeof rangeTest.end === 'function'
    ).toEqual(true)
  })
  describe('the contains method', function () {
    it('throws an error if not passed a valid date or date string', function () {
      expect(function () {
        rangeTest.contains('foo')
      }).toThrow('the first argument of the contains method must be a valid date')
    })
    it('returns true if the date is within the range', function () {
      expect(rangeTest.contains('Oct 5, 2016')).toEqual(true)
    })
    it('returns false if the date is not within the range', function () {
      expect(rangeTest.contains('Oct 15, 2016')).toEqual(false)
    })
  })
  describe('the toArray method', function () {
    it('returns an array with the start and end date', function () {
      var dateArr = ['Oct 1, 2016', 'Oct 15, 2016']
      var rangeArr = range(dateArr).toArray()
      expect(rangeArr[0] === dateArr[0] && rangeArr[1] === dateArr[1]).toEqual(true)
    })
  })
  describe('the duration method', function () {
    it('throws an error if the first arg is not a valid time unit', function () {
      expect(function () {
        rangeTest.duration('foo')
      }).toThrow('the first argument of the duration method must be valid type')
    })
    it('returns the duration in the given unit', function () {
      expect(rangeTest.duration('week')).toEqual(2)
    })
  })
  describe('the start method', function () {
    it('returns the start date of the range', function () {
      var dateArr = ['Oct 1, 2016', 'Oct 15, 2016']
      var rangeStart = range(dateArr).start()
      expect(rangeStart === dateArr[0]).toEqual(true)
    })
  })
  describe('the end method', function () {
    it('returns the end date of the range', function () {
      var dateArr = ['Oct 1, 2016', 'Oct 15, 2016']
      var rangeEnd = range(dateArr).end()
      expect(rangeEnd === dateArr[1]).toEqual(true)
    })
  })
})

