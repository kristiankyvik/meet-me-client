var Storage = (function () {
    var _key = null;
    var _fields = {};

    var _model = function(name, fields) {
        _key = name;
        if (fields) _fields[_key] = fields;
    };

    var _create = function() {
        var repository = _get();
        repository[arguments[0]] = _createObject(arguments);
        _save(repository);
    };

    var _read = function(name) {
        var repository = _get();
        console.log((name) ? repository[name] : repository);
        return (name) ? repository[name] : repository;
    };

    var _update = function() {
        var repository = _get();
        var name = arguments[0];
        if (repository[name])
            repository[name] = _createObject(arguments);
        _save(repository);
    };

    var _drop = function(name) {
        var repository = _get();
        delete repository[name];
        _save(repository);
    };

    var _get = function() {
        return JSON.parse(window.localStorage.getItem(_key)) || {};
    };

    var _save = function(data) {
        if (_key) window.localStorage.setItem(_key, JSON.stringify(data));
    };

    var _createObject = function(properties) {
        var model = {};
        for (var element in _fields[_key]) {
            field = _fields[_key][element];
            model[field] = properties[parseInt(element) +1 ];
        }
        return model;
    };

    return function(){
        this.model   = _model;
        this.create  = _create;
        this.read    = _read;
        this.update  = _update;
        this.drop    = _drop;
    };

})();
// Documentation xD
// var storage = new Storage();
// storage.model("locations", ["name", "street", "city", "zip_code", "country", "latitude", "longitude", "user_id"]);