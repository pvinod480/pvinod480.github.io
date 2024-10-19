function toggleModal() {
  const modal = document.getElementById('task-modal');
  const matrix = document.querySelector('.matrix');

  // Toggle the modal visibility
  if (modal.classList.contains('show')) {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none'; // Hide modal after animation
    }, 500); // Match this with the CSS transition duration
  } else {
    modal.style.display = 'block'; // Show modal immediately
    setTimeout(() => {
      modal.classList.add('show'); // Start slide-in animation
    }, 10);
  }
  
  matrix.classList.toggle('locked', modal.classList.contains('show'));
}

function createTask() {
  const taskInput = document.getElementById('task-input');
  const quadrantSelect = document.getElementById('quadrant-select');
  const dueDate = document.getElementById('due-date').value;

  if (taskInput.value.trim() === '') {
    alert('Please enter a task name!');
    return;
  }

  const currentDate = new Date().toLocaleDateString();
  const taskQuadrant = quadrantSelect.value;
  const list = document.getElementById(`list-${taskQuadrant}`);
  const task = document.createElement('div');
  task.className = 'task';
  task.innerHTML = `
    <span>${taskInput.value}</span>
    <div class="dates">📅 Created: ${currentDate} ${dueDate ? ` ⏳ Due: ${dueDate}` : ''}</div>
    <button class="delete-btn" onclick="removeTask(this)">✕</button>
  `;
  list.appendChild(task);
  toggleModal();
  taskInput.value = ''; // Clear the input field after adding the task
  dueDate.value = ''; // Clear the due date after adding the task
}

function removeTask(button) {
  button.parentElement.remove();
}
