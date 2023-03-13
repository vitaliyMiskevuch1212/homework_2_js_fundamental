(function (){
    const isAdult = prompt("Скільки вам років?");
    if (isAdult > 18){
        console.log("ви досягли повнолітнього віку");
    } else if(isAdult < 18){
        console.log("ви не досягли повнолітнього віку");
    }
})()