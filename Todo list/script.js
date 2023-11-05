const input = document.getElementById("text");
const list = document.getElementById("list");
const btn = document.getElementById("btn");



// Get tasks from localStorage on load
const storedTasks = JSON.parse(localStorage.getItem('tasks'));
if(storedTasks) {
  list.innerHTML = storedTasks;
}


const trash = document.querySelectorAll('.trash');
trash.forEach(del => {
  del.addEventListener('click', () => {
    del.parentNode.remove();
    
    // Save updated tasks
    const updatedTasks = list.innerHTML;
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); 
  });
});

btn.addEventListener('click', () => {

  if (input.value === '') {
    alert("Empty space is not a task");

  } else {
    
    const task = `
      <div class='task'>
        <input type='checkbox' class='task-check'>
        <span class='taskName'>${input.value}</span>
        <button class='trash'>
          <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
      </div>`;

    list.insertAdjacentHTML("beforeend", task);

    input.value = '';
    
    // Save tasks to localStorage
    const tasks = list.innerHTML; 
    localStorage.setItem('tasks', JSON.stringify(tasks));

    const trash = document.querySelectorAll('.trash');

    

  }
  
});

