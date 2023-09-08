const myUser = {
    userId : 1,
    firstName : "Turin",
}

myUser["userId"] = 3;

const keyStr = "firstName";

myUser[keyStr];


console.log(myUser);


const baseSettings = { theme :"dark",notification:false, audioMessage:false};

const baseSettingsCopy = {...baseSettings};

console.log(baseSettingsCopy);

const extendedSettings = {passwordProtection:true, ...baseSettings};

//overwrite

const newSettings = {theme:"Light",...baseSettings};

console.log(newSettings);


// const {flag = "notfound.png"} = likedPlace;

// console.log(flag);

function carousel({speed,hasBullet}){
    console.log(speed,hasBullet);
}

carousel({speed:"120ms",hasBullet:false});


const myObj = {
    x:3,
    y:4,
}

firstProtu = Object.getPrototypeOf(myObj);
lastProtu = Object.getPrototypeOf(firstProtu);

console.log(firstProtu,lastProtu);

function User(name,id){
    this.name = name;
    this.id = id;
}

User.prototype.sayHi = function(){console.log(this.name + " selamlar...");};

const user1 = new User("Kes","Bro");
const user2 = new User("Kesme","Brom")

user1.sayHi();

console.log(user1.__proto__.__proto__.__proto__);

const myDate = new Date();

console.log(myDate.__proto__.__proto__.__proto__);