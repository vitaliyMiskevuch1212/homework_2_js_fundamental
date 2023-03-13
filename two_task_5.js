(function (){
const a = parseFloat(prompt("Введіть довжину сторони А трикутника"));
const b = parseFloat(prompt("Введіть довжину сторони Б трикутника"));
const c = parseFloat(prompt("Введіть довжину сторони С трикутника"));
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        console.log("ви заповнили неправильні дані")
    } else {
        const p = (a + b + c) / 2;
        const s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
        console.log(`Площа трикутника ${s.toFixed(3)}`);
        const isRightTriangle = Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) ||
            Math.pow(a, 2) + Math.pow(c, 2) === Math.pow(b, 2) ||
            Math.pow(b, 2) + Math.pow(c, 2) === Math.pow(a, 2);
        console.log(`трикутник прямокутний: ${isRightTriangle}`);
    }
})()