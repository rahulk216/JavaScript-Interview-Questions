// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
    
Array.prototype.myMap = function (cb) {
    let res=[]
    for(var i=0;i<this.length;i++){
        res.push(cb(this[i],i,this))
    }
    return res;
}

Array.prototype.myFilter=function(cb){
    let res=[]
    for(var i=0;i<this.length;i++){
        if(cb(this[i],i,this))
            res.push(this[i])
    }
    return res;
}

Array.prototype.myReduce = function(cb,initialValue){
    let accumalator=initialValue;
    for(let i=0;i<this.length;i++){
        accumalator=accumalator? cb(accumalator,this[i],i,this): this[i];
    }
    return accumalator;
}


const array = [1,2,3,4,5,6,7,8,9]
const newMapArray = array.myMap((a)=>{
    return a*3;
})

const newFilterArray = array.myFilter((a)=>{
    return a>5;
})

const newReduceArray=array.myReduce((acc,a)=>{
    return acc+a;
},0)

console.log('custom map',newMapArray)
console.log('custom filter',newFilterArray)
console.log('custom reduce',newReduceArray)
