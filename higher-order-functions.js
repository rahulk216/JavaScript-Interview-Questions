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

//find max in array

const maxArrayOutput = a.reduce((acc, item) => {
	if (item > acc) {
		acc = item;
	}
	return acc;
});
console.log(maxArrayOutput);

const user = [
	{ title: 'Mr', name: 'John', age: 30 },
	{ title: 'Mr', name: 'Paul', age: 25 },
	{ title: 'Mrs', name: 'Rita', age: 35 },
	{ title: 'Mr', name: 'Peter', age: 40 },
	{ title: 'Mrs', name: 'Jane', age: 40 },
	{ title: 'Mr', name: 'Mark', age: 30 },
];

const userOutput = user.map((item) => {
	return item.title + ' ' + item.name;
});
console.log(userOutput);

const trickyOutput = user.reduce((acc, curr) => {
	if (acc[curr.age]) {
		acc[curr.age] = ++acc[curr.age];
	} else {
		acc[curr.age] = 1;
	}
	return acc;
}, {});
console.log(trickyOutput);

//name of people who have age more than 30
const filterNewOutput = user
	.filter((x) => x.age > 30)
	.map((y) => {
		return y.name;
	});
console.log(filterNewOutput);
