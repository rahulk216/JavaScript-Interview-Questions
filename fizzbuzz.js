for (let i = 1; i < 100; i++) {
	var output = '';
	if (i % 3 == 0) {
		output += 'Fizz';
	}
	if (i % 7 == 0) {
		output += 'Buzz';
	}
	if (output == '') {
		output = i;
	}
	console.log(output);
}
