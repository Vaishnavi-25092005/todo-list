function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔️";
  completeBtn.onclick = () => span.classList.toggle("completed");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";
  deleteBtn.onclick = () => taskList.removeChild(li);

  li.appendChild(span);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}
