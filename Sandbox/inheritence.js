/*

///////////////////////
// PROTOTYPE PROPERTY
//////////////////////
// Printer constructor
function Printer(myDocuments) {
    this.documents = myDocuments;
}

// We add the print () method to Printer prototype property so that other instances (objects) can inherit it:
Printer.prototype.print = function () {
    console.log(this.documents);
};

// Create a new object with the Printer () constructor, thus allowing this new object to inherit Printer's properties and methods.
var newObj = new Printer("I am a new Object and I can print.");

// newObj inherited all the properties and methods, including the print method, from the Printer function. Now newObj can call print directly, even though we never created a print () method on it.
newObj.print(); //I am a new Object and I can print.

///////////////////////
// PROTOTYPE ATTRIBUTE
//////////////////////
// The userAccount object inherits from Object and as such its prototype attribute is Object.prototype.
var userAccount = new Object();

// This demonstrates the use of an object literal to create the userAccount object; the userAccount object inherits from Object; therefore, its prototype attribute is Object.prototype just as the userAccount object does above.
var userAccount = { name: "Mike" };

function Account() {}
// userAccount initialized with the Account () constructor and as such its prototype attribute (or prototype object) is Account.prototype.
var userAccount = new Account();

*/

///////////////////////
// Javascript Inheritence
//////////////////////

// 1) Prototype Property: Prototype-based Inheritance

function Plant() {
    this.country = "Mexico";
    this.isOrganic = true;
}

// Add the showNameAndColor method to the Plant prototype property
Plant.prototype.showNameAndColor = function () {
    console.log("I am a " + this.name + " and my color is " + this.color);
};

// Add the amIOrganic method to the Plant prototype property
Plant.prototype.amIOrganic = function () {
    if (this.isOrganic) console.log("I am organic, Baby!");
};

function Fruit(fruitName, fruitColor) {
    this.name = fruitName;
    this.color = fruitColor;
}

// Set the Fruit's prototype to Plant's constructor, thus inheriting all of Plant.prototype methods and properties.
Fruit.prototype = new Plant();

// Creates a new object, aBanana, with the Fruit constructor
var aBanana = new Fruit("Banana", "Yellow");
var onion = new Plant();

// Here, aBanana uses the name property from the aBanana object prototype, which is Fruit.prototype:
console.log(aBanana.name); // Banana

// Uses the showNameAndColor method from the Fruit object prototype, which is Plant.prototype. The aBanana object inherits all the properties and methods from both the Plant and Fruit functions.
aBanana.showNameAndColor(); // I am a Banana and my color is yellow.

onion.showNameAndColor();

///////////////////////
// Javascript Inheritence
//////////////////////

//  2) Prototype Attribute: Accessing Properties on Objects

var myFriends = { name: "Pete" };

// To find the name property below, the search will begin directly on the myFriends object and will immediately find the name property because we defined the property name on the myFriend object. This could be thought of as a prototype chain with one link.
console.log(myFriends.name);

// In this example, the search for the toString () method will also begin on the myFriends’ object, but because we never created a toString method on the myFriends object, the compiler will then search for it on the myFriends prototype (the object which it inherited its properties from).

// And since all objects created with the object literal inherits from Object.prototype, the toString method will be found on Object.prototype—see important note below for all properties inherited from Object.prototype.

console.log(myFriends.toString());
