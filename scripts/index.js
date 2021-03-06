const add = document.querySelector('#add-button');
const form = document.querySelector('.form');
const cancel = document.querySelector('#cancel-button');
const save = document.querySelector('#save-button');
const clear = document.querySelector('#clear');
const remove = document.querySelector('#remove');
const reverse = document.querySelector('#reverse-button');
const switchButton = document.querySelector('#switch-button');
const buttons = document.querySelectorAll('.button-svg');
const header = document.querySelector('.header');
const date = document.querySelector('.date-now');
const currentTime = document.querySelector('#currentTime');
const container = document.querySelector('.container');

//UI.updateTask(3);
//Page will display if there is an existing Task.
window.addEventListener('DOMContentLoaded', UI.displayTask);
window.addEventListener('DOMContentLoaded', () => {
    let mode = UI.getMode();
    let value = true;
    if (value === mode) {
        UI.changeColor();
    } 

});
window.addEventListener('DOMContentLoaded', () => {

    setInterval(() => {
        UI.getCurrentDate();
        var now = new Date();

    }, 1000);
});

function valueChanger(x) {
    return !x;
}
// Event Listeners
add.addEventListener('click', UI.showTask);
cancel.addEventListener('click', () => form.style.display = 'none');
save.addEventListener('click', UI.submitTask);
clear.addEventListener('click', Storage.clearFields);
reverse.addEventListener('click', UI.toggle);
switchButton.addEventListener('click', () => {
    let mode = UI.getMode();
    let value = valueChanger(mode);
    localStorage.setItem('mode', JSON.stringify(value));
    UI.changeColor();
});






//Remove
window.addEventListener('click', function (e) {
    if (e.target.classList.contains('fa-times')) {
        const delIndex = parseInt(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
        const task = Storage.getTasks();
        if (task.length === 0) {
            console.log('no task')
        } else {
            task.forEach(function (tasks, index) {
                if (tasks.taskID === delIndex) {
                    task.splice(index, 1);
                    UI.taskDone(e);
                    //e.target.parentElement.parentElement.remove();
                }
            });
            localStorage.setItem('tasks', JSON.stringify(task));
        }

    }
});

//Check if Done
window.addEventListener('click', function (e) {
    if (e.target.classList.contains('fa-check')) {
        const delIndex = parseInt(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
        const task = Storage.getTasks();
        if (task.length === 0) {
            console.log('no task');
        } else {
            task.forEach(function (tasks, index) {
                if (tasks.taskID === delIndex) {
                    task.splice(index, 1);
                    UI.taskDone(e);
                }
            });
            localStorage.setItem('tasks', JSON.stringify(task));
        }

    }
});