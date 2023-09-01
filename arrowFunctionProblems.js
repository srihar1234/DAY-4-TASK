console.log("1)Print odd numbers in an array");

let arr1 = [1,2,3,78,56,45,59,91];
console.log("input",arr1);
let oddNum = (arr) => {
 for(let i=0;i<arr.length;i++){
    if(arr[i] % 2 !==0){
        console.log(arr[i]);
    }
 }
}
oddNum(arr1);

console.log("(----------------------------------------------------)");

console.log("2)convert all strings to title caps in string array");

let arr2 = ["hari","vishnu","kannan","saamy"];
console.log("input:",arr2);
let final = [];
let titleCaps = (arr2) => {
for(let i=0;i<arr2.length;i++){
    let separate = arr2[i].split("");
    let title = separate[0].toUpperCase();
    separate.shift();
    separate.unshift(title);
    let changed = separate.join(""); 
    final.push(changed);
}
console.log(final);
}
titleCaps(arr2);

console.log("(----------------------------------------------------)");

console.log("3)sum of all numbers in array");

let arr3 = [1,45,7,5,8];
console.log("input:",arr3);
let sum = 0;
let sumOfNumbers = (arr) => {
    for (let i=0;i<arr.length;i++){
       sum += arr[i];
    }
    console.log(sum);
}
sumOfNumbers(arr3);

console.log("(----------------------------------------------------)");

console.log("4)return all prime numbers in array");

let arr4 = [1,2,3,4,5,6,7,11,12,13,14,21,23,25];
console.log("input:",arr4);
let primeNumbers = (arr) => {
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
}
primeNumbers(arr4);

console.log("(----------------------------------------------------)");

console.log("5)return all the palindromes in array");

let arr5 = ["amar","noon","malayalam","madam","tamil","vanakam"];
console.log("input",arr5);
let arr6 = [];
let palindrome = (arr5) => {
    for(let i=0;i<arr5.length;i++){
        let changed = arr5[i].split("").reverse().join("");
        arr6.push(changed);
    }
    for(let j=0;j<arr5.length;j++){
          if(JSON.stringify(arr6[j]) === JSON.stringify(arr5[j])){
            console.log(arr5[j]);
          }
    } 
}
palindrome(arr5);
