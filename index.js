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

function countChar(str, char) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == char) {
            count += 1;
        }
    }
        return count;

}

console.log(countChar("Assassin", "s"));

// 3) map, filter, reduce

function Task(name, duration, priority) {
    (this.name = name), (this.duration = duration), (this.priority = priority);

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

var task_duration = [30, 2, 1, 1, 0.2, 1, 5];
let longest_duration = task_duration.reduce((prev, curr) => {
    return Math.max(prev, curr)
});

console.log(longest_duration)
