(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

   /*  document.getElementById("submitButton").addEventListener("click", function() {
        // Prevent default form submission
        event.preventDefault();

        // Get the form element
        const form = document.getElementById("contactForm");

        // Create a FormData object from the form
        const formData = new FormData(form);

        // Send the form data to Web3Forms
        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from Web3Forms
            if (data.success) {
                alert("Form submitted successfully!");
            } else {
                alert("There was an error submitting the form. Please try again.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("There was an error submitting the form. Please try again.");
        });
    }); */

