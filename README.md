# dget

[![Build Status](https://travis-ci.org/shockwork/dget.svg?branch=master)](https://travis-ci.org/shockwork/dget)

Get a property from deep objects using string notation.

## Installation

    $ npm install dget --save

## Usage

```js
var obj, val, nonexsting;
obj = {
    some: {
        prop: {
            deep: "Hello world!"
        }
    }
}
val = dget('some.prop.deep', obj);
console.log(val); // "Hello world!"
nonexisting = dget('non.existing.prop', obj)
console.log(val); // undefined
```

## Testing

    $ npm test

## License

BSD