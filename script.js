function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById('taskList');

        const li = document.createElement('li');
        li.className = 'collection-item';
        li.textContent = taskText;

        const completeButton = document.createElement('a');
        completeButton.className = 'secondary-content';
        completeButton.innerHTML = '<i class="material-icons">check</i>';
        completeButton.onclick = function() {
            li.classList.toggle('completed');
        };

        const deleteButton = document.createElement('a');
        deleteButton.className = 'secondary-content';
        deleteButton.innerHTML = '<i class="material-icons">delete</i>';
        deleteButton.onclick = function() {
            taskList.removeChild(li);
        };

        li.appendChild(completeButton);
        li.appendChild(deleteButton);

        taskList.appendChild(li);

        taskInput.value = '';
    }
}
