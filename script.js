const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//function to add users tasks to to-do list
function addTask(){
    if(inputBox.value === ''){
        alert("You must write a task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

//function to allow user to trigger 'addTask' function by pressing the "Enter" key
function handleKeyPress(event){
    if (event.key === 'Enter'){
        addTask();
    }
}
inputBox.addEventListener("keypress", handleKeyPress);

//event listener for the to-do list, toggling the checked class and saving data
listContainer.addEventListener("click", function(event){
    if(event.target.tagName == "LI"){
        event.target.classList.toggle("checked");
        saveData();
    }
    else if(event.target.tagName == "SPAN"){
        event.target.parentElement.remove();
        saveData();
    }
}, false);

//function to save tasks to localStorage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//function to show saved tasks
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
