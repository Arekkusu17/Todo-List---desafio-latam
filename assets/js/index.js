const tasks = [
  { id: 1, taskName: "Ir al supermercado", completed: false },
  { id: 2, taskName: "Ordenar la habitación", completed: false },
  { id: 3, taskName: "Realizar tarea del bootcamp", completed: false },
];
const inputTask = document.getElementById("newTask");
const button = document.getElementById("addTask");
const idList = document.getElementById("idList");
const taskNameList = document.getElementById("taskNameList");
const checkDelete = document.getElementById("checkDelete");
const total = document.getElementById("totalTask");
const completedTask = document.getElementById("completedTask");
let id = tasks.length;

const writeTasks = (arr) => {
  let newIdTask = "";
  let newNameTask = "";
  let newChecks = "";
  for (let obj of arr) {
    let isChecked = "";
    if (obj[Object.keys(obj)[2]] === true) {
      isChecked = "checked";
      newNameTask += `<li class="checked">${obj[Object.keys(obj)[1]]} ✅</li>`;
    } else {
      newNameTask += `<li>${obj[Object.keys(obj)[1]]}</li>`;
    }
    newIdTask += `<li>${obj[Object.keys(obj)[0]]}</li>`;
    newChecks += `<div class="form-check">
    <input onclick="updateTask(${
      obj[Object.keys(obj)[0]]
    })" class="form-check-input" type="checkbox" value="" id="checkbox-${
      obj[Object.keys(obj)[0]]
    }" ${isChecked}>
    <label class="form-check-label" for="checkbox-${obj[Object.keys(obj)[0]]}">
    <p>|</p>
    </label>
    <a onclick="deleteTask(${obj[Object.keys(obj)[0]]})">❌</a>  
  </div>`;
  }
  total.textContent = tasks.length;
  idList.innerHTML = newIdTask;
  taskNameList.innerHTML = newNameTask;
  checkDelete.innerHTML = newChecks;
};

writeTasks(tasks);

button.addEventListener("click", (e) => {
  e.preventDefault();
  id += 1;
  const newTask = inputTask.value;
  tasks.push({ id: id, taskName: newTask, completed: false });
  inputTask.value = "";
  console.log(tasks);

  writeTasks(tasks);
});

const deleteTask = (id) => {
  const index = tasks.findIndex((element) => element.id == id);
  if (tasks[index].completed) {
    completedTask.textContent--;
  }
  tasks.splice(index, 1);

  writeTasks(tasks);
};

const updateTask = (id) => {
  const checkbox = document.getElementById(`checkbox-${id}`);
  const index = tasks.findIndex((element) => element.id == id);

  if (checkbox.checked) {
    tasks[index].completed = true;
    completedTask.textContent++;
  } else {
    tasks[index].completed = false;
    completedTask.textContent--;
  }

  writeTasks(tasks);
};
