const addImageBtn = document.getElementById("addImageBtn");
const imageUrlInput = document.getElementById("imageUrl");
const fileInput = document.getElementById("fileInput");
const gallery = document.getElementById("gallery");

function removeImage(e) {
  const galleryItem = e.target.parentElement;
  galleryItem.remove();
}

document.querySelectorAll(".remove-btn").forEach(btn => {
  btn.addEventListener("click", removeImage);
});

function addImage() {
  const url = imageUrlInput.value.trim();
  const file = fileInput.files[0];

  if (!url && !file) {
    alert("Please enter an image URL or choose a file");
    return;
  }

  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery-item");

  const img = document.createElement("img");
  img.alt = "Gallery Image";

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "X";
  removeBtn.classList.add("remove-btn");
  removeBtn.addEventListener("click", () => galleryItem.remove());

  galleryItem.appendChild(img);
  galleryItem.appendChild(removeBtn);
  gallery.appendChild(galleryItem);

  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  } else {
    img.src = url; 
  }

  imageUrlInput.value = "";
  fileInput.value = "";
}

addImageBtn.addEventListener("click", addImage);
