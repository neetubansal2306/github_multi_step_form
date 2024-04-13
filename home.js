function updateProgressBar(step, totalSteps) {
    var progressBar = document.getElementById("progressBar");
    var progress = (step / totalSteps) * 100;
    progressBar.style.width = progress + "%";
    progressBar.innerHTML = Math.round(progress) + "%";
}

// Example usage:
var currentStep = 2;
var totalSteps = 5;
updateProgressBar(currentStep, totalSteps);

document.getElementById("personal-form").addEventListener("submit", function (event) {
    event.preventDefault();

    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;

    // You can perform further processing with the captured data here

    alert("Form submitted successfully!\n\nFull Name: " + fullName + "\nEmail: " + email + "\nPhone: " + phone + "\nAddress: " + address);
});
document.getElementById("successMsg").style.display = "block";