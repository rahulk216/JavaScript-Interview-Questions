const getData = () => {
	console.log('fetch data');
};

const debounce = function (fxn, delay) {
	let timer;
	return function () {
		clearTimeout(timer);
		timer = setTimeout(() => {
			fxn.apply(this, arguments);
		}, delay);
	};
};

const newFunction = debounce(getData, 500);
