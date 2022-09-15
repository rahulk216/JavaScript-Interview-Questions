// let name = {
// 	fname: 'John',
// 	lname: 'Doe',
// };

// function printName() {
// 	console.log(this.fname + ' ' + this.lname);
// }

// const printNameFxn = printName.bind(name);
// printNameFxn();

// Function.prototype.myOwnBind = function (...args) {
// 	let obj = this;
// 	const params = args.slice(1);
// 	return function (...args2) {
// 		obj.apply(args[0], [...params, ...args2]);
// 	};
// };
// const ownPrintNameFxn = printName.myOwnBind(name);
// ownPrintNameFxn();


const arr =[1,2,3,4,5,6,7,8 ]

Array.prototype.myMap = function(cb){
  let temp =[]
  for(let i=0;i<this.length;i++){
    temp.push(cb(this[i],i,this))
  }
  return temp;
}


Array.prototype.myFilter = function(cb){
  let temp =[];
  for(let i=0;i<this.length;i++){
    if(cb(this[i],i,this))
      temp.push(this[i])
  }
  return temp;
}

Array.prototype.myReduce = function(cb, init){
  let acc = init;

  for(let i=0;i<this.length;i++){
    acc = acc? cb(acc,this[i],i,this) : this[i] 
  }
  return acc;
}


Array.prototype.myIncludes = function(search){
    //console.log(search)
    for(let i=0;i<this.length;i++){
        if(this[i] === search){
            return true;
        }
    }
    return false;
}



String.prototype.myIndexOf = function (searchElement /*, fromIndex */ ) {
  
    //console.log(searchElement)
    if(this === null){
        throw new TypeError
    }
    if(arguments.length>1){
        let n = arguments[1];
        for(let i=n;i<this.length;i++){
            if(this[i]===searchElement)
                return i; 
        }
    }
    else{
        for(let i=0;i<this.length;i++){
            if(this[i]===searchElement)
                return i; 
        }
    }
    return -1;

};


Function.prototype.myOwnBind = function (...args) {
	let obj = this;
	let params = args.slice(1);
	return function (...args2){
	    obj.apply(args[0], [params, ...args2])
	}
	
};


Array.prototype.mySlice = function(){
    let start, end;
    let temp = [];
    if(arguments.length>1){
        start = arguments[0];
        end = arguments[1];
        
        if(start<0) start= this.length + start;
        if(end<0) end = this.length + end;
        
        for(let i = start;i<end;i++){
            temp.push(this[i])
        }
        return temp;
    }
    else{
        start = arguments[0];
        if(start<0) start= this.length + start;
        
        for(let i = start;i<this.length;i++){
            temp.push(this[i])
        }
        return temp;
    }
    
}

const mapAns = arr.myMap((val,i)=>{
  return val*3;
})
console.log(mapAns)
console.log('..............................custom Map')

const filAns = arr.myFilter((val,i)=>{
  return val>3;
})
console.log(filAns)
console.log('..............................custom filter')

const reduceAns = arr.myReduce((val,acc)=>{
  return val+acc;
},0)
console.log(reduceAns);
console.log('.....................................custom reduce')

const incAns = arr.myIncludes(5);
console.log(incAns)
console.log('.....................................custom includes')

const indexString = 'Hello my name is Rahul';
const indMyAns = indexString.myIndexOf('e', 6)
console.log(indMyAns)
console.log('.....................................custom indexOf')


const data = {
    name:"rahul",
    age : 20
}

function printData (city){
  console.log(this.name + " has age " + this.age + " and is from " +city);   
}

const ownPrintNameFxn = printData.myOwnBind(data,'Mangalore');
ownPrintNameFxn();
console.log('.....................................custom bind')

let sq =[1,2,3,4,5,6,7,8]
let ans = []
const sqAns = sq.reduce((val,i)=>{ ans.push(i*i)},0)
console.log(ans)
console.log('.....................................square using reduce')


const str = ["Banana", "Orange", "Lemon", "Apple", "Mango"]
const sliceAns = str.mySlice(-3, -2)
console.log(sliceAns)
console.log('.....................................custom slice')