const superGreeter = function(name,greetingWord = "Hello darling"){
    return name + " " + greetingWord
}

console.log(superGreeter("sfg"))


const number = function(number){
    return number%2 == 0 ? "even" : "odd"
}

console.log(number(225))

