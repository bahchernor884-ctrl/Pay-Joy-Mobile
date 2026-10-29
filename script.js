console.log("JavaScript is connected!");

 const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");
  const icon = menuBtn.querySelector("i");

  menuBtn.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
    icon.className = open ? "fa-solid fa-xmark" : "fa-solid fa-bars";
  });

  // On phones, tapping "Services" opens/closes its list
  document.querySelector(".dropbtn").addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      e.currentTarget.parentElement.classList.toggle("show");
    }
  });

  // Close the menu after tapping any other link
  navLinks.querySelectorAll("a:not(.dropbtn)").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      icon.className = "fa-solid fa-bars";
    });
  });


const form = document.getElementById("bookingform");

  form.addEventListener("submit", function (e) {
    // Stop the page from reloading
    e.preventDefault();

    // Grab what the customer typed in each box
    const nameValue = document.getElementById("name").value;
    const phoneValue = document.getElementById("phone").value;
    const modelValue = document.getElementById("model").value;
    const repairValue = document.getElementById("repair").value;
    const messageValue = document.getElementById("message").value;

     // Check: stop if name or phone is empty
if (nameValue.trim() === ""  || phoneValue.trim() === "") {
    alert("Please enter your name and phone number.");
    return;
}

    // Build the message (\n means "new line")
    const text =
      "Hello Pay Joy Mobile, I'd like to book a repair.\n" +
      "Name: " + nameValue + "\n" +
      "Phone: " + phoneValue + "\n" +
      "Model: " + modelValue + "\n" +
      "Repair: " + repairValue + "\n" +
      "Details: " + messageValue;

    // Open WhatsApp with your number and the message
    window.open(
      "https://wa.me/23272600027?text=" + encodeURIComponent(text),
      "_blank"
    );
  });

  // When someone taps a "Book a Repair" link, put the cursor in the name box
  document.querySelectorAll('a[href="#contact-us"]').forEach(function (link) {
    link.addEventListener("click", function () {
      setTimeout(function () {
        document.getElementById("name").focus({ preventScroll: true });
      }, 600);
    });
  });

  const statusBadge = document.getElementById("shopStatus");

  const hour = new Date().getHours();

  if (hour >= 7 && hour < 20) {
    statusBadge.textContent = "Open now";
    statusBadge.classList.add("open");
  } else {
    statusBadge.textContent = "Closed now";
    statusBadge.classList.add("closed");
  }




