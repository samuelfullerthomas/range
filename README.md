# Range

![Range](https://d1m54pdnjzjnhe.cloudfront.net/pngineer/f224f330-9222-11e6-9912-65149d414739.jpg)

Simple date range utility that returns a range object with useful methods

# Usage

##  Range creation
```javascript
var range = require('./range')
var myRange = range(['Oct 21, 2016', 'Oct 31, 2016'])
```

##  Contains
```javascript
myRange.contains('Oct 22, 2016') // True
myRange.contains('Oct 15, 2016') // False
```

##  toArray
```javascript
myRange.toArray() // Returns ['Oct 21, 2016', 'Oct 31, 2016']
```

##  start
```javascript
myRange.start() // Returns Oct 21, 2016
```

##  end
```javascript
myRange.end() // Returns 'Oct 31, 2016'
```