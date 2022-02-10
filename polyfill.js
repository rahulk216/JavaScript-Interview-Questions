let name = {
	fname: 'John',
	lname: 'Doe',
};

function printName() {
	console.log(this.fname + ' ' + this.lname);
}

const printNameFxn = printName.bind(name);
printNameFxn();

Function.prototype.myOwnBind = function (...args) {
	let obj = this;
	const params = args.slice(1);
	return function (...args2) {
		obj.apply(args[0], [...params, ...args2]);
	};
};
const ownPrintNameFxn = printName.myOwnBind(name);
ownPrintNameFxn();
