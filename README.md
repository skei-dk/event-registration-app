# Student Registration Form

This is a front-end web application built to handle student registrations for different academic fields. It was developed entirely with HTML, CSS, and vanilla JavaScript, without relying on any external libraries or frameworks.

## Features

- **Form Validation:** The script checks that all required fields are filled out, verifies that the email address contains an '@' symbol, and makes sure the user is at least 18 years old.
- **Combined Error Messages:** Instead of throwing an alert for just the first mistake, the form collects all validation errors into an array and displays them at the same time so the user knows exactly what to fix.
- **Dynamic List Rendering:** The participant list updates instantly without a page refresh. The application uses a state-driven approach—all data is stored in a global JavaScript array, and the UI is cleared and redrawn to match this array whenever a change happens.
- **Filtering:** Users can filter the registered students by their study field. This is done using a conditional check inside the render loop, which simply skips drawing the elements that don't match the selected filter, keeping the original data intact.
- **Delete Function:** Each entry has a delete button. Clicking it uses the splice method to remove that specific participant from the global array based on their index, followed by a quick redraw of the list to remove them from the screen.

## Technical Notes

The main architecture revolves around keeping the visual interface synced with the data array. To prevent duplicates from showing up when a new person is added, the script clears the container's inner HTML right before looping through the array to build the new list elements. 

## How to run

To view the project, just download the folder and open index.html in any standard web browser. The CSS and JS files are linked relatively, so it will run locally without a server.