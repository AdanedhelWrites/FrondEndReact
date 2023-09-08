const myArr = [2,4,5,6,7];

const num1 = myArr[0];

const num2 = myArr[1];

const [a,b,c,d,e,f,g] = myArr;

console.log(a,b,c,d,e,f,g);



const fruits = ["cherry","banana","orange"];

const [f1="apple",f2="apple",f3="apple",f4="apple"] = fruits;

console.log(f4);

//Rest operator

const superHeroes = ["Batman","Spiderman","Joker"];

const [h1,...rest] = superHeroes;

console.log(rest);

//spread 

const spreadTestArr = ["a","b","c"];

const newSpreadTestArr = [...spreadTestArr];

console.log(newSpreadTestArr);