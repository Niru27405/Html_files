// String Operations 
const str1 = "Hello World";
document.write(str1);

// Str includes
var str = "we the students of SRM IST";
document.write(str);
document.write(str.includes("IST"));
document.write(str.includes("TRP"));

// Str StartsWith
document.write(str.startsWith("W"));
// Endswith
document.write(str.endsWith("IST"));

// indexOf
var str = "prassana";
document.write(str.indexOf("a"));
// lastindexOf
document.write(str.lastIndexOf("a"));

var str = "pradeep";
document.write(str.charAt(4));
document.write(str(4));

for(i=0;i<str.length;i++){
    document.write([str[i]]);
}

document.write(str.charCodeAt(2));

var str = "chandresh";
document.write(str.slice(4));

document.write(str.slice(2,5));

document.write(str.substring(2,5));

let arr = [1,2,3,4,5];
const str = arr.join(",");
document.write(str);
document.write(str.split("-"));

var str = "This is my strings session";
document.write(str.split("is"));

var str = " niRanJanA ";
document.write(str.toLowerCase());
document.write(str.toUpperCase());

var str = "          Niranjana    ";
document.write(str.trim())

document.write("hello" + str.trim() + " How     is    your   day   ");
document.write(str.trimStart());
document.write(str.trimEnd());

document.write("5".padStart(5,"0"));
document.write("5".padEnd(5,"0"));

var str= "Ramu";
document.write("Hello"+str);
document.write("Hello" ,$(str))

let a = 10;
let b = 20;
document.write($(a+b));
