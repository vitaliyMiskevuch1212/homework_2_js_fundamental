(function (){
    let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5]
    let mostFrequent = arr.sort((a, b) =>
    arr.filter(elem => elem === a).length - arr.filter(elem => elem === b).length
).pop()
    arr.filter(num => num != mostFrequent);
    console.log("ось всі числа без найбільшого: " + arr); // [4, 2, 1, 6, 3, 2]
    console.log("Найбільше число: " + mostFrequent);
})()