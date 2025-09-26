const tabLinks = document.querySelectorAll(".tab-link");
const tabSections = document.querySelectorAll(".tab-section");

tabLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = link.getAttribute("data-target");

    tabSections.forEach(section => section.classList.remove("active"));
    document.getElementById(target).classList.add("active");
  });
});

const addImageBtn = document.getElementById("addImageBtn");
const imageUrlInput = document.getElementById("imageUrl");
const fileInput = document.getElementById("fileInput");
const gallery = document.getElementById("galleryContainer");

document.querySelectorAll(".remove-btn").forEach(btn => {
  btn.addEventListener("click", e => e.target.parentElement.remove());
});

function addImage() {
  const url = imageUrlInput.value.trim();
  const file = fileInput.files[0];

  if (!url && !file) {
    alert("Enter URL or choose a file");
    return;
  }

  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery-item");

  const img = document.createElement("img");
  img.alt = "Gallery Image";

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "X";
  removeBtn.classList.add("remove-btn");
  removeBtn.addEventListener("click", e => galleryItem.remove());

  galleryItem.appendChild(img);
  galleryItem.appendChild(removeBtn);
  gallery.appendChild(galleryItem);

  if (file) {
    const reader = new FileReader();
    reader.onload = e => img.src = e.target.result;
    reader.readAsDataURL(file);
  } else {
    img.src = url;
  }

  imageUrlInput.value = "";
  fileInput.value = "";
}

addImageBtn.addEventListener("click", addImage);

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = "All fields are required!";
    formMessage.style.color = "red";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formMessage.textContent = "Invalid email!";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "Message sent successfully!";
  formMessage.style.color = "green";
  contactForm.reset();
});
