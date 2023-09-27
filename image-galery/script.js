let searchBtn = document.querySelector('.searchBtn');
let content = document.querySelector('.content');
let searchField = document.querySelector('.searchField');




let arrData = [];
async function getData(url) {
    const res = await fetch(url);
    const data = await res.json();

    arrData = [];
    for (img of data.results) {
        arrData.push(img.urls.regular);
    };
    for (elem of arrData) {
        let img = document.createElement('img');
        img.className = 'img';
        img.src = elem;
        content.append(img);
    };
}

function deleteImage() {
    let elems = document.querySelectorAll('.img');
    for (elem of elems) {
        elem.remove();
    };
}

searchBtn.addEventListener('click', () => {
    deleteImage();
    let query1 = String(searchField.value);
    let url = 'https://api.unsplash.com/search/photos?query=' + query1 + '&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
    getData(url);
});