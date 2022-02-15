//flatten an array
//Output : [1,2,3,4,5,6,7,8,9,10]
let a = [
	[1, 2],
	[3, 4],
	[5, [6, 7], 8],
	[9, 10],
];

//built in function
console.log(a.flat(2));

//custom function
function flatten(arr, depth) {
	let result = [];

	arr.forEach((element) => {
		if (Array.isArray(element) && depth > 0) {
			result.push(...flatten(element, depth - 1));
		} else {
			result.push(element);
		}
	});

	return result;
}

console.log(flatten(a, 2));
