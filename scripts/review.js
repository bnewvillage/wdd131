
//footer content//
const currentYearElement =
document.querySelector(`#currentYear`);
const today = new Date();
const currentYear = today.getFullYear();
currentYearElement.innerHTML = `<span class="currentyear">${currentYear}</span>`
const lastModifiedElement = 
document.querySelector(`#lastModified`);
const lastModified = today.getDate();
lastModifiedElement.innerHTML = `<p class="lastModified">Last Modified: ${today}</p>`

document.addEventListener('DOMContentLoaded', function () {
    let reviewCount = localStorage.getItem("reviewCount");
    if (!reviewCount) {
        reviewCount = 0;
    }
    reviewCount = parseInt(reviewCount) + 1;
    localStorage.setItem("reviewCount", reviewCount);
    document.getElementById("reviewCounter").textContent = reviewCount;
});
