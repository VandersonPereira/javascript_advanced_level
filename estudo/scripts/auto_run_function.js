// Função auto-executada
(function(a, b){
    console.log( a + b );
})(1, 5);

// Usando funções auto-executáveis para deixar variáveis e funcções privadas
(function(a, b){

    let num1 = 5;
    let num2 = 2;

    function soma(num1, num2){
        console.log(num1 + num2);
    }

    return {
        soma,
        setNum1: function(n){ // -> como agora num1 está privado, é necessário criar um modificador para ele 
            num1 = n;
        }
    }
})();