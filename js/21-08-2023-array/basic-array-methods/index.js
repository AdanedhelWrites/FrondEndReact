const userNames = ["Burak","Kaan","Yasemin","Defne","Aleyna","Ece","Aynur"];

const newLenght = userNames.push("Esra");

console.log(userNames);

const popped = userNames.pop();

console.log(popped);

const arr2 = ["bardak","telefon","hoparlör","monitör","kavanoz"];

const firstEl =arr2.shift();
console.log(firstEl);


// includes
const namesArr = ["A","B","C","D"];
console.log(namesArr.includes("A"));

// indexof
const namesArr2 = ["A","B","C","D"];
console.log(namesArr2.indexOf("D"));

// join
const userFavoriteColor = ["blue","violet","yellow"];
const outPuteMessage = `Kullanici sevdigi renkler ${userFavoriteColor.join(",")}`

document.body.innerHTML = outPuteMessage;

// splice
const nums =[1,3,5,8];
console.log(nums.splice(0,2,"x"),nums);

//slice

const nums2 = [1,2,3,4,5,6,7,8,9];
console.log(nums2.slice(-4),nums2)