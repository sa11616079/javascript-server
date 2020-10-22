//creating object using object literal in one statement


let person = {firstName:"satish", lastName:"patel", age:25, eyeColor:"blue"};
console.log("my name is "+person.firstName+" "+person.lastName+" and my age is ",person.age);


//creating object using new keyword


let person=new Object();
person.firstName="satish";
person.lastName="patel";
person.age=25;

console.log("my name is "+person.firstName+" "+person.lastName+" and my age is ",person.age);


//Object.assign() : it is a method to copies all enumerable own properties from one or more 
//source objects to a target object. It returns the target object.


let target = { a: 1, b: 2 };
let source = { b: 4, c: 5 };
let returnedTarget = Object.assign(target, source);
console.log(target);


//Object.create() : it is a method to create new object, 
//using an existing object as the prototype of the newly created object


let person1={
    isPlayer:true,
    printdetails:function(){
        console.log("hello everyone my name is "+this.name+" Am I a player? "+this.isPlayer);
    }
};
let chng=Object.create(person1);
chng.name="satish";
chng.isPlayer=false;
chng.printdetails();


//Object.defineProperties() : this method defines new or modifies existing properties directly on an object.


let object1 = new Object();
Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true
  },
  property2: {}
});
console.log(object1.property1);


//Object.entries() : it is a method to return an array of given object in from of key, value pair.


let entr={
    a:"satish",
    age:34,
    c:"he3"
}
for(let [key,value] of Object.entries(entr))
{
    console.log(key+" : ",value);
}


//Object.freeze() : in this method we can not do any modifications.


let ob1={
    name:"satish"
};
Object.freeze(ob1);
ob1.name="asd";
console.log(ob1.name);


//Object.fromEntries() : in this method transforms a list of key-value pairs into an object.


let entries1 = new Map(
    [
        ['foo', 'bar'],
        ['baz', 42]
    ]
  );

let frmlist=Object.fromEntries(entries1);
console.log(frmlist);


//Object.values(): Any JavaScript object can be converted to an array.


let xobj={name:"satish",age:23,color:"dark"};
let toarry=Object.values(xobj);
console.log(toarry);


//JSON.stringify(): Any JavaScript object can be converted to a string with the JavaScript function.

let jsnObj={name:"satish",age:234,color:"sasd"};
let tostr=JSON.stringify(jsnObj);
console.log(tostr);

//Getter and Setter method : we can get and set the values of any KEY

let getset={
    firstName:"satish",
    lastName:"patel",
    set lstnm(v1){
        this.lastName=v1;
    }
};
getset.lstnm="kumar";
console.log(getset.firstName+" ",getset.lastName);
//GETTER
let getset={
    firstName:"satish",
    lastName:"patel",
    get fullName(){
        return this.firstName+" "+this.lastName;
    }
};
console.log(getset.fullName);

//CONSTRUCTOR() : Sometimes we need a "blueprint" for creating many objects of the same "type".

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

  let myFather=new Person("a","k",232,"dew");
  let myMother=new Person("b","k",2343,"ff");
  console.log("my fater name is "+myFather.firstName+" "+myFather.lastName+" and age is "+myFather.age);
  console.log("my fater name is "+myMother.firstName+" "+myMother.lastName+" and age is "+myMother.age);









