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
    console.log("Database updated:", participants);
}