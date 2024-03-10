const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

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

function handleKeyPress(event){
    if (event.key === 'Enter'){
        addTask();
    }
}
inputBox.addEventListener("keypress", handleKeyPress);

listContainer.addEventListener("click", function(event){
    if(event.target.tagName == "LI"){
        event.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName == "LI"){
        event.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
