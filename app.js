// Chapter 21 - 25
//Question 1:

var fName = prompt("Enter your First name: ")
var lName = prompt("Enter your Last name: ")
var fullName = fName +" "+ lName
alert("Welcome "+fullName)

// Question 2:

var model = prompt("Enter your favourite mobile model: ")
var count = 0;
for (var i = 0 ; i < model.length ; i++){
count++
}

alert("Length of your input is: "+ count)

// Question 3;

var str = "Pakistani"
var ind = str.indexOf('n')
document.write("String: "+str+"<br>Index of  'n': "+ind)


// Question 4;

var str = "Hello World!!"
var ind = str.lastIndexOf("l")
document.write("String: "+str+"<br>Last index of  'l': "+ind)

// Question 5;

var str = "Pakistani"
var char = str.charAt(3)
document.write("String: "+str+"<br>Character at index  '3': "+char)

// Question 6;

var fName = prompt("Enter your First name: ")
var lName = prompt("Enter your Last name: ")
var fullName = fName.concat(" "+lName)
document.write("Welcome " +fullName)

//Question 7:

var str1 = "Hyderabad"
var str2 = str1.replace("Hyder" , "Islam")
document.write(" Old string is: " + str1)
document.write("<br> New string is: " + str2)

//Question 8:

var str1 = "Ali and Sami are best friends. They play cricket and football together." 
var str2 = str1.replace(/and/g , "&")
document.write(" Old string is: " + str1)
document.write("<br> New string is: " + str2)

//Question 9:

var str = "432"
var num = parseInt(str)
document.write("String is "+str + "<br>Type: "+typeof(str))
document.write("<br>number is "+num + "<br>Type: "+typeof(num))

//Question 10:

var Name = prompt("Enter a name: ")
alert(Name.toUpperCase())


//Question 11:

var Name = prompt("Enter a name: ")
document.write("User input: "+Name+ "<br>Title Case: "+Name.charAt(0).toUpperCase() + Name.slice(1))

//Question 12:

var num = 12.34
var str1 = num.toString()
alert("String is: "+str1.replace("." , ))

//Question no 13:

var uname = prompt("enter name: ")
for(var i=0 ; i<uname.length ; i++)
{
    if(uname[i] == '!' || uname[i] == ',' || uname[i] == '.' || uname[i] == '@'  )
    {
        alert("Enter Valid name.")
        break
    }
}

//Qurstion 14;

var arr = ['cake' , 'apple pie' , 'cookie' , 'chips' , 'patties']
var item = prompt("Welcome to ABC bakers!!\nwhat do you want sir/maam ?")
var ind = arr.indexOf(item.toLowerCase())
if(ind == -1)
{
    alert("We are sorry "+item.toUpperCase()+" is not available!!")
}
else{
    alert(item.toUpperCase()+" is available at index "+ind)
}

//Question 15:

var pass = prompt("Enter password: ")
if(pass.length < 6)
{
    alert("Enter valid password of atleast 6 characters!!")
}

else if(pass[0]>= '0' && pass[0]<= '9')
{
    alert("First character should be an alphabet!!")

}
else{
var count1 = 0
var count2 = 0

for(var i =0 ; i<pass.length ; i++)
{
    if((pass[i] >= 'a' && pass[i]<= 'z') || (pass[i] >= 'A' && pass[i]<= 'Z'))
    {
        count1++
        if(count1==pass.length)
        {
            alert("Must enter a number!!")
        }
    }

    else if(pass[i] >='0' && pass[i]<= '9')
    {
        count2++
    }

}
if(count1+count2 != pass.length)
   {
    alert("Only enter number or alphabets!!")
  }
else if(count1 != pass.length){
    alert("Valid Password!!")
}
}

//Question 16:

var university = 'University of Karachi'; 
var arr = university.split('')
for(var i=0 ; i<arr.length ; i++)
document.write(arr[i]+"<br>")

//Question 17:

var inp = prompt("Enter a word: ")
var last = inp.charAt(inp.length-1)
document.write("User input: "+inp+"<br>Last letter: "+last)

