const imageUrls = [
    'images/blogMeat MKT455.jpg',
    'images/New York. Meat Market 1995 . 2.jpg',
    'images/o-90S-NYC-900 (1).jpg',
    'images/o-90S-NYC-900 (2).jpg',
    'images/o-90S-NYC-900.jpg',
    'images/tumblr_f201ba4cc5e927e0ca9780a563998b75_93d810b1_1280.jpg'
];

let currentIndex = 0;
const imgElement = document.getElementById('ny-nineties');

function switchPicture() {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    const newSrc = imageUrls[currentIndex];
    imgElement.setAttribute('src', newSrc);
}