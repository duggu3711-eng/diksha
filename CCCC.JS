// Show welcome popup
window.addEventListener("load", () => {
  setTimeout(() => {
    alert("Welcome to DD Café ☕ — Enjoy your visit!");
  }, 1000);
});

// Toggle menu categories (Coffee, Desserts, Meals)
function toggleSection(id) {
  const sections = ["coffee-section", "dessert-section", "meal-section"];
  sections.forEach(sec => {
    const el = document.getElementById(sec);
    if (sec === id) {
      el.classList.toggle("hidden");
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      el.classList.add("hidden");
    }
  });
}
