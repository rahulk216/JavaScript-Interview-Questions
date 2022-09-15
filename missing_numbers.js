//initially sort the array 
//store min and max from the sorted array
//take difference of consecutive elements in the array
//find most frequent number in the diff array

//since we have difference and min and max . will find the series and check if every term is present in the inital given array . If not store it in the ans array

let arr = [2,1,9,5,4] //output : 3,6,7,8
let arr1 = [20,12,8,4] //output : 16
let arr2 = [6,15,9,3] // output :12


function mostFrequent(diffArr){
    let item
    let mf =1;
    let m=0
    for (var i=0; i<diffArr.length; i++)
    {
        for (var j=i; j<diffArr.length; j++)
        {
                if (diffArr[i] == diffArr[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = diffArr[i];
                }
        }
        m=0;
    }
    return item;
}

function missingNumbers(array){
    let temp = array.sort((a,b) => a-b) //array sorting
    
    let min = temp[0];
    let max = temp[array.length-1]  //storing min and max
    
    let diff = []
    for(let i=0;i<temp.length-1;i++){
        let check = temp[i+1] - temp[i]   //difference of consecutive elements in the array
        diff.push(check)
    }

    let mostFreqent = mostFrequent(diff); //most frequent number in the diff array

    let ans = [];
    for(let i=min;i<max;){
        let seq = i+mostFreqent
        i = seq;
        if(!array.includes(seq))  //will find the series and check if every term is present in the inital given array . If not store it in the ans array
             ans.push(seq)  
    }
    return ans
}

const ans1 = missingNumbers(arr)
const ans2 = missingNumbers(arr1)
const ans3 = missingNumbers(arr2)

console.log(ans1,ans2,ans3)