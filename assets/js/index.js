const tasks = [];
const inputTask = document.getElementById("newTask");
const button = document.getElementById("addTask");
const idList = document.getElementById("idList");
const taskNameList = document.getElementById("taskNameList");
const checkDelete = document.getElementById("checkDelete");
const total = document.getElementById("totalTask");
const completedTask = document.getElementById("completedTask");
let id = 0;

button.addEventListener("click", (e) => {
  e.preventDefault();
  id += 1;
  console.log("here");
  const newTask = inputTask.value;
  tasks.push({ id: id, taskName: newTask, completed: false });
  inputTask.value = "";
  console.log(tasks);

  writeTasks(tasks);

  //let newIdTask = "";
  //let newNameTask = "";
  //let newChecks = "";
  //for (let task of tasks) {
  //  let isChecked = "";
  //  if (task.completed === true) {
  //    isChecked = "checked";
  //    newNameTask += `<li class="checked">${task.taskName}</li>`;
  //  } else {
  //    newNameTask += `<li>${task.taskName}</li>`;
  //  }
  //  newIdTask += `<li>${task.id}</li>`;
  //  //newNameTask += `<li>${task.taskName}</li>`;
  //  newChecks += `<div class="form-check">
  //  <input onclick="updateTask(event,${task.id})" class="form-check-input" type="checkbox" value="" id="checkbox-${task.id}" ${isChecked}>
  //  <label class="form-check-label" for="checkbox-${task.id}">
  //  <p>|</p>
  //  </label>
  //  <a onclick="deleteTask(${task.id})">❌</a>
  //</div>`;
  //}
  //total.textContent = tasks.length;
  //idList.innerHTML = newIdTask;
  //taskNameList.innerHTML = newNameTask;
  //checkDelete.innerHTML = newChecks;
});

const deleteTask = (id) => {
  const index = tasks.findIndex((element) => element.id == id);
  if (tasks[index].completed) {
    completedTask.textContent--;
  }
  tasks.splice(index, 1);

  writeTasks(tasks);
  //let newIdTask = "";
  //let newNameTask = "";
  //let newChecks = "";
  //for (let task of tasks) {
  //  let isChecked = "";
  //  if (task.completed === true) {
  //    isChecked = "checked";
  //    newNameTask += `<li class="checked">${task.taskName}</li>`;
  //  } else {
  //    newNameTask += `<li>${task.taskName}</li>`;
  //  }
  //  newIdTask += `<li>${task.id}</li>`;
  //  //newNameTask += `<li>${task.taskName}</li>`;
  //  newChecks += `<div class="form-check">
  //  <input onclick="updateTask(event,${task.id})" class="form-check-input" type="checkbox" value="" id="checkbox-${task.id}" ${isChecked}>
  //  <label class="form-check-label" for="checkbox-${task.id}">
  //  <p>|</p>
  //  </label>
  //  <a onclick="deleteTask(${task.id})">❌</a>
  //</div>`;
  //}
  //total.textContent = tasks.length;
  //idList.innerHTML = newIdTask;
  //taskNameList.innerHTML = newNameTask;
  //checkDelete.innerHTML = newChecks;
};

const updateTask = (event, id) => {
  const checkbox = document.getElementById(`checkbox-${id}`);
  const index = tasks.findIndex((element) => element.id == id);

  //let doneText = "";
  //let doneText = " || DONE";
  if (checkbox.checked) {
    tasks[index].completed = true;
    //tasks[index].taskName = `${tasks[index].taskName}` + doneText;
    completedTask.textContent++;
  } else {
    tasks[index].completed = false;
    completedTask.textContent--;
  }

  writeTasks(tasks);
  // let newIdTask = "";
  // let newNameTask = "";
  // let newChecks = "";
  // for (let task of tasks) {
  // let isChecked = "";
  // if (task.completed === true) {
  // isChecked = "checked";
  // newNameTask += `<li class="checked">${task.taskName}</li>`;
  // } else {
  // newNameTask += `<li>${task.taskName}</li>`;
  // }
  // newIdTask += `<li>${task.id}</li>`;
  //newNameTask += `<li>${task.taskName}</li>`;
  // newChecks += `<div class="form-check">
  // <input onclick="updateTask(event,${task.id})" class="form-check-input" type="checkbox" value="" id="checkbox-${task.id}" ${isChecked}>
  // <label class="form-check-label" for="checkbox-${task.id}">
  // <p>|</p>
  // </label>
  // <a onclick="deleteTask(${task.id})">❌</a>
  // </div>`;
  // }
  // total.textContent = tasks.length;
  // idList.innerHTML = newIdTask;
  // taskNameList.innerHTML = newNameTask;
  // checkDelete.innerHTML = newChecks;
};

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
    //newNameTask += `<li>${task.taskName}</li>`;
    newChecks += `<div class="form-check">
    <input onclick="updateTask(event,${
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
