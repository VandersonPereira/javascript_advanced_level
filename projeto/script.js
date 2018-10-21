const listElement = document.querySelector('#list');
const searchInput = document.querySelector('#search');
let languageSelect = document.querySelector('#language-tags');
let languageTag = 'en-US';

let listItems = [
    {
        full_name: 'Javascript 1',
        created_at: '2020-08-25T20:10:50Z',
        forks: 15300
    },
    {
        full_name: 'Javascript 2',
        created_at: '2020-07-25T20:10:50Z',
        forks: 17888
    },
    {
        full_name: 'Javascript 3',
        created_at: '2018-07-25T20:10:50Z',
        forks: 998452
    }
];

languageSelect.addEventListener('change', changeLanguage);

function changeLanguage(){
    languageTag = languageSelect.value;
    render();
}

function render(){
    let html ='';
    const numberFormatter = new Intl.NumberFormat(languageTag);
    const dateTimeFormatter = new Intl.DateTimeFormat(languageTag, {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});

    listItems.forEach(item => {
        const forks = numberFormatter.format(item.forks);
        const creatAt = dateTimeFormatter.format( new Date(item.created_at));

        html += `
        <li>
            <div>
                <b>Name:</b> ${item.full_name}
            </div>
            <div>
                <b>Created At:</b> ${creatAt}
            </div>
            <div>
                <b>Forks:</b> ${forks}
            </div>
        </li>`;
    });
    listElement.innerHTML = html;
}

render();