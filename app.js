function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    //get the text//
    let title = document.createElement('div');
    title.textContent = newToDoText.value;
    title.className = 'mdl-list__item-primary-content';
    //create a new li
    let newLi = document.createElement('li');
    newLi.className = 'mdl-list__item';
    //create a new input
    let checkbox = document.createElement('input');
    //set the input's type to checkbox
    checkbox.type = "checkbox";
    //create a delete button
    let deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.className = 'mdl-button mdl-js-button mdl-js-ripple-effect';
    //attach the checkbox to the li
    newLi.appendChild(checkbox);
    //set the title
    newLi.appendChild(title);
    //attach the deleteButton to the li
    newLi.appendChild(deleteButton);
    //attach the li to the ul
    toDoList.appendChild(newLi);
    //empty the input
    newToDoText.value = '';

    //remove li by clicking the delete button
    deleteButton.onclick = function(){
      toDoList.removeChild(newLi);
    }
    newToDoText.focus();
  });

}

function deleteLi() {
    const dBtn = document.getElementById('dBtn');

}

window.onload = function() {
  onReady();

};
