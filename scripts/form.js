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

//form scripts//
const productOption =
[
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];
const selectElement = document.getElementById('productName');

productOption.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    selectElement.appendChild(option);
});


