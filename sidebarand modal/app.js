function submitForm() {
    // Get form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;

    // Validate form data (add your validation logic here)

    // Send form data to server (you can use AJAX to send the data)

    // For demonstration purposes, log the form data to console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", cpassword);

    // Reset form fields
    document.getElementById("signupForm").reset();
}