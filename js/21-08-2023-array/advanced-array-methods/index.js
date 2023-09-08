const DATA_USERS = [
    {id:1,name:"Burak"},
    {id:2,name:"Selim"},
    {id:3,name:"Doruk"},
    {id:4,name:"Levent"},
    {id:5,name:"Engin"},
    {id:6,name:"Efe"},
    {id:7,name:"Berk"},
]

const DATA_NUMS = [1,3,4,5,7,9,11]


// foreach
DATA_USERS.forEach(logItem );

function logItem(item,index,arr){
    console.log(item,index,arr);
}

DATA_NUMS.forEach((item,index,arr) => {console.log(item,index,arr);})


// filter

const evenNumsArray = DATA_NUMS.filter(filterEvenNums);

function filterEvenNums(num){
    if (num %2 === 0) {
        return true;
    }
    return false;
}
console.log(evenNumsArray);


const biggerThanFour = DATA_USERS.filter(idBiggerThanFour);

function idBiggerThanFour(id) {
    if (id.id >= 4) {
        return true;
    }
    return false;
    
}
console.log(biggerThanFour);

//map
const doubles = DATA_NUMS.map(makeDouble);
function makeDouble(num) {    
    return num * 2;
}
console.log(doubles);


const fotolar = [{id:0, source: "01.jps"},
{id:1, source: "02.jps"},
{id:2, source: "03.jps"},
{id:3, source: "04.jps"}
];

const newImages = fotolar.map(image =>{
    image.source="https://www.twitter.com/media/" + image.source;
    return image;
})

console.log(newImages);


// reduce
const basket = [200,300,1200,450];

const total = basket.reduce(function(acc,price,index,arr){
    return acc + price
},2400 )

console.log(total);


const userBasket= [{id:1,title:"Laptop",price:23300},
{id:2,title:"Computer",price:30200},
{id:3,title:"Raspery Pi",price:1120},
{id:4,title:"Pinapple Wi-Fi",price:10000},
{id:5,title:"Mouse",price:500},
{id:6,title:"Keyboard",price:700},
]

const totalBasketCost = userBasket.reduce(function(acc,cost){
    return acc + cost.price
},0);

console.log(totalBasketCost);

// every
const nums = [1,4,5,7,9,10];

const DATA_LOCATIONS=[{lat:123.32,long:34.5},
    {lat:125.32,long:24.5},
    {lat:132.32,long:44.5},
    {lat:153.32,},
    {lat:183.32,long:84.5},
    {lat:193.32,long:38.5},    
];
const isAllEven = nums.every((nums)=> nums%2==0);
console.log(isAllEven,"****");


const hasAllLong = DATA_LOCATIONS.every((x) => x.long)
console.log(hasAllLong);


// some

const placeNames = ["Long Island","Long River","London","Chicago"];
const hasLongStr = placeNames.some((placeName) => placeName.includes("Long"));
console.log(hasLongStr, "---");

// find


// findLast



// findIndex



// sort






// custom filter function(arr,callback) accepting a callback

const NUMS_FOR_REDUCED = [1,4,5,7,9,10];

function myFilterFunc(arr,testFunc){
    const rVal= [];
    for (let i = 0; i < arr.length; i++) {
        if (testFunc(arr[i])) {
            rVal.push(arr[i]);
        }        
    }
    return rVal;
}


const evenNums = myFilterFunc(NUMS_FOR_REDUCED, function(num){
    if(num%2 === 0){
        return true
    }
    return false;
});

console.log(evenNums);

/*CONVERT example 123 -> 321 
    -1200 -> -21
*/

function convertNums(num){
    num = num + "";
    return parseInt(num.split("").reverse().join("")) * Math.sign(num);
}
const ters = convertNums(123);
console.log(ters);

const eksiTers = convertNums(-1200);
console.log(eksiTers);