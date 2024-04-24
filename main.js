class MyFraction {
    constructor(numerator, denominator) {
        const gcd = MyFraction.gcd(numerator, denominator);
        this.numerator = numerator / gcd;
        this.denominator = denominator / gcd;
    }

    static gcd(a, b) {
        return b === 0 ? a : MyFraction.gcd(b, a % b);
    }

    add(other) {
        const lcm = (this.denominator * other.denominator) / MyFraction.gcd(this.denominator, other.denominator);
        const numerator = this.numerator * (lcm / this.denominator) + other.numerator * (lcm / other.denominator);
        return new MyFraction(numerator, lcm);
    }

    subtract(other) {
        const lcm = (this.denominator * other.denominator) / MyFraction.gcd(this.denominator, other.denominator);
        const numerator = this.numerator * (lcm / this.denominator) - other.numerator * (lcm / other.denominator);
        return new MyFraction(numerator, lcm);
    }

    multiply(other) {
        return new MyFraction(this.numerator * other.numerator, this.denominator * other.denominator);
    }

    divide(other) {
        return new MyFraction(this.numerator * other.denominator, this.denominator * other.numerator);
    }

    toString() {
        return `${this.numerator}/${this.denominator}`;
    }
}

function parseFraction(input) {
    const [numerator, denominator] = input.split('/').map(Number);
    if (isNaN(numerator) || isNaN(denominator) || denominator === 0) throw new Error('Invalid fraction format or values');
    return new MyFraction(numerator, denominator);
}

function main() {
    try {
        const fractionA = parseFraction(prompt("Введите первую дробь (в формате a/b):"));
        const fractionB = parseFraction(prompt("Введите вторую дробь (в формате a/b):"));
        const operation = prompt("Введите операцию (+, -, *, /):");

        let result;
        switch (operation) {
            case '+': result = fractionA.add(fractionB); break;
            case '-': result = fractionA.subtract(fractionB); break;
            case '*': result = fractionA.multiply(fractionB); break;
            case '/': result = fractionA.divide(fractionB); break;
            default: throw new Error('Invalid operation');
        }

        alert(`Результат: ${fractionA} ${operation} ${fractionB} = ${result}`);
    } catch (error) {
        alert(`Ошибка: ${error.message}`);
    }
}

main();
