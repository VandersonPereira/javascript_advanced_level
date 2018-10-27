let languageSelect = document.querySelector('#language-tags');
const listElement = document.querySelector('#list');

let listItems = [];

let languageTag = 'en-US';

languageSelect.addEventListener('change', changeLanguage);

function changeLanguage() {
    languageTag = languageSelect.value;
    render();
}

export function setList(list) {
    listItems = list;
    render();
}

function render() {
    let html = '';
    const numberFormatter = new Intl.NumberFormat(languageTag);
    const dateTimeFormatter = new Intl.DateTimeFormat(languageTag, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    listItems.forEach(item => {
        const forks = numberFormatter.format(item.forks);
        const creatAt = dateTimeFormatter.format(new Date(item.created_at));

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

