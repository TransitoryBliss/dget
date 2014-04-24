var expect, dget;
expect = require('chai').expect;
dget = require('../dget.js');

var mock = {
    deep: {
        obj: {
            is: "great"
        },
        arr: ['123', 0],
        prop: "some string",
        but: {
            find: {
                me: "val"
            }
        }
    }
}

describe('dget', function() {
    it('should return deep values', function () {
        var result = dget(mock, 'deep.but.find.me');
        expect(result).to.equal('val');
    });

    it('should return undefined if not found', function () {
        var result = dget(mock, 'deep.obj.is.non.existing');
        expect(result).to.equal(undefined);
    });
});