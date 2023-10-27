let anythingnumber;
let firstword = '';
let secondword = '';
let thirdword = '';
let sizearray = '';

anythingnumber = prompt();

arrayofStrings = Array.from(String(anythingnumber));

if (anythingnumber.length === 1) {
    from0to9();
} else if (anythingnumber.length === 2) {
    let numberToCompare = arrayofStrings[1];
    if (numberToCompare === '1')
        from10to19()
    else
        from20to99()
} else if (anythingnumber.length === 3) {
    let numberToCompare = arrayofStrings[1];
    if (numberToCompare === '1')
        from100to999with10to19()

    else
        from100to999without10to19()

} else {
    console.log('Уведіть число від 0 до 999')
}

console.log(firstword + " " + secondword + " " + thirdword);


function from0to9() {
    switch (arrayofStrings[0]) {

        case '0':
            firstword = 'Нуль'
            break;
        case '1':
            firstword = 'Один'
            break;
        case '2':
            firstword = 'Два'
            break;
        case '3':
            firstword = 'Три'
            break;
        case '4':
            firstword = 'Чотири'
            break;
        case '5':
            firstword = 'П\'ять'
            break;
        case '6':
            firstword = 'Шість'
            break;
        case '7':
            firstword = 'Сім'
            break;
        case '8':
            firstword = 'Вісім'
            break;
        case '9':
            firstword = 'Дев\'ять'
            break;
    }
}


function from10to99() {
    if (arrayofStrings[0] === 1) {
        from10to19();
    } else

        from20to99()

}