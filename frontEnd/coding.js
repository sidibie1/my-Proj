// api url
const api_url =
	"http://localhost:3000/getAllData";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		document.getElementById('loading').style.display = 'none';
	}
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th>Name</th>
		<th>Phone</th>
		<th>Email</th>
		<th>Date</th>
		<th>Designation</th>
		</tr>`;
	
	// Loop to access all rows
	for (let r of data) {
		tab += `<tr>
	<td>${r.name} </td>
	<td>${r.phone}</td>
	<td>${r.email}</td>
    <td>${r.date} </td>
	<td>${r.designation}</td>
		
</tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("employees").innerHTML = tab;
}
