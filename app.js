// let inp=document.querySelector("input");
// inp.addEventListener("keydown",function(event){
//    if(event.code=="keyA") {
//     console.log("charecter moves forward");
//    }else if(event.code=="keyB"){
//     console.log("charcter moves backward");

//    }else if(event.code=="keyU"){
//     console.log("charecter moves upward");
//    }else if(event.code=="keyD") {
//     console.log("charecter moves downward")
//    }
// });
let fr=document.querySelector("form");
fr.addEventListener("submit",function(event){
    event.preventDefault();
let inp=document.querySelector("input");
console.dir(inp);
console.log(inp.value);
    alert("form submitted");
});
//this is a comment