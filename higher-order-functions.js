const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//map : transforms an array

const mapOutput = a.map((item) => {
	return item * 2;
});
console.log(mapOutput);

//filter : filtering the array

const filterOutput = a.filter((item) => {
	return item % 2;
});
console.log(filterOutput);

//reduce : reduce the array to a single element array ex: sum of all the elements in the array
const reduceOutput = a.reduce((acc, item) => {
	acc = acc + item;
	return acc;
}, 0);
console.log(reduceOutput);
