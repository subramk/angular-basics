// TS Allows us to use datatypes which is not doable in JS . 
let a;
let b;
let c;
let d;
let e = [1, 2, 3];
let f = ['someString', 1, true]; // mixed array 
// enum 
var Colour;
(function (Colour) {
    Colour[Colour["Red"] = 1] = "Red";
    Colour[Colour["Green"] = 2] = "Green";
    Colour[Colour["Blue"] = 3] = "Blue";
})(Colour || (Colour = {}));
//# sourceMappingURL=typescript.basics.js.map