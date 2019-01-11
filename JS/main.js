console.log("working");

// Integer
var int1 = 1;
var int2 = 2;

console.log(int1 + int2)

// Float
var float1 = 2.30;
var float2 = 12.67

console.log(float1 - float2);

//Strings
var str1 = "this is string 1";
var str2 = "this is string 2";
var str3 = "this is string 3";

var conCat = str1 + " hello world";
var interpolated = `String 3: ${str3}`

console.log(interpolated);

//Boolean
var bool1 = true;
var bool2 = false;

// ===== FALSY =====
// ""
// 0
// undefined
// null
// NaN

//===== TRUTHY =====
//Everything else


var answer = prompt("What is your name");

if(answer) {
    console.log(`Welcome ${answer}`);
}else {
    console.log("please provide your name");
    
}