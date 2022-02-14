var el = document.querySelector('.throttle_button');
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
const throttle = (fn, delay) => {
	let last = 0;
	return function (...args) {
		const now = new Date().getTime();
		if (now - last < delay) {
			return;
		}
		last = now;
		return fn(...args);
	};
};
const newFunction = debounce(getData, 500);
const throttleFunction = throttle(getData, 5000);
