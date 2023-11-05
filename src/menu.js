const createMenuPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const heading = document.createElement('h1');
    heading.textContent = "MENU";

    const basicMenu = document.createElement('ul');
    
    const basicMeal = document.createElement('li');
    basicMeal.textContent = "Hamburger";

    const basicDrink = document.createElement('li');
    basicDrink.textContent = "Coke";

    const dessert = document.createElement('li');
    dessert.textContent = "Pudding";

    basicMenu.appendChild(basicMeal);
    basicMenu.appendChild(basicDrink);
    basicMenu.appendChild(dessert);

    pageContent.appendChild(heading);
    pageContent.appendChild(basicMenu);

    content.appendChild(pageContent);

}



export default createMenuPage;