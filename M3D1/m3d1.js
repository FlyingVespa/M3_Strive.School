/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

function oneEx (a,b){
 
    if ( a === b) {
      console.log((3*(a+b))+  ` ---> they were the same value ${a} and ${b}`)
    } else {
        console.log((a+b) + ` ---> they were different values ${a} and ${b}`);
     
    }

}

oneEx(1,4);
oneEx(3,3);
console.log("-------------EX 2-------------------");

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

function twoEx(a,b) {
let c = 50;
    if( a === c || b=== c || a+b=== c){
        console.log(true + " --> They are 50")
        
        if (a=== c){
            console.log("a was 50");
        }else if (b===c){
            console.log("b was 50");
        }else if (a+b===c){
            console.log("a + b sum was 50");
        }
    console.log("----");
    } else {
        console.log(false + " --> They aint 50");
        console.log("----");
          
        if (a=== c){
            console.log("a was 50");
        }else if (b===c){
            console.log("b was 50");
        }else if (a+b===c){
            console.log("a + b sum was 50");
        }
    }
}
twoEx(50,0)
twoEx(22,3)
twoEx(25,25)
twoEx(4,50)

console.log("-------------EX 3-------------------");

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
function threeEx(string,i) {
    return string.slice(0,i) + string.slice(i+1);
}
console.log(threeEx("This is my string",3));

console.log("-------------EX 4-------------------");


/*

4)
 Create a function to find the largest of three given integers.
*/

function fourEx(w,s,d) {
    if (w> s && w > d ){
        console.log(`${w} --> is the largest number`);
    } else if (s > w && s> d){
        console.log(`${s} --> is the largest number`);
    } else if (d > w && d > s){
        console.log(`${d} --> is the largest number`);
    }
}
fourEx(2,5,7)
fourEx(8,5,6)
fourEx(1,9,2)

console.log("-------------EX 5-------------------");
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

function fiveEx(p,o){
    let insideNumber
    let inbetweenNumber
    
    if (p < 60 && p > 40){
        if (o < 60 && o > 40){
            insideNumber = true;
            // console.log(`${p} and ${o} are between 40 - 60`);
        } else {
            insideNumber = false;
            // console.log(`${p} and ${o} are NOT between 40 - 60`);
        }
        // console.log(insideNumber);
    };
    
    if (p <= 100 && p >= 70){
        if (o <= 100 && o >= 70){
            inbetweenNumber = true;
            // console.log(`${p} and ${o} are equal or between 70 - 100`);
        } else {
            inbetweenNumber = false;
            // console.log(`${p} and ${o} are NOT equal or between 70 - 100`);
        }
    // console.log(inbetweenNumber);
        
    };
    
    if (insideNumber == true || inbetweenNumber == true){
        console.log("The parameters were met because one was true");
    }else {
        console.log("The paramenters weren't met because one was false");
    }
}
fiveEx(61,100)
fiveEx(51,42)
fiveEx(71,100)



console.log("-------------EX 6-------------------");
/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/

function sixEx(string, copies) {
let copiedString = '';

while (copies > 0){
   copiedString += ' '+string;
   copies--;

}
 console.log(copiedString)
}

sixEx("this was copied ",5)

console.log("-------------EX 7------------------");

/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/


function sevenEx (cityName) {
   let newCity = cityName.slice(0,3)
//   console.log(newCity);
    newCity = newCity.toLowerCase();

if (newCity == 'los' || newCity == 'new'){
      console.log(cityName);
}else {
    console.log('');
}

}
sevenEx('los Angeles')
sevenEx("New York")
sevenEx("Boston")
sevenEx("NEWARK")

console.log("-------------EX 7------------------");


/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/


/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

// function nineEx(){
//  myArray = [1,23,22,55,30,70,18,24];
//  console.log(myArray);
//  for( i)
   

 
//  console.log(myArray);

// }

// nineEx()

/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3


*/
/*
11)

Create a function to find the longest string from a given array of strings.

*/
console.log("-------------EX 11------------------");

function elevenEx() {
    const myarray = [
        'testing the string',
        'testing the other string',
        'testint the longest string og the the other two',
        'shortest',
        'meduimish string'
      ];
      
      let theLength = 0;
      let longest;
      
      for (let i = 0; i < myarray.length; i++) {
        if (myarray[i].length > theLength) {
          theLength = myarray[i].length;
          longest = myarray[i];
        }
      }
      
      console.log(longest);
}
elevenEx();

console.log("-------------EX 12------------------");
/*
12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.

13)

Create a function to find the index of the greatest element of a given array of integers

14)

Create a function to get the largest even number from an array of integers.

15)

Create a function to check from two given integers, whether one is positive and another one is negative.

16)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

17)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

18)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".

19)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/
