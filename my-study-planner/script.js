const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskText = input.value.trim();
  if (!taskText) return;

  const item = document.createElement("li");
  const task = document.createElement("span");
  task.textContent = taskText;

  task.addEventListener("click", function () {
    item.classList.toggle("done");
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete";
  deleteButton.addEventListener("click", function () {
    item.remove();
  });

  item.append(task, deleteButton);
  list.appendChild(item);
  input.value = "";
});
