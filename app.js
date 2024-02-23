var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var arr1 = [5, 10, 20, 100, 45];
var firstNum = arr1[0], secondNum = arr1[1];
var sum = firstNum + secondNum;
var obj1 = {
    name: "Ali",
    surname: "Hilal",
    age: 19,
};
var personName = obj1.name, surname = obj1.surname, rest = __rest(obj1, ["name", "surname"]);
if (firstNum > 0 && firstNum % 2 === 0) {
    console.log("true");
}
else {
    console.log("false");
}
if (firstNum === secondNum || rest.age !== secondNum) {
    console.log("true");
}
else {
    console.log("false");
}
if (sum > rest.age) {
    console.log("Array win");
}
else {
    console.log("Object win");
}
var userName = "Xasi";
console.log(userName === obj1.name ? "True Name" : "False Name");
