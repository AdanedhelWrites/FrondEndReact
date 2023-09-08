function emergency(callback){
    callback();
};

function callthepolice(){
    console.log("calling 911");
};
function callmydoctor(){
    console.log("calling your doc");
};

emergency(callmydoctor);
emergency(callthepolice);

const callmybeloved = function(){
    console.log("calling your darling");
};

emergency(callmybeloved);