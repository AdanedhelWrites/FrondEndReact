

function calculateTotal(p1,p2){
    const res = p1+p2;
    return res;
}


calculateTotal(120,450);


function sayHi(p1,p2){
};

console.log(sayHi);



function greet(name,greetingWord){
    if(!greetingWord){
        greetingWord = "Selams";
    }
    console.log(name,greetingWord);
    return `${greetingWord}, name`;
}

greet("Sfg")
