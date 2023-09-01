console.log("1)Print odd numbers in an array");

let arr1 = [1,2,3,4,7,10];
console.log("input",arr1);
(function(arr){
 for(let i=0;i<arr.length;i++){
    if(arr[i] % 2 !==0){
        console.log(arr[i]);
    }
 }
})(arr1);

console.log("(----------------------------------------------------)");

console.log("2)convert all strings to title caps in string array");

let arr2 = ["maddy","kavin","nallavan"];
console.log("input:",arr2);
let final = [];
(function(arr2){
for(let i=0;i<arr2.length;i++){
    let separate = arr2[i].split("");
    let title = separate[0].toUpperCase();
    separate.shift();
    separate.unshift(title);
    let changed = separate.join(""); 
    final.push(changed);
}
console.log(final);
})(arr2);

console.log("(----------------------------------------------------)");

console.log("3)sum of all numbers in array");

let arr3 = [1,45,7,5,8];
console.log("input:",arr3);
let sum = 0;
(function(arr){
    for (let i=0;i<arr.length;i++){
       sum += arr[i];
    }
    console.log(sum);
})(arr3);

console.log("(----------------------------------------------------)");

console.log("4)return all prime numbers in array");

let arr4 = [1,2,3,4,5,6,7,11,12,13,14,21,23,25];
console.log("input:",arr4);
(function(arr){
    for (let i=0;i<arr.length;i++){
        function checkPrime (n){
          if(n==1){
            return false;
          }
          else if(n==2){
            return true;
          }
          else if(n>2){
            for(let j=2;j<n;j++){
                if(n%j == 0){
                    return false;
                    break;
                }
            }
            return true;
          } 
        }
        let result = checkPrime(arr[i]);
        if(result == true){
            console.log(arr[i]);
        }    
    }
})(arr4);

console.log("(----------------------------------------------------)");

console.log("5)return all the palindromes in array");

let arr5 = ["amar","noon","malayalam","madam","tamil","vanakam"];
console.log("input",arr5);
let arr6 = [];
(function(arr5){
    for(let i=0;i<arr5.length;i++){
        let changed = arr5[i].split("").reverse().join("");
        arr6.push(changed);
    }
    for(let j=0;j<arr5.length;j++){
          if(JSON.stringify(arr6[j]) === JSON.stringify(arr5[j])){
            console.log(arr5[j]);
          }
    } 
})(arr5);

console.log("(----------------------------------------------------)");

console.log("6)Return median of two sorted arrays of the same size");

let ar1 = [2,5,1];
let ar2 = [7,9,4,6];
console.log("input",ar1,ar2);
(function(ar1,ar2){
   let merged = ar1.concat(ar2).sort();
   if (merged.length%2 != 0){
      let l = merged.length/2;
      l = l-0.5;
      console.log("merged array",merged);
      console.log("median:",merged[l]);
   }
   else{
    let ind1 = merged.length/2;
    let ind2 = ind1-1;
    let mid = (merged[ind1] + merged[ind2])/2;
    console.log("merged array",merged);
    console.log("median:",mid);
   }
})(ar1,ar2);

console.log("(----------------------------------------------------)");

console.log("7)Remove duplicates from an array");

let arr7 = [1,2,5,4,5,6,2,1];
console.log("input",arr7);
let ar = [];
(function(arr){
   let varisai = arr.sort();
   for(let i=0;i<varisai.length;i++){
    let temp = varisai[i];
    if (temp != varisai[i+1]){
       ar.push(temp);
    }
   }
   console.log(ar);
})(arr7);

console.log("(----------------------------------------------------)");

console.log("8)Rotate an array by k times");

let arr8 = [1,2,3,4,5];
console.log("input",arr8);
(function(arr){
    let k = 2;
    while(k!=0){
        let y = arr.length-1;
        let last = arr[y];
       for(let i=y;i>0;i--){
        arr[i]=arr[i-1];
       }  
       arr[0]=last;
       k--;
    }
    console.log("after rotating for k=2 times",arr);
})(arr8);
