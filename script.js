function changeImage(img) {
  document.getElementById("mainImage").src = img.src;
}

/* Size select */
document.querySelectorAll(".sizes button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".sizes button")
      .forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

/* Wishlist */
document.querySelector(".wishlist-btn")?.addEventListener("click", function () {
  this.classList.toggle("active");
  this.innerHTML = this.classList.contains("active") ? "❤ Added" : "❤ Wishlist";
});


/* WISHLIST */
document.querySelectorAll(".wishlist").forEach(heart => {
  heart.onclick = () => heart.classList.toggle("active");
});

  /* DARK MODE TOGGLE */
  const darkBtn = document.getElementById("darkToggle");
  darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    darkBtn.textContent =
      document.body.classList.contains("dark") ? "☀️" : "🌙";
  });

  /* CART COUNT */
  let cartCount = 0;
  const cart = document.querySelector(".cart");
  const cartCounter = document.getElementById("cartCount");

  cart.addEventListener("click", () => {
    cartCount++;
    cartCounter.textContent = cartCount;
  });

