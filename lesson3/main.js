// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює
//     1, 0, -3
let x =+prompt('number')
if (x > 0 && x < 0){
    document.write('<h1>True</h1>')
}else{
    document.write('<h1>False</h1>')
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
// попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє
// це число (у першу, другу чи третю).
let time = +prompt('time')
if (time > -1 && time < 15){
    document.write('<h1>1/4</h1>')
}else if (time > 14 && time < 29){
    document.write('<h1>2/4</h1>')
}else if (time > 29 && time < 44){
    document.write('<h1>3/4</h1>')
}else if (time > 44 && time < 59){
    document.write('<h1>4/4</h1>')
}else {
    document.write('<h1>False</h1>')
}

let day = +prompt('day')
if (day > 0 && day < 10){
    document.write('<h1>1 Декада</h1>')
}else if (day > 10 && day < 20){
    document.write('<h1>2 Декада</h1>')
}else if (day > 20 && day < 32){
    document.write('<h1>3 Декада</h1>')
}else{
    document.write('<h1>False</h1>')
}
// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа
// що заплановано на цей день (можна замість плану на день, назву дня англійською).
switch (+prompt('Введіть номер дня')){
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Tuesday')
        break
    case 3:
        console.log('Wednesday')
        break
    case 4:
        console.log('Thursday')
        break
    case 5:
        console.log('Friday')
        break
    case 6:
        console.log('Saturday')
        break
    case 7:
        console.log('Sunday')
        break
    default:
        console.log('#######')

}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let a =+prompt('N1')
let b =+prompt('N2')
if (a > b){
    document.write(a)
}else if (b > a){
    document.write(b)
}else if (a === b){
    document.write(a,'=',b)
}else {
    document.write('#######')
}
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//     Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення
//         змінної х являється falsy (хибноподыбне, тобто кастується до false)

let xxx =prompt('введіть будь-яке значення') || "default"
console.log(xxx)