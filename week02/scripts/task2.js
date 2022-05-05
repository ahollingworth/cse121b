/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const myName = 'Amy Hollingworth';

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').textContent = myName;

// Step 3: declare and instantiate a variable to hold the current year
const currentYear = new Date().getFullYear();

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').textContent = currentYear;

// Step 5: declare and instantiate a variable to hold the name of your picture
const myPic = 'images/Beautiful_Amy.jpg';

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').setAttribute('src', myPic);


/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const foodFavorites = ['Shrimp', 'Steak', ' Baked Potato', ' Dessert'];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').textContent = foodFavorites;

// Step 3: declare and instantiate a variable to hold another favorite food
const moreFood = ' Hawaiian Haystacks';

// Step 4: add the variable holding another favorite food to the favorite food array
foodFavorites.push(moreFood);

// Step 5: repeat Step 2
document.querySelector('#food').textContent = foodFavorites;

// Step 6: remove the first element in the favorite foods array
foodFavorites.shift();

// Step 7: repeat Step 2
document.querySelector('#food').textContent = foodFavorites;

// Step 8: remove the last element in the favorite foods array
foodFavorites.pop();

// Step 7: repeat Step 2
document.querySelector('#food').textContent = foodFavorites;


