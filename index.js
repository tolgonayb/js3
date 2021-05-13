// 1) function declaration

function min (num1, num2) {
    if (num1 > num2)
        return num2;
    else
        return num1;
}
console.log(min(2, -5))


// function expression

const min2 = function (num1, num2) {
    if (num1 < num2)
        return num1;
    else
        return num2;

}

console.log(min(5, 10))

// 2) countChar

function countChar(string, char) {
    var counted = 0;
    for (var i = 0; i < string.length; i++)
        if (string.charAt(i) == char)
            counted += 1;
    return counted;
}

console.log(countChar("Assassin", "s"));

// 3) map, filter, reduce

function Task(name, duration, priority) {
    (this.name = name), (this.duration = duration), (this.priority = priority);
    return this;
}

var task = new Task("", "", "");
var tasks = [
    new Task ("Изучить javascript", 30, 4),
    new Task ("Сделать домашнее задание на курсах", 2,3),
    new Task ("Похвалить себя", 1, 6),
    new Task ("Похвалить преподавателя))", 1, 7),
    new Task ("Принять душ", 0.2, 2),
    new Task ("Помочь другу переустановить винду", 1, 1),
    new Task ("Понять что функции в javascript  это очень просто", 5, 4)
]


let duration = tasks.filter(tasks => tasks.duration > 1);
console.log(duration);


let priority = tasks.map(tasks => tasks.priority + 1)
console.log(priority)

let longest_duration = tasks.reduce((a, b) => a.length > b.length ? a : b, '');
console.log(longest_duration)


