// Array operation
// for each

var arr = [1,2,3,4,5];
document.write(arr+"\n");

arr.forEach((num) => document.write(num*5+"\n"));

// Array Some
var x = arr.some((num)=> num%2===0);
document.write(x+"\n");

// Array Find
var y = arr.find((num) => num%2===0);
document.write(y+"\n");

// Array Filter
var z = arr.filter((num)=>num%2==0);
document.write(arr+"\n");

// Array Map
var a = arr.map((num)=>num+num);
document.write(a+"\n");

// Array Reduce
var b = arr.reduce((acc,num)=>acc+num,0);
document.write(b+"\n");

var b = arr.reduce((acc,num)=>acc*num,1);
document.write(b+"\n");

