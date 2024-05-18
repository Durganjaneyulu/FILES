const form = document.querySelector('form');
const input =document.getElementById('new-task-input');
const todoList = document.getElementById('todolist'); 
form.addEventListener('submit', function(event) 
{ 
   event.preventDefault(); 
   const inputValue = input.value.trim(); 
   if (inputValue !== '') 
   { 
		const li = document.createElement('li'); 
		const checkbox = document.createElement('input');                  
		checkbox.type = 'checkbox'; 
		const label = document.createElement('label'); 
		label.textContent = inputValue; 
		li.appendChild(checkbox); 
		li.appendChild(label); 
		const deleteButton = document.createElement('button'); 
		deleteButton.textContent = 'Delete'; 
		deleteButton.addEventListener('click', function(event)
		{ 
   
			todoList.removeChild(li); 
		}); 
		li.appendChild(deleteButton); 
		todoList.appendChild(li); 
		input.value = ''; 
   }
 });