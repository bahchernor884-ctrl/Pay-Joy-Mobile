console.log("JavaScript is connected!");

 const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});

  // Close the menu after tapping any other link
navLinks.querySelectorAll("a:not(.dropbtn)").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// On phones, tapping "Services" opens/closes its list
document.querySelector(".dropbtn").addEventListener("click", (e) => {
  if (window.innerWidth <= 768) {
    e.preventDefault();
    e.currentTarget.parentElement.classList.toggle("show");
  }
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


  const team = [
  {
    name: "Euctace During",
    role: "Founder &amp; Owner",
    bio: "Euctace During is the owner and leader of PayJoy, bringing extensive knowledge and expertise in mobile phone repairs, maintenance, and troubleshooting. He leads our team with experience, dedication, and a commitment to quality service.",
    photo: "images/papa.jpg",
    phone: "23272600027",
    first: "Euctace",
    owner: true
  },
  {
    name: "Ibrahim Dukulay",
    role: "Phone Flashing &amp; Mobile Solutions",
    bio: "Mobile Technician specializing in phone flashing, FRP bypass, and Android software solutions across a wide range of devices.",
    photo: "images/odumodu.jpg",
    phone: "23276536252",
    first: "Ibrahim"
  },
  {
    name: "Ansu Wunda",
    role: "Phone Software Specialist",
    bio: "Phone software specialist handling flashing, account recovery, and Android software updates to keep devices running securely.",
    photo: "images/ansuwunda.jpg",
    phone: "23274239799",
    first: "Ansu"
  },
  {
    name: "Raymond",
    role: "Phone Repair Technician",
    bio: "Skilled phone repair technician specializing in screen and battery replacement, with a focus on reliable, high quality repairs.",
    photo: "images/ray.jpg",
    phone: "23288624829",
    first: "Raymond"
  },
  {
    name: "Gassimu Kuyateh",
    role: "Phone Repair Technician",
    bio: "Phone repair Technician specializing in screen, battery, and charging port replacement.",
    photo: "images/gas.jpg",
    phone: "23275050924",
    first: "Gassimu"
  },
  {
    name: "Mustapha Williams",
    role: "Phone Repair Technician",
    bio: "Phone repair Technician specializing in screen, battery, and charging port replacement.",
    photo: "images/mustapha.png",
    phone: "23272497013",
    first: "Mustapha"
  }
];

const whatsappIcon = '<svg role="img" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>';

const teamGrid = document.getElementById("teamGrid");

team.forEach(function (person) {
  const message = encodeURIComponent(
    "Hi " + person.first + ", I found your profile on Pay Joy mobile and I'd like to ask about a repair"
  );

  const card = document.createElement("div");
  card.className = "team-card" + (person.owner ? " team-card--owner" : "");

  card.innerHTML =
    (person.owner ? '<span class="owner-badge">Owner &amp; Boss</span>' : "") +
    '<img src="' + person.photo + '" alt="' + person.name + '" class="team-photo">' +
    '<h3 class="team-name">' + person.name + '</h3>' +
    '<p class="team-role">' + person.role + '</p>' +
    '<p class="team-bio">' + person.bio + '</p>' +
    '<a class="whatsapp-btn" href="https://api.whatsapp.com/send?phone=' + person.phone + '&text=' + message + '" target="_blank" rel="noopener">' +
      whatsappIcon + " Chat with " + person.first +
    '</a>';

  teamGrid.appendChild(card);
});


const reviews = [
  {
    name: "Mohamed Kamara",
    detail: "Screen replacement",
    rating: 5,
    text: "My screen was badly cracked and they changed it the same day. It looks brand new. Very honest price too."
  },
  {
    name: "Aminata Sesay",
    detail: "Phone flashing",
    rating: 5,
    text: "My phone was stuck on the logo and I thought it was finished. They flashed it and now it works perfectly. Thank you PayJoy!"
  },
  {
    name: "Ibrahim Bangura",
    detail: "Battery replacement",
    rating: 4,
    text: "My battery used to die before midday. After the new battery, it now lasts the whole day. Good service."
  },
  {
    name: "Fatmata Conteh",
    detail: "Charging port repair",
    rating: 5,
    text: "My phone would not charge unless I held the cable in a certain way. They fixed the port quickly and it charges fast now."
  },
  {
    name: "Alhaji Koroma",
    detail: "Account recovery",
    rating: 5,
    text: "I was locked out of my phone after a reset. The team helped me get back in without losing anything important."
  },
  {
    name: "Mariama Jalloh",
    detail: "Software update",
    rating: 4,
    text: "My phone was slow and always hanging. After the software update it runs smooth again. I will come back."
  }
];

const reviewsGrid = document.getElementById("reviewsGrid");

reviews.forEach(function (review) {
  const stars = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);

  const card = document.createElement("div");
  card.className = "review-card";
  card.innerHTML =
    '<div class="review-stars">' + stars + '</div>' +
    '<p class="review-text">' + review.text + '</p>' +
    '<p class="review-name">' + review.name + '</p>' +
    '<p class="review-detail">' + review.detail + '</p>';

  reviewsGrid.appendChild(card);
});