//Question 18:

var text1 = " The quick brown fox jumps over the lazy dog "
var text = text1.toLowerCase()
var count=0
for(var i=0 ; i<text.length ; i++)
{
   if( text[i-1]==' ' && text[i]=='t' && text[i+1]=='h' && text[i+2]=='e' && text[i+3]==' ')
{
    count++
}
}
document.write("Text is: "+text1+"<br>Count of ocurrence of 'THE' is: "+count)

//Capter 26 - 30

//Question 1:

var num = +prompt("Enter a positive number with decimal point: ")
var rnd = Math.round(num)
var flr = Math.floor(num)
var cie = Math.ceil(num)
document.write("Number is: "+num+"<br>Round of number is: "+rnd+"<br>Floor of number is: "+flr+"<br>Cieling of number is: "+cie)

//Question 2:

var num = +prompt("Enter a Negative number with decimal point: ")
var rnd = Math.round(num)
var flr = Math.floor(num)
var cie = Math.ceil(num)
document.write("Number is: "+num+"<br>Round of number is: "+rnd+"<br>Floor of number is: "+flr+"<br>Cieling of number is: "+cie)


//Question 3:

var num = -4
var absolute = Math.abs(num )
document.write("Number is: "+num+"<br>Absolute number is: "+absolute)

//Question 4:

var dice = Math.floor((Math.random() * 6) + 1)
document.write("Random number is: "+dice)

//Question 5:

var coin = Math.floor((Math.random()*2)+1)
if(coin==1)
{
    document.write(coin+"<br>Its a tail.")
}
else {
    document.write(coin+"<br>Its a head.")
}

//Question 6:

var num = Math.floor((Math.random()*100)+1)
document.write("Random number between 1 and 100 is: "+num)

//Question 7:

var weight = prompt("enter your weight in kilogram:")
var num = parseInt(weight)
document.write("your weight is "+num+" kilograms.")

//Question 8:

var secret = Math.floor((Math.random()*10)+1)
var inp = +prompt("Enter number between 1 to 10: ")
if(secret==inp){
    alert("congratulations!!!!")
}
else{
    alert("try again!!!")
}

//Capter 26 - 30
//Question 1:

document.write( new Date() )

//Question 2:
var months = ['january' , 'february' , 'march' , 'april' , 'may' , 'june' , 'july' , 'august' , 'september']
var i = new Date()
alert("Month: "+ months[i.getMonth()] )

//Question 3:
var day =  new Date().toString()
document.write("Today is: ")
for(var i=0 ; i<3 ; i++)
{
    document.write( day.charAt(i))
}

//Question 4:

var day =  new Date()
if(day.getDay == 5 || day.getDay == 6 )
{
    alert("Its a fun day!!!")
}
else
{
    alert("no fun today!!!")
}

//Question 5:

var day =  new Date()
if(day.getDate >= 1 && day.getDate <=15 )
{
    alert("First fifteen days of month!!!")
}
else
{
    alert("Last days of month!!!")
}

//Question 6:

var d = new Date()
var mili = d.getTime()
var min = ((d.getTime())/(1000*60))
document.write("Corrent date: "+d+"<br>Ellapsed millisecond since jan 1,1970: "+mili+"<br>Ellapsed minutes since jan, 1 1970: "+min)

//Question 7:

var d = new Date()
var h = d.getHours
if(h>=0 && h<=12)
{
    alert("Its AM!!")
}
else {
    alert("Its PM!!")
}

//Question 8:

var laterDate = new Date(2020,11,31,0,0,0,0)
document.write("Later Date: "+laterDate)

//Question 9:

var d = new Date("April 25, 2020") 
var day =Math.floor((new Date().getTime() - d.getTime())/(1000*60*60*24))
document.write(day)

Question 10:

var a = new Date("January 1,2020")
var b = new Date()
var dif = b.getTime() - a.getTime()
document.write("elapsed time is: "+(dif/1000))

//Question 11:

var d = new Date()
document.write("current time: "+d)
var h = d.getHours()
d.setHours(h+1)
document.write("<br>1 hour later time: "+d)

