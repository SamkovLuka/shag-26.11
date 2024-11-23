// завдання 1

class Marker {
    constructor(color, inkLevel) {
        this.color = color;
        this.inkLevel = inkLevel;
    }

    print(text) {
        let output = "";
        for (let char of text) {
            if (this.inkLevel <= 0) break;
            if (char.trim()) this.inkLevel -= 0.5;
            output += char;
        }
        console.log(`%c${output}`, `color: ${this.color}`);
        if (this.inkLevel <= 0) {
            console.log("Чорнила закінчилися!");
        }
    }
}

class RefillableMarker extends Marker {
    refill() {
        this.inkLevel = 100;
        console.log("Маркер заправлено!");
    }
}


const marker = new RefillableMarker("blue", 10);
marker.print("Hello, world!");
marker.refill();
marker.print("This is a test!");





// завдання 2

class ExtendedDate extends Date {
    getDateText() {
        const months = [
            "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень",
            "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"
        ];
        return `${this.getDate()} ${months[this.getMonth()]}`;
    }

    isFuture() {
        const now = new Date();
        return this >= now;
    }

    isLeapYear() {
        const year = this.getFullYear();
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    getNextDate() {
        const nextDate = new Date(this);
        nextDate.setDate(this.getDate() + 1);
        return nextDate;
    }
}

const myDate = new ExtendedDate("2024-11-23");

console.log("Дата текстом:", myDate.getDateText());
console.log("Майбутня дата:", myDate.isFuture());
console.log("Високосний рік:", myDate.isLeapYear());
console.log("Наступна дата:", myDate.getNextDate());




// завдання 3

class Employee {
    constructor(name, position, department) {
        this.name = name;
        this.position = position;
        this.department = department;
    }
}

class EmpTable {
    constructor(employees) {
        this.employees = employees;
    }

    getHtml() {
        let html = "<table border='1'><thead><tr><th>Ім'я</th><th>Посада</th><th>Відділ</th></tr></thead><tbody>";
        for (let emp of this.employees) {
            html += `<tr><td>${emp.name}</td><td>${emp.position}</td><td>${emp.department}</td></tr>`;
        }
        html += "</tbody></table>";
        return html;
    }
}

// Демонстрація роботи
const employees = [
    new Employee("Іван Іванов", "Касир", "Фінансовий"),
    new Employee("Петро Петров", "Менеджер", "HR"),
    new Employee("Анна Анісімова", "Аналітик", "Маркетинг")
];

const empTable = new EmpTable(employees);
document.body.innerHTML = empTable.getHtml();



// завдання 4

