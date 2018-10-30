var i = 0;

setInterval(() =>{
    i++;
    postMessage(i);
}, 1000);