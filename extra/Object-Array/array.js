//Loop over an Array

const frt=["apple","banna","mango"];
for(let x in frt)
{
    console.log(frt[x]);
}

//Add an item to the end of an Array

frt.push("papaya");
for(let x in frt)
{
    console.log(frt[x]);
}

//Add an item to the beginning of an Array

frt.unshift("mgg");
for(let x in frt)
{
    console.log(frt[x]);
}

//Find the index of an item in the Array

console.log(frt.indexOf("banna"));

//Remove an item by index position

let pos=frt.indexOf("banna");
frt.splice(pos, 1);
console.log(frt[1]);

//Array.from() : The Array.from() method returns an Array object from any object 
//with a length property or an iterable object.

const myArr = Array.from("ABCDEFG");
console.log(myArr);

//Array.of() : method creates a new Array instance from a variable

const x11=Array.of(1, 2, 3,"satish",233,"kuma");
console.log(x11);

//concat() : method is used to merge two or more arrays. 

const v1=['a',"b","c",[1,5,"sd"]];
const v2=[1,2,4];
console.log(v2.concat(v1));

//entries() : method returns a new Array Iterator object that contains the 
//key/value pairs for each index in the array.

const array1 = ['a', 'b', 'c'];
const iterator1 = array1.entries();
console.log(iterator1.next().value);
console.log(iterator1.next().value);

//every() : method tests whether all elements in the array 
//pass the test implemented by the provided function. It returns a Boolean value.


const array11 = [1, 30, 39, 29, 10, 13];
let i1 = (currentValue) => currentValue < 40;
console.log(array11.every(i1));

//filter() : method creates a new array with all elements that pass 
//the test implemented by the provided function.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
let result = words.filter(word => word.length > 6);
console.log(result);

//find() : method returns the value of the first element in the provided array 
//that satisfies the provided testing function.

const array12 = [5, 12, 8, 130, 44];
let found = array12.find(element => element > 10);
console.log(found);

//splice() : method changes the contents of an array by removing or replacing 
//existing elements and/or adding new elements in place.

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);
months.splice(4, 1, 'May');
console.log(months);

