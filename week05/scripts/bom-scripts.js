const input = document.querySelector(`#favchap`);
const button = document.querySelector(`button`);
const list = document.querySelector(`#list`);
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(element => {
    displayList(element);
});

function displayList(item){
        const listElement = document.createElement(`li`);
        const deleteButton = document.createElement('button');
        
        listElement.textContent = item;
        deleteButton.textContent = "❌";

        deleteButton.addEventListener(`click`,function(){
            list.removeChild(listElement);
            deleteChapter(listElement.textContent);
            input.focus();
        
        })

        listElement.append(deleteButton);
        list.appendChild(listElement);

        input.value = ``;
        input.focus();
}


button.addEventListener(`click`, function(){
    const inputValue = input.value.trim();
    if (inputValue!==``){
        chaptersArray.push(inputValue);
        displayList(inputValue);
        setChapterList();
    }

    input.value = ``;
    input.focus();
});

function setChapterList(){
    localStorage.setItem('favBOMList',JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('favBOMList'));
}


function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}


