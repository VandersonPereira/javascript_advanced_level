export var myVar = 5;

var myVar2 = 10;

export function myFunction(){
    console.log('Estudo de módulos');
}

// Atribuindo uma exportação padrão
export default class Calc{
    static sum(a, b){
        return a + b;
    }
}

// Poderia ser feito assim:
// export { myVar, myFunction, Calc}

// Pode-se também, dar apelidos para os componentes exportados:
// export { Calc as MyClass }