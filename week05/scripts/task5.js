/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current datel
// Step 2: Declare another variable to hold the day of the week
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
let theDate = new Date();
let dayOfWeek = theDate.getDay();

switch (dayOfWeek) {
    case 0:
        dayOfWeekText = 'Sunday';
        break;
    case 1:
        dayOfWeekText = 'Monday';
        break;
    case 2:
        dayOfWeekText = 'Tuesday';
        break;
    case 3:
        dayOfWeekText = 'Wednesday';
        break;
    case 4:
        dayOfWeekText = 'Thursday';
        break;
    case 5:
        dayOfWeekText = 'Friday';
        break;
    case 6:
        dayOfWeekText = 'Saturday';
        break;
    default:
        dayOfWeekText = 'Unknown - ' + dayOfWeek;
        break;
}
// Step 4: Declare a variable to hold a message that will be displayed
let closingDay = `${theDate.getMonth()}/${theDate.getDate()}`;
// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (dayOfWeek === 1 || dayOfWeek === 0 || dayOfWeek === 6 || closingDay === '10/26' || closingDay === '11/25') { 
    message1 = `The temple is closed today.`;
} else {
    message1 = `${dayOfWeekText}, please visit a temple today.`;
}
document.querySelector('#message1').textContent = message1;


let openDay = `${theDate.getDate()}`;
if (dayOfWeek > 1 || dayOfWeek !== 1 || dayOfWeek !== 0 || dayOfWeek !== 6) {
  message2 = `The temple is open today`;  
} else {
    message2 = `I am sorry the Temple is closed on ${theDate.getDate()}`;
}

document.querySelector('#message2').textContent = message2;



/* FETCH */

// Step 1: Declare a global empty array variable to store a list of temples
let templeList = [];
// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples
const output = (temples) =>{
    temples.forEach(
        temple => {
            let article = document.createElement('article');
            let templeName = document.createElement('h3');
            templeName.textContent = temple.templeName;
            let location = document.createElement('h4');
            location.textContent = temple.location;
            let dedicated = document.createElement('h4');
            dedicated.textContent = temple.dedicated;
            let img = document.createElement('img');
            img.setAttribute('src', temple.imgUrl);
            img.setAttribute('alt', temple.templeName);

            article.appendChild(templeName);
            article.appendChild(location);
            article.appendChild(dedicated);
            article.appendChild(img);

            document.querySelector('#temples').appendChild(article);

        }
    )
}
// Step 3: Using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'


const getTemples = async() => {
    const response = await fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json');
    templeList = await response.json();
    output(templeList);
}


getTemples();
const reset = () => {
    document.querySelector("#temples").innerHTML = "";
  };

// Step 4: Add a .then() method to turn the returned string into a JavaScript object ( hint: .json() )

// Step 5: Add another .then() method with a variable name to hold the temples and an empty arrow function

// Step 6: Inside of second .then() method, assign the list of temples (as a JSON object) to the temples variable

// Step 7: Finally, call the output function and pass it the list of temples

// Step 8: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples

// Step 9: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples

// Step 10: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function


/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
