let result1 = document.querySelector('#result1'),
    value1 = 0,
    resxult2 = document.querySelector('#result2'),
    value2 = 0,
    worker;

function start(){
    setInterval(() =>{
        value1++;
        result1.innerText = value1;
    }, 1000);

    worker = new Worker('scripts/myworker.js');
    worker.onmessage = function(event){
        value2 = event.data;
        result2.innerText = value2;
    }
}