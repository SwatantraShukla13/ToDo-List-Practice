const textArea = document.querySelector(".textarea");

const button = document.querySelector(".buttoninput");

const toDoList = document.querySelector(".todolist");
button.addEventListener("click",addToDoListItem);

function addToDoListItem(){
    
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("itemall")
    const item = document.createElement("p");
    item.classList.add("item");

    item.innerText =textArea.value;
    const deleteButton = document.createElement("button");

    deleteButton.innerHTML ='<img src="logo/delete btn.png" alt="" class="trash-icon">';
        if(textArea.value == '') return ;
    toDoDiv.appendChild(item);
    deleteButton.classList.add("deletebutton")
    toDoDiv.appendChild(deleteButton);
    
    toDoList.appendChild(toDoDiv);
    textArea.value ='';

    
    
}

toDoList.addEventListener("click",deleteItem);
function deleteItem(e){
    const item = e.target;
    console.log(item);
    if(item.classList[0] === "deletebutton"){
        const parent = item.parentElement;
        parent.remove();
    }
}