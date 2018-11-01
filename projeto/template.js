const languageSelect = document.querySelector('#language-tags');
const listElement = document.querySelector('#list');
const templateWorker = new Worker('./template_worker.js');

const config = new Proxy({
    listItems : JSON.parse(sessionStorage.getItem('listItems')) || [],
    languageTag : localStorage.getItem('lang') || 'en-US'
}, {
    set: function(target, prop, value, receiver){
        if(prop === 'listItems' || prop === 'languageTag'){
            Reflect.set(...arguments); // -> arguments, nesse caso, seria igual aos argumentos 'target', 'prop', 'value', 'receiver'
            render();
            return true;
        }
        return false;
    }
});

languageSelect.value = config.languageTag;
languageSelect.addEventListener('change', changeLanguage);

function changeLanguage() {
    const lang = languageSelect.value;
    localStorage.setItem('lang', lang);
    config.languageTag = lang;
}   

export function setList(list) {
    sessionStorage.setItem('listItems', JSON.stringify(list));
    config.listItems = list;
}

function render() {
    // Pode haver probelema na conversão do proxy, para trabalhar com Worker
    // Por isso, vamos clona-lo:
    const configParam = JSON.parse(JSON.stringify(config));
    templateWorker.postMessage(configParam);

    templateWorker.onmessage = function({data}){
        listElement.innerHTML = data;

    }
}

(function start(){
    render();
})();