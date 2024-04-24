function gcd(a, b) {
    // Находим наибольший общий делитель с помощью алгоритма Евклида
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function findLCM(a, b) {
    // Находим наименьшее общее кратное с помощью формулы: НОК(a, b) = |a * b| / НОД(a, b)
    return Math.abs(a * b) / gcd(a, b);
}

// Запрашиваем у пользователя два числа
let num1 = parseInt(prompt("Введите первое число:"));
let num2 = parseInt(prompt("Введите второе число:"));

// Вычисляем и выводим результат
let lcm = findLCM(num1, num2);
alert(`Наименьшее общее кратное чисел ${num1} и ${num2} равно ${lcm}`);
