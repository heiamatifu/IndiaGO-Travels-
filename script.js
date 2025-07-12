// Booking confirmation popup
function bookNow(carName) {
  alert(`Thank you for choosing the ${carName}! Our team will contact you shortly.`);
}

// WhatsApp booking redirect
function whatsappBook(carName) {
  const phone = "917505138270"; // WhatsApp number without +
  const message = `Hello, I am interested in booking the ${carName} from IndiaGo Travels. Please share the details.`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// Optional: Lightbox image preview
function openImage(imageSrc) {
  const lightbox = document.createElement("div");
  lightbox.style.position = "fixed";
  lightbox.style.top = 0;
  lightbox.style.left = 0;
  lightbox.style.width = "100vw";
  lightbox.style.height = "100vh";
  lightbox.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  lightbox.style.display = "flex";
  lightbox.style.alignItems = "center";
  lightbox.style.justifyContent = "center";
  lightbox.style.zIndex = "1000";

  const img = document.createElement("img");
  img.src = imageSrc;
  img.style.maxWidth = "90%";
  img.style.maxHeight = "90%";
  img.style.border = "5px solid white";
  img.style.borderRadius = "10px";

  lightbox.appendChild(img);
  document.body.appendChild(lightbox);

  lightbox.addEventListener("click", () => {
    document.body.removeChild(lightbox);
  });
}
