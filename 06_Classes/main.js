var User = /** @class */ (function () {
    function User() {
        this.age = 20;
        this.name = 'Art';
    }
    User.prototype.setAge = function (age) {
        this.age = age;
    };
    return User;
}());
var art = new User();
console.log(art.setAge(30));
// art.myAge = 26
console.log(art);
