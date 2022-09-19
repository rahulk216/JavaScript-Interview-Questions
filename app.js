// const getData = () => {
// 	console.log('fetch data');
// };

// const debounce = function (fxn, delay) {
// 	let timer;
// 	return function () {
// 		clearTimeout(timer);
// 		timer = setTimeout(() => {
// 			fxn.apply(this, arguments);
// 		}, delay);
// 	};
// };
// const throttle = (fn, delay) => {
// 	let last = 0;
// 	return function (...args) {
// 		const now = new Date().getTime();
	
// 		if (now - last < delay) {
// 			return;
// 		}
// 		last = now;
// 		return fn(...args);
// 	};
// };
// const newFunction = debounce(getData, 500);
// const throttleFunction = throttle(getData, 5000);


function getData() {
    console.log('fetch data .....')
}

function debounce(fxn, delay) {
    let timer;
    return function() {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fxn.apply(this, arguments);
        }, delay)
    }
}


function throttle (fxn, delay){
	let last = 0;
	return function(...args){
		let now = new Date().getTime();

		if(now-last < delay){
			return;
		}
		
		last = now;
		return  fxn(...args);
	}
}
const debounceFxn = debounce(getData, 500);
const throttleFxn = throttle(getData, 2000)