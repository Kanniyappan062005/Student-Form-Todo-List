var inputname = document.getElementById("input-name");
var inputage = document.getElementById("input-age");
var inputgender = document.getElementById("input-gender");
var inputcourse = document.getElementById("input-course");
var inputemail = document.getElementById("input-email");
var details = document.getElementById("details");
var savebtn = document.getElementById("save-btn");
var studentdetails= document.getElementById("st-dts")


savebtn.addEventListener("click", function () {

    // View in Student Details Table
    studentdetails.classList.remove("hidden");

    //Get input values
    var name = inputname.value.trim();
    var age = inputage.value.trim();
    var gender = inputgender.value;
    var course = inputcourse.value;
    var email = inputemail.value.trim();

    // Ensure no field in empty
    if (!name || !age || !gender || !course || !email) {
        alert("Please fill out All Fields");
        return;
    }

    // Create the table row element
    var tr = document.createElement("tr");

    // Insert Data into Row
    tr.innerHTML = `
    <td>${name}</td>
    <td>${age}</td>
    <td>${gender}</td>
    <td>${course}</td>
    <td>${email}</td>
    <td><button class="delete-btn" style="background-color: red; color: white; border: none; padding: 5px; cursor: pointer;">Delete</button></td>
`;
    tr.style.textAlign="center"

    // Append row to Table
    details.appendChild(tr);

    // Delete Functionality
    tr.querySelector(".delete-btn").addEventListener("click", function () {
        tr.remove();
    });
});
