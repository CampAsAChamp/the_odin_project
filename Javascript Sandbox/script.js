const Person = (name, age) => {
    const sayName = () => console.log(`my name is ${name}`);
    const sayAge = () => console.log(`My age is ${age}`);
    return { sayName, sayAge };
};

// Pick and choose which functions to inherit
const Jock = (name, age) => {
    // Simply create a person and pull out the sayName function with destructuring assignment syntax!
    const { sayName } = Person(name, age);
    const doSomethingJocky = () => console.log("jock stuff");
    return { sayName, doSomethingJocky };
};

// Inherit all of the functions
const Nerd = (name, age) => {
    const prototype = Person(name, age);
    const doSomethingNerdy = () => console.log("nerd stuff");
    return Object.assign({}, prototype, { doSomethingNerdy });
};

const jeff = Nerd("jeff", 18);
const nick = Jock("nick", 23);

jeff.sayName(); //my name is jeff
jeff.sayAge();
jeff.doSomethingNerdy(); // nerd stuff
jeff.doSomethingJocky(); // Also won't work because it isn't definied in Person, which we inherit from, not Jock

nick.sayName();
nick.sayAge(); // Wont work because we didn't inherit it
nick.doSomethingJocky();
nick.doSomethingNerdy(); // Also won't work because it isn't definied in Person, which we inherit from, not Nerd
