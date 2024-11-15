function AddTask() {
    let enterData = document.getElementById("enterData")
    let TasksContainer = document.getElementById("tasksBag")

    let enterTag = enterData.value.trim();
    if (enterData === "") {
        alert("pls enter the data to show in the doc");
        return console.log("enter the data ");
    }
    // TasksContainer.append(liTag)

    let liTag = document.createElement("li");
    liTag.innerHTML = `${enterTag} 
    <button class="editBtn">Edit</button> 
    <button class="deleteBtn">Delete</button>`;
    TasksContainer.append(liTag);

    enterData.value = "";

    let editOption = liTag.querySelector(".editBtn");
    editOption.style.backgroundColor = "yellow";

    let deleteOption = liTag.querySelector(".deleteBtn");
    deleteOption.style.backgroundColor = "red";
    
    deleteOption.addEventListener("click", function () {
        DeleteTask(liTag);
    });

    function DeleteTask(taskElement) {
        let confirmation = confirm("Are you sure you want to delete the task?");
        if (confirmation) {
            taskElement.remove();
        }
    }   
}