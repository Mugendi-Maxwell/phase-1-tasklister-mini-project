
    document.addEventListener("DOMContentLoaded", () => {
      const form = document.getElementById('create-task-form');
      let tasks = [];  // Array to hold all tasks

      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const taskDescription = event.target.description.value;
        const taskPriority = prompt("Set task priority: (High, Medium, Low)", "Low").toLowerCase();  // User sets priority
        //user prompt
        if (["high", "medium", "low"].includes(taskPriority)) {
          addTask(taskDescription, taskPriority);  //  task with description and priority
          form.reset();
        } else {
          alert("Invalid priority! Please enter High, Medium, or Low.");
        }
      });

      function addTask(description, priority) {
        const task = { description, priority };  // Task object with description and priority
        tasks.push(task);  // Add task to array
        sortAndDisplayTasks();  // Sort and display tasks by priority
      }

      function sortAndDisplayTasks() {
        // Sort tasks by priority (High -> Medium -> Low)
        tasks.sort((a, b) => {
          const priorityValue = { high: 1, medium: 2, low: 3 };
          return priorityValue[a.priority] - priorityValue[b.priority];
        });

        // Clear the existing task list
        const list = document.getElementById('list');
        list.innerHTML = '';

        // Add each sorted task to the list
        tasks.forEach(task => {
          createTaskElement(task);
        });
      }

      function createTaskElement(task) {
        const li = document.createElement('li');
        
        // Task description with priority color coding
        let h4 = document.createElement('h4');
        h4.textContent = `${task.description} - Priority: ${task.priority}`;

        // Set color based on priority
        if (task.priority === "high") {
          h4.style.color = "red";
        } else if (task.priority === "medium") {
          h4.style.color = "orange";
        } else {
          h4.style.color = "green";
        }

        // Edit button functionality
        const editBtn = document.createElement('button');
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", () => {
          const newDescription = prompt("Edit task description:", task.description);
          const newPriority = prompt("Edit task priority: (High, Medium, Low)", task.priority).toLowerCase();

          if (newDescription && ["high", "medium", "low"].includes(newPriority)) {
            task.description = newDescription;
            task.priority = newPriority;
            sortAndDisplayTasks();  // Re-sort and display tasks after edit
          } else {
            alert("Invalid input! Please ensure both description and priority are valid.");
          }
        });

        // Delete button functionality
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
          tasks = tasks.filter(t => t !== task);  // Remove the task from the array
          sortAndDisplayTasks();  // Re-display the remaining tasks
        });

        // Append elements to list item
        li.appendChild(h4);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        // Append the list item to the list
        document.getElementById('list').appendChild(li);
      }
    });
const button = document.createElement('button')
button.textContent = "change colour"
button.addEventListener('click',()=>{
  if (document.body.style.backgroundColor === "lightblue") {
    document.body.style.backgroundColor = "lightpink"; // Change  light pink
  } else {
    document.body.style.backgroundColor = "lightblue"; // Change  light blue
  }
})
document.getElementById('button-container').appendChild(button)
