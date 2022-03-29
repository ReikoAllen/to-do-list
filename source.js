// Add Validate input field and Add new tasks
let start = document.querySelector('#push').onclick = function() {
    if (document.querySelector('#newtask input').value.length == 0) {
        swal("Info!", "Enter the task first!", "error");
    } else {
        document.querySelector('#tasks').innerHTML += `<div class="task"><span id="taskname">${document.querySelector('#newtask input').value}</span><button class="delete"><i class="fa-regular fa-trash-can"></i></button></div>`;
        swal("Success!", "Successfully filled the task!", "success", { button: "Yeah!" });
        // Deleting a task
        var current_tasks = document.querySelectorAll(".delete");
        for (let i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                // this code is to remove the task
                this.parentNode.remove();
            }
        }
        // Crossing out a complete task
        let tasks = document.querySelectorAll(".task");
        for (let i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function() {
                swal({
                    title: "Congratulations!",
                    text: "You did it well.",
                    icon: "success",
                    button: false
                });
                // this code is to mark as completed the task
                this.classList.toggle('completed');
            }
        }
        // Clear input field after each entry
        document.querySelector("#newtask input").value = "";
    }
}


// Add event keyboard 
document.addEventListener('keyup', function(event) {
    console.log(`${event.key} is pressed on keyboard.`);
    if (event.key === 'Enter') {
        start();
    } else if (event.key === '/') {
        document.querySelector('#newtask input').focus();
    }
});