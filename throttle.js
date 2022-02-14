window.onload = function () {
	var el = document.querySelector('.throttle_button');
	console.log(el);
	if (el) {
		el.addEventListener(
			'click',
			throttle(() => {
				console.log('clicked');
			}),
			5000
		);
	}
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
