document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("mode-toggle");
  const body = document.body;

  // Check saved theme in localStorage
  let savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️ Light Mode";
  } else if (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    // If no saved theme but system prefers dark
    body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    // Default to light
    body.classList.remove("dark-mode");
    toggleBtn.textContent = "🌙 Dark Mode";
  }

  // Toggle on button click
  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const isDark = body.classList.contains("dark-mode");
    toggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});

