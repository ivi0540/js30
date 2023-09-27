let searchBtn = document.querySelector('.searchBtn');
let content = document.querySelector('.content');
let searchField = document.querySelector('.searchField');
let arrData = [];

async function getData(url) {
    const res = await fetch(url);
    const data = await res.json();
    for (img of data.results) {
        arrData.push(img.urls.regular);
    };
}

searchBtn.addEventListener('click', () => {
    let query1 = String(searchField.value);
    let url2 = 'https://api.unsplash.com/search/photos?query=' + query1 + '&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
    getData(url2);
    for (elem of arrData) {
        let img = document.createElement('img');
        img.className = 'img';
        img.src = elem;
        content.append(img);
    };
});