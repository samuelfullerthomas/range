function range (range) {
  var _units = {
    year: 1000 * 60 * 60 * 24 * 365,
    week: 1000 * 60 * 60 * 24 * 7,
    month: 1000 * 60 * 60 * 24,
    day: 1000 * 60 * 60 * 24,
    hour: 1000 * 60 * 60,
    minute: 1000 * 60,
    second: 1000,
    millisecond: 1
  }
  var isArr = Object.prototype.toString.call(range) === '[object Array]'
  if (!isArr) throw new Error('range must be an array')

  range[0] = new Date(range[0])
  range[1] = new Date(range[1])
  if (isNaN(range[0]) || isNaN(range[1])) throw new Error('range array must contain valid dates')
  if (range[0] > range[1]) throw new Error('the second date must be greater than the first date')

  var rangeMethods = {
    contains: function (date) {
      date = new Date(date)
      if (isNaN(date.getTime())) throw new Error('the first argument of the contains method must be a valid date')
      return date > range[0] && date < range[1]
    },
    toArray: function () {
      return range
    },
    duration: function (unit) {
      if (unit && !_units[unit]) throw new Error('the first argument of the duration method must be valid type')
      unit = _units[unit] || 1
      return (range[1] - range[0]) / unit
    },
    start: function () {
      return range[0]
    },
    end: function () {
      return range[1]
    }
  }
  return rangeMethods
}

module.exports = range
