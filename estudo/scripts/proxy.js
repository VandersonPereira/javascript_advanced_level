let myObject = {
    a: 5,
    b: 6
}

let myProxy = new Proxy(myObject, {
    get: function(target, prop, receiver){
        console.log(`Você acessou a propriedade ${prop}`);
        return target[prop];
    },
    set: function(target, prop, value){
        console.log(`Alterando o valor da propriedade ${prop}`);
        target[prop] = value;
        return true;
    }
});