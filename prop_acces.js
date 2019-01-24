Object.prototype.prop_acces = function (object, path) {
    var array_path = path.split(".");
    var obj = object;
    for (var attr in array_path) {
        var test = array_path[attr];
        obj = obj[test];
        if(obj === undefined) return path+" doesn't exist.";
    }
    if(!obj) {
        return object;
    }
}