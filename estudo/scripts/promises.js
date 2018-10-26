// Criando uma promise
var myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(500);
    }, 2000);
});

myPromise
    .then(value => {
        console.log(`My value: ${value}`);
        return 900;
    })
    .then(value => {
        console.log(`My value: ${value}`);
        return 100;
    });

// Caso já tenhamos o valor para retorno, podemos criar direto um resolve
var myPromise = Promise.resolve(77);

// ------------------------------------------------------------------------

// Iterators
var str = 'Estudo';
var myIterator = str[Symbol.iterator]();
console.log("-------- Iterator ----------");
console.log(myIterator.next()); // --> 'E'
console.log(myIterator.next()); // --> 's'
console.log(myIterator.next()); // --> 't'
console.log(myIterator.next()); // --> 'u'
console.log(myIterator.next()); // --> 'd'
console.log(myIterator.next()); // --> 'o'
console.log(myIterator.next()); // --> 'Não há mais linhas'

// ------------------------------------------------------------------------

// Generators
function* myConuter(){
    var i = 0;
    while(true){
        yield i++;
    }
}

var counter = myConuter();
var counterValue = counter.next();
console.log(counterValue);












