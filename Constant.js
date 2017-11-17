export const User = (function ()
{
    var _name = "hello";

    return {
        getName:function () {
            return _name;
        },
        setName:function (name) {
            _name = name;
        }
    };

})();