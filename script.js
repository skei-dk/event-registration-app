const registrationForm = document.querySelector("#registrationForm");
const message_box = document.querySelector("#message-box");


registrationForm.addEventListener("submit", function() {
    event.preventDefault()
    console.log("Form submitted!");

    const firstName = document.querySelector("#firstName").value.trim();
    const lastName = document.querySelector("#lastName").value.trim();
    const email = document.querySelector("#email").value.trim();
    const age = document.querySelector("#Age").value;
    const studyField = document.querySelector("#StudyField").value;
    const terms = document.querySelector("#terms").checked;

    console.log(firstName, lastName, email, age, studyField, terms);

    let errorList = []

    if (firstName === "") {
        errorList.push("First Name is missing.");
    }
    if (lastName === "") {
        errorList.push("Last Name is missing.");
    }
    if (email === "") {
        errorList.push("Email is missing.");
    }
    else if(!email.includes("@")){
        errorList.push("Email has to include @");
    }
    if (age === ""){
        errorList.push("Age is missing.")
    }
    else if (age < 18){
        errorList.push("You must be 18 year-old or older to participate.")
    }
    if (studyField ===""){
        errorList.push("Field of Study is missing.")
    }
    if (terms === false){
        errorList.push("You have to agree with rules to participate.")
    }

    if(errorList.length > 0){
        message_box.className = "message-box error";

        message_box.innerHTML = "<strong>Please fix the following or read:</strong><br>" + errorList.join("<br>");
        return;
    }

    addParticipant(firstName, lastName, email, age, studyField);

    message_box.className = "message-box success";
    message_box.innerHTML = `
        <strong>Application accepted!</strong><br>
        Student: ${firstName} ${lastName}<br>
        Email: ${email}<br>
        Age: ${age}<br>
        Study field: ${studyField}<br>
        `;

    registrationForm.reset();
});

let participants = [];

function addParticipant(fName, lName, userEmail, userAge, field) {
    const newParticipant = {
        firstName: fName,
        lastName: lName,
        email: userEmail,
        age: userAge,
        studyField: field
    };

    participants.push(newParticipant);
    renderParticipants(newParticipant);
    console.log("Database updated:", participants);
}


function renderParticipants() {
    
    const section = document.getElementById("participantSection");
    const countSpan = document.getElementById("participantCount");
    const list = document.getElementById("participantList");

    countSpan.textContent = participants.length;

    if (participants.length > 0) {
        section.style.display = "block";
    } else {
        section.style.display = "none"; 
    }

    const filterValue = document.getElementById("filterField").value;

    list.innerHTML = "";

    participants.forEach(function(person, index) {

        if(filterValue !== "All" && person.studyField !== filterValue) {
            return
        }

        const li = document.createElement("li");

        li.className = "participant-card";

        li.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <strong>${person.firstName} ${person.lastName}</strong> (Age: ${person.age})<br>
                    <span class="participant-details">${person.email} • ${person.studyField}</span>
                </div>
                <button onclick="deleteParticipant(${index})" style="background: #ef4444; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; width: auto;">Delete</button>
            </div>
        `;

        list.appendChild(li);
    });
}


function deleteParticipant(indexToRemove) {
    participants.splice(indexToRemove, 1);

    message_box.className = "message-box success";
    message_box.innerHTML = "<strong>Participant was remowed!</strong>"
    
    renderParticipants(); 
}