const movies = ["LOTR","Taxi Driver","Star Wars","Ready To Player One"];

const movieLength = movies.length;

for(let i=0; i<movieLength; i++){
    console.log(movies[i]);    
}
console.log("-----")
console.log("For Of'lusu")
console.log("-----")
for(let item of movies){
    console.log(item);
}

console.log(movies)