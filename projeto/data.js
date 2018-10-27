import * as $ from './template.js';

const searchInput = document.querySelector('#search');

searchInput.addEventListener('keyup', search);

// Com promisses
/*function search(event){
    if (event && event.keyCode === 13) {
        const searchQuery = searchInput.value;
        fetch(`https://api.github.com/search/repositories?q=${searchQuery}`)
        .then(response => response.json())
        .then(response => response.items)
        .then($.setList);
    }
}*/

// Com Async Await
export default async function search(event) {
    if (event && event.keyCode === 13) {
        const searchQuery = searchInput.value;
        let response = await fetch(`https://api.github.com/search/repositories?q=${searchQuery}`)
        response = await response.json();
        $.setList(response.items);
    }
}

