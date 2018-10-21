/* Exemplos de internacionalização */

// Números:
let myNumber = 123456;

let numberFormatter = new Intl.NumberFormat('pt-BR');

let currencyFormatter = new Intl.NumberFormat('pt-BR',{
    style: 'currency',
    currency: 'BRL'
});

console.log(numberFormatter.format(myNumber));
console.log(currencyFormatter.format(myNumber));

// Datas:
let myDate = new Date('2020-12-31T12:00:00');

let simpleDateTimeFormatter = new Intl.DateTimeFormat('pt-BR');

let completeDateTimeFormatter = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long', // -> por extenso
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

console.log(simpleDateTimeFormatter.format(myDate));
console.log(completeDateTimeFormatter.format(myDate));