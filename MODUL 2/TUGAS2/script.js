// Fungsi untuk menambahkan tugas baru
function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Masukkan tugas!');
        return;
    }

    const taskList = document.getElementById('task-list');
    const newTask = document.createElement('li');

    newTask.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Hapus</button>
        </div>
    `;

    taskList.appendChild(newTask);
    taskInput.value = '';
}

// Fungsi untuk mengedit tugas
function editTask(button) {
    const taskItem = button.parentElement.parentElement;
    const taskText = taskItem.querySelector('span').innerText;
    const newTaskText = prompt('Edit tugas:', taskText);

    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskItem.querySelector('span').innerText = newTaskText;
    }
}

// Fungsi untuk menghapus tugas
function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}
