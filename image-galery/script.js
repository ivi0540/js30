const url = 'https://api.unsplash.com/search/photos?query=spring&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
let searchBtn = document.querySelector('.searchBtn');
let content = document.querySelector('.content');
let arrData = [];

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    for (img of data.results) {
        arrData.push(img.urls.regular);
    };
}
getData();

searchBtn.addEventListener('click', () => {
    for (elem of arrData) {
        let img = document.createElement('img');
        img.className = 'img';
        img.src = elem;
        content.append(img);
    };
});