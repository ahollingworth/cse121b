/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
// Step 2: Inside of the object, add a property named name with a value of your name as a string
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
// Step 6: Add another property named placesLived with a value of an empty array
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
// Step 8: For each property, add appropriate values as strings
// Step 9: Add additional objects with the same properties for each place you've lived
let myInfo = {
    name: 'Amy Jo Hollingworth',
    photo: 'week02/images/Beautiful_Amy.jpg',
    favoriteFoods: ['Steak', 'Baked Potato', 'Desserts', 'Shrimp'],
    hobbies: ['Reading', 'Tatting', 'Painting', 'Traveling'],
    placesLived: [
        {place: 'Las Vegas, NV',
         length: '8 years'},
         {place: 'Walnut Creek, CA',
        length: '2.5 years'},
        {place: 'Mclean, VA',
        length: '4.5 years'},
        {place: 'Las Vegas, NV',
        length: '4.5 years'},
        {place: 'Irvine, CA',
        length: '2 years'},
        {place: 'West LA, CA',
        length: '3 years'},
        {place: 'Provo, UT',
        length: '2 years'}
    ],
}







/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector('#name').textContent = myInfo.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').setAttribute('src', myInfo.photo);
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').setAttribute('alt', myInfo.photo);
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
myInfo.favoriteFoods.forEach(food => {
let foodList = document.createElement('li');
foodList.textContent = food;
document.querySelector('#favorite-foods').append(foodList);
});

// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
myInfo.hobbies.forEach(hobby => {
    let hobbyItem = document.createElement('ul');
    hobbyItem.textContent = hobby;
    document.querySelector('#hobbies').append(hobbyItem);
});

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
myInfo.placesLived.forEach(nextPlace => {
    let placeName = document.createElement('dt');
    placeName.textContent = nextPlace.place;

    let placeLength = document.createElement('dd');
    placeLength.textContent = nextPlace.length;

    document.querySelector('#places-lived').append(placeName);
    document.querySelector('#places-lived').append(placeLength);
});
