var minhavar = 'minha variável';

function minhaFunc(x,y){
    return x+y;
}

let res = minhaFunc(7,7);//typescript var
const PI = 3.14;//typescript constant

console.log("Resultado: ", res);

//arrow functions demonstration
let num = [1,2,3,4];
console.log("Array: ", num);
/*using normal function declaration*/
let doublesfun = num.map( function(valor){ return valor*2; } );
console.log("doubles using function: ", doublesfun);
/*using arrow function declaration*/
let doublesarrow = num.map( (valor) => {return 2*valor;} );
console.log("doubles using arrow function: ", doublesarrow);

/*typing*/
let number: number;
number = 7;
let char: string;
char = "a";


