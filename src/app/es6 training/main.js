var minhavar = 'minha variável';
function minhaFunc(x, y) {
    return x + y;
}
var res = minhaFunc(7, 7); //typescript var
var PI = 3.14; //typescript constant
console.log("Resultado: ", res);
//arrow functions demonstration
var num = [1, 2, 3, 4];
console.log("Array: ", num);
/*using normal function declaration*/
var doublesfun = num.map(function (valor) { return valor * 2; });
console.log("doubles using function: ", doublesfun);
/*using arrow function declaration*/
var doublesarrow = num.map(function (valor) { return 2 * valor; });
console.log("doubles using arrow function: ", doublesarrow);
/*typing*/
var number;
number = 7;
var char;
char = "a";
