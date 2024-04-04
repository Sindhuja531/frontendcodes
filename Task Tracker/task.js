const taskList = [
	{"name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },
	{"name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },
	{"name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },
	{"name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },
	{"name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },
	{"name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },
	{"name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }
];

document.addEventListener("DOMContentLoaded", function() {

	let today = new Date();

    // Format the date as "YYYY-MM-DD"
    let formattedDate = today.toISOString().split('T')[0];

    // Set the value of the date input field
    document.getElementById("task_date").min = formattedDate;

	let allTaskList =  document.querySelector(".display-tasks");

	taskList.forEach(function (task) {
		display(task);
	});

	//To display all existing and new tasks
	function display(task){
		let listItem = document.createElement("tr");
		let listItemTdname = document.createElement("td");
		let listItemTddate = document.createElement("td");
		let listItemTdassigned = document.createElement("td");
		listItem.className = "display-tasks-item";

		listItemTdname.appendChild(document.createTextNode(task.name));
		listItemTddate.appendChild(document.createTextNode(task.date));
		listItemTdassigned.appendChild(document.createTextNode(task.assigned));
		listItem.appendChild(listItemTdname);
		listItem.appendChild(listItemTddate);
		listItem.appendChild(listItemTdassigned);
		allTaskList.appendChild(listItem);
	}

	document.querySelector("#submit_btn").addEventListener("click", function(event){
		event.preventDefault();
		let task_name = document.getElementById("task_name").value.trim();
		let task_date = document.getElementById("task_date").value;
		let task_assigned_to = document.getElementById("assigned_to").value.trim();

		//checks if task name is not empty
		if (task_name.length < 3 || task_name.length > 50) {
			alert("Task name must be between 3 and 50 characters.");
			return;
		}

		//checks if assigned person's name is not empty
		if (task_assigned_to.length < 2 || task_assigned_to.length > 50) {
			alert("Assigned to must be between 2 and 50 characters.");
			return;
		}
		
		//checks if date is valid
		if (!isValidDate(task_date)) {
			alert("Invalid task date. Please enter a valid date.");
			return;
		}
		else{
			//format date in mm/dd/yyyy
			let change_date_format = task_date.split('-');
			task_date = change_date_format[1] + "/" + change_date_format[2] + "/" + change_date_format[0];
		}
		
		let newTask = {"name": task_name, "date": task_date, "assigned": task_assigned_to };
		taskList.push(newTask); //add the new task in the existing tasks array.
		display(taskList[taskList.length - 1]); // displays newly created task.

		let mainContainer = document.querySelector(".main_container");
		let taskContainer = document.querySelector(".task_container");

		// To increase the height of main_container and task_container after creating new task
		mainContainer.style.minHeight = mainContainer.offsetHeight + 40 + "px";
		taskContainer.style.minHeight = taskContainer.offsetHeight + 40 + "px";
		
		//to clear input fields after submitting
		document.getElementById("task_name").value = "";
		document.getElementById("task_date").value = "";
		document.getElementById("assigned_to").value = "";
	})

	function isValidDate(dateInput) {
		//checks if the date string is in a valid format
		let regex = /^\d{4}-\d{2}-\d{2}$/;
		if (!regex.test(dateInput)) {
			return false;
		}
		
		let newdate = new Date(dateInput).setHours(0,0,0,0);

		let currentDate = new Date().setHours(0, 0, 0, 0);

    	// Checks if previous date is selected.
		if (newdate < currentDate ) {
			return false; 
		}
		return true;
	}
})