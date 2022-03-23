/*
Credit: Adapted from a problem in Cracking the Coding Interview, 6th Edition. Gayle Laakmann McDowell, Career Cup (Palo Alto, CA). 2015.

This is a short-length challenge, but requires some clever thinking.

Given two lists, find the smallest difference (subtraction) between any two nums.

For example, given the arrays:

[10, 20, 14, 16, 18]
[30, 23, 54, 33, 96]
The result would be 3, since 23 - 20 = 3 is the smallest difference of any pair of numbers in those lists.

Write a function that determines the smallest difference.
*/

let arr1 = [10, 20, 14, 16, 18];
let arr2 = [30, 23, 54, 33, 96, 19];

let smallestDiff = (arr1, arr2) => {
    let min = 100;

    for(let i = 0; i < arr2.length; i++){
        for(let j = 0; j < arr1.length; j++){
            // console.log(arr2[i] - arr1[j]);
            if(min > (arr2[i] - arr1[j])){
                min = arr2[i] - arr1[j];
            }
        }
    }
    return min;
}

let smallestDiff2 = (arr1, arr2) => {
    let maxArr1 = Math.max(...arr1);
    let minArr2 = Math.min(...arr2);

    let minDiff = minArr2 - maxArr1;
    while(minDiff < 0 && arr1.length > 0){
        arr1.splice(arr1.indexOf(maxArr1), 1);
        maxArr1 = Math.max(...arr1);
        minDiff = minArr2 - maxArr1;
    }
    
    return minDiff;
}

// console.log(smallestDiff(arr1, arr2));
console.log(smallestDiff2(arr1, arr2))