function submitForm(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Add any additional logic here (e.g., sending data to a server)

    // Show the "sent" verification message
    document.getElementById("sentMessage").style.display = "block";
}
