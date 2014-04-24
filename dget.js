exports = module.exports = function dstruc ( obj, path ) {
    for (
        var i=0,
        path = path.split('.'),
        len = path.length;
        i < len;
        i++
    ) {
        try { obj = obj[path[i]]; } catch (e) { obj = undefined; }
    };

    return obj;
};