//global scope
{
	//block scope
}
function a() {
	//function scope
}
console.log('********************************************************');

{
	var b = 11; //var can be accessed outside the scope
	let c = 22; //let cannot be accessed outside the scope
	const d = 33; //const cannot be accessed outside the scope
	console.log(b);
	console.log(c);
	console.log(d);
	console.log('inside scope');
}
console.log(b);
//console.log(c);  ReferenceError: c is not defined
//console.log(d);  ReferenceError: d is not defined
console.log('outside scope');
console.log('********************************************************');

console.log('variable shadowing');

function shadowing() {
	let shadowvariable = 10;
	var varShadowVariable = 20;

	if (true) {
		let shadowvariable = 20;
		var varShadowVariable = 30;

		console.log(shadowvariable); //20
		console.log(varShadowVariable);//30
	}
 
	console.log(shadowvariable); //10
    console.log(varShadowVariable); //30 var overlaps scope declaration
    //shadowing var by let is fine but not vice versa
}

shadowing();
console.log('********************************************************');
console.log('declaration')

var x;  //Correct
var x;

// let y;
// let y;  //error

// const z;
// const z; //error

console.log('********************************************************');
console.log('Re initialisation');

var p =10;  //valid
p=20;

let q =10;  //valid
q = 20;

// const r = 20; error cant re initialise const
// r =25;

console.log('********************************************************');

console.log('Hoisting');

