function addTask() {
    const task = document.getElementById('new-task').value;
    if (task) {
        const li = document.createElement('li');
        li.innerText = task;
        document.getElementById('task-list').appendChild(li);
        document.getElementById('new-task').value = '';
    }
}
