//currying is a technique which involves converting a function which takes single arg into a sequence of fxns that take multiple arguments

//currying using bind
const multiple = function (x, y) {
	console.log(x * y);
};

const multipleBy2 = multiple.bind(this, 2);
multipleBy2(2);

const newMultiply = function (x) {
	return function (y) {
        console.log(x,y);
		console.log(x * y);
	};
};

const multplyBy2 = newMultiply(2);
multplyBy2(3 );
