//restaurant.js

const createRestaurantHomePage = () =>{
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const image = document.createElement('img');
    image.src = 'https://www.usda.gov/sites/default/files/2021-06/fsis-tips-restaurant-leftovers-blog-062121.jpg';
    image.height = '300';
    pageContent.appendChild(image);

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to our restaurant!';
    pageContent.appendChild(headline);

    const copy = document.createElement('p');
    copy.textContent = "We serve the best food in town. Come and taste it!"
    pageContent.appendChild(copy);

    content.appendChild(pageContent);
}

export default createRestaurantHomePage