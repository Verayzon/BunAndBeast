window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("reset_button").addEventListener("click", () => {
        // Reset the form by resetting the input field value
        document.getElementById("name_field").value = "";
    });

    document.getElementById("enter_button").addEventListener("click", (e) => {
        let username = document.getElementById("name_field").value.toUpperCase().trim();
        if (username === "GIENE" || username === "BUN" || username === "MARCUS" || username === "BEAST") {
            // Redirect to another page after successful login
            window.location.href = "mainpage.html"; // Change the URL to the desired page
        } else {
            // Handle cases where the username is not one of the specified values
            document.getElementById("dialog-dark-rounded").style.display = "block";
            
            document.getElementById("okDialogButton").addEventListener("click", () => {
                document.getElementById("dialog-dark-rounded").style.display = "none";
            });

            document.getElementById("cancelDialogButton").addEventListener("click", () => {
                document.getElementById("dialog-dark-rounded").style.display = "none";
            });
            
            e.preventDefault();
        }
    });
});
