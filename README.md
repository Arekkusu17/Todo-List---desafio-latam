# Todo List Challenge - Desafio Latam

The meaning of this challenge is to validate JS knowledge by dynamically add elements to the webpage.

Site of deploy: https://arekkusu17.github.io/Todo-List---desafio-latam/



## Work Done
- Write the html structure and the script.
By doing that, I knew which elements i had to modify and edit to complete the challenge.
I decided to write a function that would let me write all the tasks by iterating inside the function and even writting the HTML, so i wouldn't repeat the code too many times. Since I already knew how was the array of object written, i could use the Object.keys
```
objectExample={
    id: number,
    taskName:"text",
    completed: boolean (by default it is false)
}


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
```
- Add Event Listeneres.
First thing to do was add a new task using the input and a event listener when the button is clicked. Then a new object will be pushed to the tasks array, updating the id (adding one each time) and setting it completed: false by default.
 ```
id += 1;
const newTask = inputTask.value;
tasks.push({ id: id, taskName: newTask, completed: false })
 ```
- Then it was needed to add functionality to the checkbox and delete icon.
For the delete, by default i created an `onclick="deleteTask( respective task id )` and then define the deleteTask function.
**Had to be careful to check if the task deleted is completed or not**. 
```
const deleteTask = (id) => {
  const index = tasks.findIndex((element) => element.id == id);
  if (tasks[index].completed) {
    completedTask.textContent--;
  }
  tasks.splice(index, 1);

  writeTasks(tasks);
};
```
For the checkbox, i gave an id to every checkbox based on the respective task id. And wrote an `onclick="updateTask( some task id )"`.
Then check if that checkbox is checked, and do the following:
```
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
```
- Add the Readme.
