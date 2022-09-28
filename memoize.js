const cal = (n) =>{
    let sum = 0;
    for(let i=0;i<=n;i++){
        sum+=i;
    }
    return sum;
}

const memoize = (fxn) =>{
    let cache={}
    return function(...args){
        let n = args[0];
        if(n in cache){
            console.log('existed')
            return cache[n];
        }else{
            console.log('first time')
            cache[n] = fxn(n)
            return cache[n];
        }
    }
}


console.time();
const efficient = memoize(cal);
console.log(efficient(1000000000))
console.timeEnd();



console.time();
console.log(efficient(1000000000))
console.timeEnd();
