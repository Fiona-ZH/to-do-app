function onReady() {
  let iD = 0;
  var toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) {
      alert("Input can not be empty");
      return;}

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: iD
    });

    iD++;

    newToDoText.value = '';
    newToDoText.focus();

    renderTheUI();
  }

  function renderTheUI(){
      const toDoList = document.getElementById('toDoList');

      toDoList.textContent = '';

      toDos.forEach(function(toDo){
        const newLi = document.createElement('li');
        newLi.textContent = toDo.title;

        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";

        function deleteLi(){
          toDos = toDos.filter(function(todo){
            return toDo.id != todo.id;
          });
          renderTheUI();
        }
        deleteButton.addEventListener('click', deleteLi);

        toDoList.appendChild(newLi);
        newLi.appendChild(checkbox);
        newLi.appendChild(deleteButton);

      });

  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();

}

window.onload = function() {
  onReady();
};
