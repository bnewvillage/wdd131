const input = document.querySelector(`#favchap`);
const button = document.querySelector(`button`);
const list = document.querySelector(`#list`);




button.addEventListener(`click`, function(){
    if (input.value.trim() !== ``) {
        const listElement = document.createElement(`li`);
        const deleteButton = document.createElement('button');
        
        listElement.textContent = input.value;
        deleteButton.textContent = "❌";

        deleteButton.addEventListener(`click`,function(){
            list.removeChild(listElement);
            input.focus();
        
        })

        listElement.append(deleteButton);
        list.appendChild(listElement);

        input.value = ``;
        input.focus();
    }
});



