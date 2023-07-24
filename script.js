document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop();

  const navLinks = document.querySelectorAll(".nav-list li a");
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active"); // Add Bootstrap's "active" class
    }
  });
});

function opentab(tabName) {
  var tabLinks = document.getElementsByClassName("tab-links");
  var tabContents = document.getElementsByClassName("tab-contents");

  for (var tabLink of tabLinks) {
      tabLink.classList.remove("active-link");
  }
  for (var tabContent of tabContents) {
      tabContent.classList.remove("activeTab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("activeTab");
}

document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Get the form data
  const formData = new FormData(event.target);
  const msg = document.getElementById("msg");

  // Add a timestamp to the form data
  const timestamp = new Date();
  formData.append("timestamp", timestamp.toISOString());

  // Send the form data using AJAX
  fetch(event.target.action, {
    method: 'POST',
    body: formData,
  })
    .then(response => response.json())
    .then(data => {
      // Handle the response data here if needed
      msg.innerHTML = "Message Sent Successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      event.target.reset();
      // You can display a success message to the user here if you want
    })
    .catch(error => {
      // Handle errors here if needed
      console.error('Error:', error);
      msg.innerHTML = "Error!";
      // You can display an error message to the user here if you want
    });
});