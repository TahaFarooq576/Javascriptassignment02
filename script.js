//program that shows all natural numbers from 1 to onwords...
//var n= 1;

//while(n>0){
   // console.log(n);
   // n++;
//}

//________________________________________

//write a program that print all natural numbers from n to 1 (reverse)

//var m= 45;
//while(m>=1){
   // console.log(m);
   // m--;
//}

//__________________________________________________
// write a program that print all alphabet from a to z...
//for(var i=65;i<=90;i++){
//var letter=String.fromCharCode(i);
//console.log(letter);
//}

//___________________________________________________

//Write a program that print all even numbers from 1 to 100...

//var m=1;
//while(m<=100){
    //if(m%2==0){
       // console.log(m);
    //}
   // m++;
//}

//__________________________________________________
// write a program to print all odd numbers from 1 to 100...
//var n=1;
//while(n<=100){
    //if(n%2!=0){
        //console.log(n);
    //}
    //n++;
//}

//_______________________________________________________
//write a program to find sum of all natural numbers frm 1 to n.....
//var num=1;
//var sum=0;
//while(num<=60){
   // console.log(num,sum=sum);
    //sum=sum+num;
    //num++;
//}

//_____________________________________________________

//write a program that print sum of all even nyumber from 1 to N...


//var num=1;
//var sum=0;
//while(num<=30){
    //if(num%2===0){
        //sum=sum+num;

    //}
    //num++;
   
    
//} 
//console.log(sum);

//__________________________________________________________


//var num=1;
//var sum=0;
//while(num<=30){
    //if(num%2!=0){
        //sum=sum+num;
       
    //}
    //num++;
    //console.log(num,sum);
   
    
//} 
//console.log(sum);

//_____________________________________________________________


//if else exercises
//write a program to find maximum b/w two numbers

//var n1=75;
//var n2=87;
//if(n1<n2){
    //console.log("Number maximum=",n2)
//}
    //else{
        //console.log("Number maximum=",n1)
    //}

//_____________________________________________________________

//write a program that find maximum number b/w 3 numbers

//var n1=65468;
//var n2=87543;
//var n3=65423;

//if(n1>n2&&n1>n3){
//    console.log("MAximum number is=",n1);
//}
//else if(n2>n1&&n2>n3){
//    console.log("maximium number is=",n2)
//}
//else{
    //console.log("maximum number is=",n3)
//}
//______________________________________________________________

//write a program that check weather a number positive,negative or zer0...

//var n=-45;
//if(n<0){
//    console.log("the given number is negative");
//}
//else if(n>0){
  //  console.log("the number is positive");
//}
//else{
   // console.log("the given number is Zero");
//}

//________________________________________________________________

//write a program that checks a number is divisible 5 and 11 0r not

//var n=45;
//if(n%5==0&&n%11==0){
//    console.log("The Given number is divisible of 5 and 11");
//}
//else if(n%5==0&&n%11!=0){
 //   console.log("The Given number is divisible of 5 and not divisible of 11");
//}
//else if(n%5!=0&&n%11==0){
//    console.log("The Given number is divisible of 11 and not divisible of 5");
//}
//else{
   // console.log("Given number is neither divisible 5 nor 11");
//}

//_______________________________________________________________________

//write a program to check weather a number is even or odd....

//var n=67;
//if(n%2==0){
//    console.log("The given number is even number");
//}
//else if(n%2!=0){
 //   console.log("The given number is odd number");
//}
//else{
    //console.log("The given number is neither even nor odd");
//}

//________________________________________________________________________

//write a program that check wheater a year is leap year or not..


//var year=2024;
//if(year%4==0){
 //   console.log("The given year is a leap year");
//}
//else{
    //console.log("The given number is not a leap year");
//}

//________________________________________________________________

//var ch="ta";
//if(typeof ch=='string'&&ch.length==1){
  //  console.log("the given character is alphabet is ");
//}
//else{
    //console.log("the given character is not a alphabet");
//}

//________________________________________________________________

//Write a program that check weather a given character is vowel or not...

//var ch='a';
//if(ch=='a'||ch=='A'){
    //console.log("The given character is a vowel character");
//}
//
//else if(ch=='o'||ch=='O'){
   //console.log("The given character is a vowel character");
//}
//else if(ch=='u'||ch=='U'){
//    console.log("The given character is a vowel character");
//}
//else{
   // console.log("the given character is not a vowel character it is a consonent");  
//}

//____________________________________________________________________

//write a program that checj weather a charector is special character,digit,character onlu...

var i = 'A';
var charCode = i.charCodeAt(0);

if (charCode >= 48 && charCode <= 57) {
   console.log("The given character is a number", i);
} else if (charCode >= 65 && charCode <= 90) {
   console.log("The given character is a Capital Alphabet", i);
} else if (charCode >= 97 && charCode <= 122) {
   console.log("The given character is a Small Alphabet", i);
} else if (charCode >= 33 && charCode <= 47) {
   console.log("The given character is a special character", i);
} else {
   console.log("Invalid input! Please enter a single character, digit, or alphabet.");
}

//______________________________________________________________________________________________


//write a program that input week no and print week day...

