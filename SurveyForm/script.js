function submitSurvey(event) {
	event.preventDefault();

	// Get form data
	const name = document.getElementById("name").value;
	const age = document.getElementById("age").value;
	const classelement = document.getElementById("class").value;
	const comment = document.getElementById("comment").value;

	// Clear form fields
	document.getElementById("surveyForm").reset();

	// Add data to table
	const table = document.getElementById("surveyData");
	const newRow = table.insertRow();
	const cell1 = newRow.insertCell(0);
	const cell2 = newRow.insertCell(1);
	const cell3 = newRow.insertCell(2);
	const cell4 = newRow.insertCell(3);

	cell1.textContent = name;
	cell2.textContent = age;
	cell3.textContent = classelement;
	cell4.textContent = comment;
}
