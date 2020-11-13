/* Задание: (Команды) 
    1) создаёте пустой массив
    2) Потом бесконечно начинает работать окно ввода текста
    3) Вы задаете команду. Например: добавить элемен, Иван
    Пример: add, Иван
    4) Обрабатываете команду "add" и добавляете в массив строку Иван
    5) Цикл повторяется. Задаете другую команду (удалить элемент, Иван)
    Пример: del, Иван
    6) Обрабатываете команда, цикл повторяется. Все результаты добавления и удаления выводятся командой "alert(arr)" как массив.
    7) Когда получаете команду "stop" то окно ввода текста больше не появлятся. После остановки в console выводится конечный массив. */

/* var users = []
do {
    var f = prompt('Введите команду (add, del, stop)')
    var keys = f.split(',', 2)
    if (keys[0] == "add") {
        users.push(keys[1])
        alert(users)
    } else if (keys[0] == "del") {
        users.splice(keys[1], 1)
        alert(users)
    }
} while (keys[0] != "stop");
console.log(users); */
var users = []
do {
    var f = prompt('Введите команду (add, del, stop)')
    var keys = f.split(',', 2)
    if (keys[0] == "add") {
        users.push(keys[1])
        alert(users)
    } else if (keys[0] == "del") {
        users.forEach(function (value, a) {
            if (value == keys[1]) {
                users.splice(a, 1)
            }
        })
        alert(users)
    }
} while (keys[0] != "stop");
console.log(users);










