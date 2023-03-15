
let countEl = document.getElementById('count-el');
    saveEl = document.getElementById('save-el');
    count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let saveValue = `${count} - `;
    saveEl.textContent += saveValue;
    countEl.textContent = 0;
    count = 0;
}