// var wn=5;
// if(wn==0){
//     console.log("Week day:Sunday");
// }
// else if(wn==1){
//     console.log("Week day:Monday");
// }
// else if(wn==2){
//     console.log("Week day:Teusday");
// }
// else if(wn==3){
//     console.log("Week day:Wednesday");
// }
// else if(wn==4){
//     console.log("Week day:Thursday");
// }
// else if(wn==5){
//     console.log("Week day:Friday");
// }
// else if(wn==6){
//     console.log("Week day:Saturday");
// }
// else{
//     console.log("Invalid input!please input the week no between 0 To 7")
// }

//_________________________________________________________________________________________________

//write a program that input name of month and print no of days in that month....

// var mn=2;
// if(mn==1){
//     console.log("The month is January and it has 31 days")
// }
// else if(mn==2){
//     console.log("The month is Feburary and it has 28 days in leap lear and 29 days if it is not a leap year the leap year is year that is divisible by 4");
// }
// else if(mn==3){
//     console.log("The month is March and it has 31 days");
// }
// else if(mn==4){
//     console.log("The month is April and it has 30 days");
// }
// else if(mn==5){
//     console.log("The month is May and it has 31 days");
// }
// else if(mn==6){
//     console.log("The month is June and it has 30 days");
// }
// else if(mn==7){
//     console.log("The month is July and it has 31 days");
// }
// else if(mn==8){
//     console.log("The month is Augest and it has 31 days");
// }

// else if(mn==9){
//     console.log("The month is september and it has 30 days");
// }

// else if(mn==10){
//     console.log("The month is October and it has 31 days");
// }

// else if(mn==11){
//     console.log("The month is November and it has 30 days");
// }
// else if(mn==12){
//     console.log("The month is December and it has 31 days");
// }
// else{
//     console.log("Invalid input!Please enter month no b/w 1 to 12")
// }

//_______________________________________________________________________________________

//write a program that check weather a triange is valid or invalid.....

// var a=0;
// var b=0;
// var c=0;
// if(a+b>c){
//     console.log("The angles belong to valid triangle b/c a+b>c");
// }
// else if(a+c>b){
//     console.log("The angles belong to valid triangle b/c a+c>b");
// }
// else if(c+b>a){
//     console.log("The angles belong to valid triangle b/c c+b>a");
// }
// else{
//     console.log("The angles are not belongs to valid triangle");
// }

//________________________________________________________________________________________

//Write a program that input sides of triganlge and check weather a triangle is a equilitral,isoscalane,scalne triangle...

// var s1=45;
// var s2=45;
// var s3=45;

// if((s1==s2&&s1==s3)||(s2==s1&&s2==s3)||(s3==s1&&s3==s2)){
//     console.log("The given sides are sides of Equilitral triangle b/c all sides are equal to each other");
// }
// else if((s1==s2&&s1!=s3)||(s2==s3&&s2!=s1)||(s3==s1&&s3!=s2)){
//     console.log("The given sides are sides of isoscales triangle b/c two sides are equal to eachother but third is not equal");
// }
// else if((s1!=s2&&s1!=s3)||(s2!=s1&&s2!==s3)||(s3!=s1&&s3!=s2)){
//     console.log("The given sides are sides of scalane triangle b/c all sides are different to each other");
// }
// else{
//     console.log("invalid input!")
// }

//___________________________________________________________________________________________

//write a program that input five subject marks and display grades...


// var phy=60;
// var mth=69;
// var com=85;
// var chm=90;
// var bio=91;
// var per=((phy+mth+com+chm+bio)/500)*100;

// if(per>=90&&per<=100){
//     console.log("Cngratulations! you got A grade");
// }
// else if(per>=80&&per<90){
//     console.log("Cngratulations! you got B grade");
// }
// else if(per>=70&&per<80){
//     console.log("Passed! you got C grade");
// }
// else if(per>=60&&per<70){
//     console.log("Passed! you got D grade");
// }
// else if(per>=40&&per<60){
//     console.log("Passed! you got E grade");
// }
// else if(per>=1 && per<40){
//     console.log("Fail!you got F grade");
// }
// else{
//     console.log("Invalid input");
// }

//_____________________________________________________________________________________

//write a program that input basic salary and calculate its gross salary....

// var basic=10000;
// var gross;
// if(basic>=10000){
//     gross=(basic/100)*20;
//     console.log(basic+gross);
// }
// else if(basic<=20000&&basic>10000){
//     gross=(basic/100)*25;
// }
// else if(basic>30000){
//     gross=(basic/100)*30;
// }
// else{
//     console.log("invalid input");
// }

//_________________________________________________________________________________________

//write a program that calculate electricity buiill according to units consumed...

// var unit_price=40;
// var unit_consumed=160;
// var bill=unit_price*unit_consumed;
// var net_bill;

// if(unit_consumed<=50){
//     net_bill=bill+(unit_consumed*0.5)
//     console.log("net_bill=",net_bill);
// }
// else if(unit_consumed>50&&unit_consumed<=150){
//     net_bill=bill+(unit_consumed*0.75)
//     console.log("net_bill=",net_bill);
// }
// else if(unit_consumed>150&&unit_consumed<=250){
//     net_bill=bill+(unit_consumed*1.20)
//     console.log("net_bill=",net_bill);
// }
// else if(unit_consumed>250){
//     net_bill=bill+(unit_consumed*1.50)
//     console.log("net_bill=",net_bill);
// }
// else{
//     console.log("invalid input")
// }
//_____________________________________________________________________________________________

