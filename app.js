const getData = () => {
	console.log('fetching data');
};

const debounce = function (fxn, delay) {
	let timer;
	return function () {
		let context = this;
		let args = arguments;
		clearTimeout(timer);
		timer = setTimeout(() => {
			fxn.apply(context, arguments);
		}, delay);
	};
};

const newFunction = debounce(getData, 500);
