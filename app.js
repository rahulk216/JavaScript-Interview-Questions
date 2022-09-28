function getData() {
  console.log("fetch data .....");
}

function debounce(fxn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fxn.apply(this, arguments);
    }, delay);
  };
}

function throttle(fxn, delay) {
  let last = 0;
  return function (...args) {
    let now = new Date().getTime();

    if (now - last < delay) {
      return;
    }

    last = now;
    return fxn(...args);
  };
}
const debounceFxn = debounce(getData, 500);
const throttleFxn = throttle(getData, 2000);



const worker = new Worker('worker.js');

const calculateSum = () => {
//   let sum = 0;
//   for (let i = 0; i < 10000000000; i++) {
//     sum += i;
//   }
worker.postMessage('Hello Worker')
  //alert(sum);
};

worker.onmessage = function(message){
	console.log(message)
}

const changeBackground = () => {
  if (document.body.style.background != "green")
    document.body.style.background = "green";
  else document.body.style.background = "blue";
};
