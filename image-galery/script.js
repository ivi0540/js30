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

function init(q) {
    deleteImage();
    let query1 = String(q);
    // let url = 'https://api.unsplash.com/search/photos?query=' + query1 + '&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
    let url = 'https://api.unsplash.com/search/photos?query=' + query1 + '&client_id=q52S8tuFb3wGFeOOI0f5zOcZN6ahg5309J3QyE6pUWg';
    getData(url);
};
init("art");

function Go() {
    deleteImage();
    let query1 = String(searchField.value);
    let url = 'https://api.unsplash.com/search/photos?query=' + query1 + '&client_id=q52S8tuFb3wGFeOOI0f5zOcZN6ahg5309J3QyE6pUWg';
    getData(url);
};

searchBtn.addEventListener('click', () => {
    Go();
});

document.addEventListener('keyup', (event) => {
    if (event.code === 'Enter') {
        Go();
    };
});