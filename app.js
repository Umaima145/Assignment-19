//ch 14 - 16
//q1
var futureStudentNames = [];

//q2
var futureStudentNames1 = {
    names: []
};

//q3
var stringArray = ["apple", "banana", "orange", "grape"];
document.write(stringArray)


//q4
var numbersArray = [1, 2, 3, 4, 5];
document.write("<br>",numbersArray)

//q5
var booleanArray = [true, false, true, true, false];
document.write("<br>",booleanArray)

//q6
var mixedArray = ["apple", 42, true, "banana", false, 7];
document.write("<br>",mixedArray)

//q7
var qualifiacation = ["1) SSC <br> 2) HSC <br> 3) BCS <br> 4) BS <br> 5) BCOM <br> 6) MS <br> 7) M.PHIL <br> 8) PHD "]
document.write("<br><h1>Qualifications</h1>",qualifiacation)

//q8
var name1 = "Umaima"
var name2 = "Ayela"
var name3 = "Khadija"
var score1=[320]
var score2=[230]
var score3=[480]
var percent1 =(score1)/500*100
var percent2 =(score2)/500*100
var percent3 =(score3)/500*100

document.write("<br><h1>Mark Sheet</h1>","Score of "+name1," is"+ score1,".","Percentage is "+percent1,"%","<br>","Score of "+name2," is"+ score2,".","Percentage is "+percent2,"%","<br>","Score of "+name3," is"+ score3,".","Percentage is "+percent3,"%")

//q9
//a

var color=["Red","Green","Purple"]

document.write("<br><h1>a)Colors</h1>",color)

var colorAdd =prompt("Enter a color to add to the beginning:")
color.unshift(colorAdd)
document.write( "<br><h3>Updated Colors</h3>",color.join(", "))

//b

var color1=["Red","Green","Purple"]

document.write("<br><h1>b)Colors</h1>",color1)

var colorAdd1 =prompt("Enter a color to add to the end:")
color1.push(colorAdd1)
document.write( "<br><h3>Updated Colors</h3>",color1.join(", "))

//c
document.write("<br><h3>c</h3>")
var colors2 = ["red", "green", "blue"];
document.write("<br>",colors2)
colors2.unshift("yellow", "orange");
document.write("<br>",colors2.join(", "))

//d
document.write("<br><h3>d</h3>")
var colors3 = ["red", "green", "blue"];
document.write("<br>",colors3)
colors3.shift();
document.write("<br>",colors3.join(", "))

//e
document.write("<br><h3>e</h3>")
var colors4 = ["red", "green", "blue"];
document.write("<br>",colors4)
colors4.pop();
document.write("<br>",colors4.join(", "))

//f
document.write("<br><h3>f</h3>")
var colors5 = ["red", "green", "blue"];
document.write("<br>",colors5)
var Add = +(prompt("Enter the index where you want to add the color:"));
var colorToAdd = prompt("Enter the color you want to add:");
colors5.splice(Add, 0, colorToAdd);
document.write("<br>",colors5.join())

//g
document.write("<br><h3>f</h3>")
var colors6 = ["red", "green", "blue"];
document.write("<br>",colors6)
var remove = +(prompt("Enter the index where you want to delete the color:"));
colors6.splice(remove);
document.write("<br>",colors6.join(", "))

//q10
var studentScores = [320, 230, 480, 120];
document.write("<br>Scores of students: ",studentScores)
studentScores.sort((a, b) => a - b);
document.write("<br>Oddered scores of students: ",studentScores)

//q11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = [];
selectedCities = cities.slice(2, 4);
document.write("<br>Selected cities:", selectedCities);


//q12
var arr = ["This", "is", "my", "cat"];
document.write("<br>",arr)
var singleString = arr.join(" ");
document.write("<br>",singleString);

//q13
document.write("<br><h1>Devices</h1>")
var arr4=["keyboard","Mouse","Printer","Monitor"]
document.write("<br>",arr4)
var arr5 = [];
arr5.push("<br>keyboard");
arr5.push("<br>Mouse");
arr5.push("<br>Printer");
arr5.push("<br>Monitor");


document.write("<br><h2>Out</h2>","<br>",arr5.shift()); 
document.write("<br><h2>Out</h2>","<br>",arr5.shift()); 
document.write("<br><h2>Out</h2>","<br>",arr5.shift()); 
document.write("<br><h2>Out</h2>","<br>",arr5.shift()); 

//q14
document.write("<br><h1>Devices</h1>")
var arr7=["keyboard","Mouse","Printer","Monitor"]
document.write("<br>",arr4)
var arr6 = [];
arr6.push("<br>keyboard");
arr6.push("<br>Mouse");
arr6.push("<br>Printer");
arr6.push("<br>Monitor");


document.write("<br><h2>Out</h2>","<br>",arr6.pop()); 
document.write("<br><h2>Out</h2>","<br>",arr6.pop()); 
document.write("<br><h2>Out</h2>","<br>",arr6.pop()); 
document.write("<br><h2>Out</h2>","<br>",arr6.pop()); 

//Question PDF 14 - 16
//CH 14
//Q1

var empty =[]

//q2
var st=["a","b","c"]

//q3
var alphabet = ["h", "i", "j", "k"];
alert(alphabet[2]); 

//q4
var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
var lengthOfArray = alphabet.length;
document.write("<br>","Total length of the array:", lengthOfArray);

//q5
var myArray = ["apple"];
myArray[1] = "banana";

alert(myArray[1]);

//ch 15
//q1
var myArray1 = ["mango"];
myArray1.push("grapes");

alert(myArray1[myArray1.length - 1]);

//q2
var Alphabet = ["h", "i", "j", "k"];
Alphabet.pop(); 
document.write("<br>",Alphabet);

//q3
var Alphabet1 = ["h", "i", "j", "k"];
Alphabet1.push("L"); 
document.write("<br>",Alphabet1); 

//ch 16
//q1
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift(); 
document.write("<br>",sizes);

//q2
var sizes1 = ["S", "M", "XL", "XXL", "XXXL"];
sizes1.unshift(1, 2, 3); 
document.write("<br>",sizes1); 

//q3

var my2=["First element"]
my2.unshift("Second element")
alert(my2[0]);

//q4
var sizes2 = ["S", "M", "XL", "XXL", "XXXL"];
sizes2.splice(2, 0, "L"); 
document.write("<br>",sizes2); 

//q5
var sizes3 = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes = sizes3.slice(0, 3);
document.write("<br>",regSizes); 

//q6
var pets3 = ["dog", "cat", "ox", "duck", "frog"];
pets3.splice(2, 0, "lion", "tiger");
pets3.splice(1, 3);
document.write("<br>",pets3); 

//q7
var pets4 = ["dog", "cat", "ox", "duck", "frog"];

pets4.splice(1, 2); 

document.write("<br>",pets4); 

//q8
var pets5 = ["dog", "cat", "ox", "duck", "frog", "flea"];
pets5 = pets5.slice(3, 6);
document.write("<br>",pets5); 
