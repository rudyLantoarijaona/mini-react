Object.prototype.propAcces = function(path) {
    let obj = this;
    if(!path){
        return this;
    }

    let error = false;
    path.split('.').map(key=> {
        if(!obj.hasOwnProperty(key)){
            error = true;
            return;
        }
        obj = obj[key];
    });

    if(error){
        throw new Error('Props ${url} not exist')
    }

    return obj;
};