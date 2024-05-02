
// Создать цикл который будет выводить цифры фибоначчи и должно остановиться на той цифре которую напишите в промпте 
// В ручную создать функцию сорт с помощью циклов for of & while

let n = prompt('number?')
function fibonacci(num) {
    let a = 1
    let b = 2
    for (let i = 0 ; i < num;i++) {
        console.log(a);
        [a,b] = [b ,a + b]
    }
}
fibonacci(n)

