let name1 = {
	firstname: 'John',
	lastName: 'Doe',
};

function sentenceName(area, pincode) {
	console.log(`${this.firstname} ${this.lastName} of ${area} and ${pincode}`);
}

//sentenceName(name1);  //undefined

//using call
sentenceName.call(name1);
sentenceName.call(name1, 'Delhi', '110092');

//using apply
sentenceName.apply(name1, ['Delhi', '110092']);

//using bind
const bindFxn = sentenceName.bind(name1, 'Delhi', '110092');
bindFxn();
console.log(bindFxn);
