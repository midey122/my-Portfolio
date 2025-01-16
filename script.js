// document.addEventListener("DOMContentLoaded", function () {
//   const text = "Hello";
//   const container = document.body;

//   text.split("").forEach((letter, index) => {
//     const span = document.createElement("span");
//     span.textContent = letter;
//     span.classList.add("falling-letter");
//     span.style.animation = `fall 2s linear ${index * 0.2}s forwards`;
//     container.appendChild(span);
//   });
// });
function toggleMenu() {
  var navLinks = document.getElementById("navLinks");
  navLinks.style.display === "none"
    ? (navLinks.style.display = "flex")
    : (navLinks.style.display = "none");
}

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var formData = new FormData(this);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://formspree.io/olajideayomide946@gmail.com");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        document.getElementById("response").innerHTML =
          "Message sent successfully!";
        document.getElementById("contact-form").reset();
      } else {
        document.getElementById("response").innerHTML =
          "Failed to send message. Please try again later.";
      }
    };
    xhr.send(formData);
  });