//Question 12:

var d = new Date()
alert("current time: "+d)
var y = d.getFullYear()
d.setFullYear(y-100)
alert("<br>100 year ago, time: "+d)

//Queston 13:

var age = prompt("Enter your age: ")
var d = new Date().getFullYear()
alert("your age is: "+(d-age))

//Question 14:

var unit = 312
var charges = 15
var sur = 250

document.write("<h2>KE BILL: </h2>Customer name: Ahmed Ali<br>Current Charges: "+charges+"<br>Current Units: "+unit+"<br>Amount payable (within due date): "+(charges*unit)+"<br>Surcharges: "+sur+"<br>Amount payable(after due date): "+((charges*unit)+sur))

//Chapter 35 - 38
//Question 1:

function date (){
    document.write( new Date())
}
date()

//Question 2:

function greet()
{
var f=prompt("enter first name: ")
var l = prompt("enter last name: ")
var full = f+" "+l
alert("Welcome "+full)
}
greet()

//Question 3:

function sum(){
    var a=+prompt("enter 1st number: ")
    var b=+prompt("enter 2nd number: ")
    return a+b
}
document.write("sum is: "+sum())

//Question 4:

var a=+prompt("Enter a number: ")
var b=+prompt("Enter a number: ")
var o=prompt("Enter an operator: ")

function cal(a,b,o){
    if(o == '+')
    return a+b
    else if(o == '-')
    return a-b
    else if( o == '*')
    return a*b
}

document.write("Result is:" +cal(a,b,o))

//Question 5:

function sqr(n){
return n*n
}
document.write("Square of 5 is: "+sqr(5))

//Question 6:

function fact(num){
    var x = num
    var f=0
if(x != 0)
{
    f = x * fact(x-1)
    return f
}
else{
    return 1
}
    
}
document.write(fact(3))

//Question 7:

function count(){
    var s = +prompt("enter starting number: ")
    var e = +prompt("Enter ending number: ")
    for(var i=s ; i<=e ; i++)
    document.write(i+"<br>")
}
count()

//Question 8:

function hypo(){
    var b = +prompt("enter base: ")
    var p = +prompt("enter perpendicular: ")
    function sqr(n){
        return n*n
    }
    var hypo = Math.pow((sqr(b) + sqr(p)), (0.5))
    return hypo
}

document.write("Hypotenuse is: "+ hypo())

//Question 9(I)

function area(w,h){
    return w*h
}
document.write("area is: "+ area(3,5))

//Question 9(II)

function area(w,h){
    return w*h
}
var w=5
var h=10
document.write("area is: "+ area(w,h))

//Question 10:

var str = "MADAM"
var count = 0
for(var i=0 ; i<str.length ; i++)
{
    if(str[i]==str[str.length - 1 - i])
    {
        count ++
    }

}
if(count == str.length)
{
    alert("Its PALINDROME !!")
}
else {
    alert("not a PALINDROME !!")
}

//Question 11:
var str = "a quick brown fox"
function titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
 document.write(sentence.join(" "));
 
 }
 titleCase(str)

//Question 12:
var str = "Web development course"
function longest(string) {
    var sentence = string.split(" ");
    var temp=0 , ind=0
    for(var i = 0; i< sentence.length; i++){
    
        if(temp<sentence[i].length)
        {
            temp = sentence[i].length 
            ind = i  
        }
    }
 document.write("longest word is: "+ sentence[ind]);
 
 }
 longest(str)

//Question 13:

function count(str="Hellooo World" , l="o")
{
    var count = 0
    for(var i=0 ; i<str.length ; i++)
    {
        if(str[i] == l)
        {
            count++
        }
    }
return count
}
document.write(count())

//Question 14:

function calcCircumference(r){
var c = (2*3.142)*r
return c
}

function calcArea(r){
    var a = (3.142)*(r*r)
    return a
    }
document.write("Circumference is: "+calcCircumference(5)+"m <br>Area is: "+calcArea(5)+" m<sup>2</sup>")