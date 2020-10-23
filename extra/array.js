//Loop over an Array

let frt=["apple","banna","mango"];
for(let x in frt)
{
    console.log(frt[x]);
}

//Add an item to the end of an Array

let frt1=["apple","banna","mango"];
frt1.push("papaya");
for(let x in frt1)
{
    console.log(frt1[x]);
}

//Add an item to the beginning of an Array

let frt2=["apple","banna","mango"];
frt2.unshift("mgg");
for(let x in frt2)
{
    console.log(frt2[x]);
}

//Find the index of an item in the Array

let frt3=["apple","banna","mango"];
console.log(frt3.indexOf("banna"));

//Remove an item by index position

let frt4=["apple","banna","mango"];
let pos=frt4.indexOf("banna");
frt4.splice(pos, 1);
console.log(frt4[1]);

//Array.from() : The Array.from() method returns an Array object from any object 
//with a length property or an iterable object.

var myArr = Array.from("ABCDEFG");
console.log(myArr);

//Array.of() : method creates a new Array instance from a variable

var x11=Array.of(1, 2, 3,"satish",233,"kuma");
console.log(x11);

//concat() : method is used to merge two or more arrays. 

let v1=['a',"b","c",[1,5,"sd"]];
let v2=[1,2,4];
console.log(v2.concat(v1));

//entries() : method returns a new Array Iterator object that contains the 
//key/value pairs for each index in the array.

let array1 = ['a', 'b', 'c'];
let iterator1 = array1.entries();
console.log(iterator1.next().value);
console.log(iterator1.next().value);

//every() : method tests whether all elements in the array 
//pass the test implemented by the provided function. It returns a Boolean value.

let i1 = (currentValue) => currentValue < 40;
let array11 = [1, 30, 39, 29, 10, 13];
console.log(array11.every(i1));

//filter() : method creates a new array with all elements that pass 
//the test implemented by the provided function.

let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
let result = words.filter(word => word.length > 6);
console.log(result);

//find() : method returns the value of the first element in the provided array 
//that satisfies the provided testing function.

let array12 = [5, 12, 8, 130, 44];
let found = array12.find(element => element > 10);
console.log(found);

//splice() : method changes the contents of an array by removing or replacing 
//existing elements and/or adding new elements in place.

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);
months.splice(4, 1, 'May');
console.log(months);

