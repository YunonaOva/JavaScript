const list = document.querySelector('.list');
const form = document.querySelector('.form');

form.addEventListener('submit', formSubmitHandler)

function formSubmitHandler (event) {
    event.preventDefault();
    const productNameValue = form.productname.value;
    const countValue = form.count.value;
    const srokValue = form.srok.value;
    
    if (productNameValue !== '' && countValue !== '' && srokValue !== '') {

    const listItem = getFormattedProductEkement(productNameValue, countValue, srokValue);
    list.insertAdjacentHTML(`beforeend`, listItem);
    
    } else {
        alert('Заполни поля!')
    }
}

function getFormattedProductEkement(name, count, date) {
return `<li class="textspiska">
    <span>${name}</span>
    <span> ${count}</span>
    <span>${getFormattedDate(date)}</span>
    </li>`;

}

function getFormattedDate(date) {

    const rawDate= new Date(date);

    const day = String(rawDate.getDate()).padStart(2, '0');
    const month = String(rawDate.getMonth() + 1).padStart(2, '0');
    const year = rawDate.getFullYear();

    return `${day}.${month}.${year}`;
}