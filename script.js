let tasks  = [];
let nextId = 1;

const input    = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

/* ─── State mutators ─────────────────────────────── */

function addTask() {
  const description = input.value.trim();
  if (!description) return;
  tasks.push({ id: nextId++, description, completed: false });
  input.value = '';
  renderTasks();
}

function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.completed = !task.completed;
    renderTasks();
  }
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  renderTasks();
}

/* ─── Icons ──────────────────────────────────────── */

const CHECK_SVG = `<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 6.5L5 9.5L11 3.5" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const TRASH_SVG = `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.5 4H13.5" stroke="currentColor" stroke-width="1.35" stroke-linecap="round"/>
  <path d="M5 4V2.5C5 2.22 5.22 2 5.5 2H9.5C9.78 2 10 2.22 10 2.5V4" stroke="currentColor" stroke-width="1.35" stroke-linecap="round"/>
  <path d="M3 4L3.5 12.5C3.5 12.78 3.72 13 4 13H11C11.28 13 11.5 12.78 11.5 12.5L12 4" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

/* ─── Render ─────────────────────────────────────── */

function renderTasks() {
  taskList.innerHTML = '';

  if (tasks.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.textContent = 'No tasks yet. Add one above.';
    taskList.appendChild(empty);
    return;
  }

  const pending   = tasks.filter(t => !t.completed);
  const completed = tasks.filter(t =>  t.completed);
  const sorted    = [...pending, ...completed];

  sorted.forEach((task, i) => {
    const item = document.createElement('div');
    item.className = 'task-item';
    item.style.animationDelay = `${i * 0.03}s`;

    /* Checkbox */
    const checkbox = document.createElement('div');
    checkbox.className = 'checkbox' + (task.completed ? ' checked' : '');
    if (task.completed) checkbox.innerHTML = CHECK_SVG;
    checkbox.addEventListener('click', () => toggleTask(task.id));

    /* Text */
    const text = document.createElement('span');
    text.className = 'task-text' + (task.completed ? ' completed' : '');
    text.textContent = task.description;

    /* Delete */
    const del = document.createElement('button');
    del.className = 'delete-btn';
    del.setAttribute('aria-label', 'Delete task');
    del.innerHTML = TRASH_SVG;
    del.addEventListener('click', () => deleteTask(task.id));

    item.append(checkbox, text, del);
    taskList.appendChild(item);
  });
}

/* ─── Event listeners ────────────────────────────── */

input.addEventListener('keydown', e => { if (e.key === 'Enter') addTask(); });
document.getElementById('submit-btn').addEventListener('click', addTask);

renderTasks();
