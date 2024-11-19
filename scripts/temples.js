const hamButton = document.querySelector(`#menu`);
const navigation = document.querySelector(`nav`);

//listener for hamburger
hamButton.addEventListener(`click`, ()=>{
    navigation.classList.toggle(`open`);
    hamButton.classList.toggle(`open`);
});

//from last week
const currentYearElement =
document.querySelector(`#currentYear`);

const today = new Date();
const currentYear = today.getFullYear();

currentYearElement.innerHTML = `<span class="currentyear">${currentYear}</span>`

//last modified code below
const lastModifiedElement = 
document.querySelector(`#lastModified`);

const lastModified = today.getDate();

lastModifiedElement.innerHTML = `<p class="lastModified">Last Modified: ${today}</p>`