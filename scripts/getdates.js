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