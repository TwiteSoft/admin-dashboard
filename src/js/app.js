//=========== Menu option==============

function toggleMenu() {
  let toggleMenu = document.querySelector(".toggleMenu");

  let main = document.querySelector(".main");

  toggleMenu.classList.toggle("active");

  main.classList.toggle("active");
}


//============ dark mode option==============

const toggleThemeButton = document.getElementById("toggleThemeButton");
const htmlTag = document.getElementsByTagName("html")[0];

const isDarkMode = JSON.parse(localStorage.getItem("isDarkMode"));

if (isDarkMode) {
  htmlTag.classList.add("dark");
} else {
  htmlTag.classList.remove("dark");
}

toggleThemeButton.addEventListener("click", () => {
  htmlTag.classList.toggle("dark");

  const isDarkModeEnabled = htmlTag.classList.contains("dark");

  localStorage.setItem("isDarkMode", JSON.stringify(isDarkModeEnabled));
});

//================= User profile==============
// Function to toggle visibility of userdropdown
function usershow() {
  const userdropdown = document.getElementById("userdropdown");
  userdropdown.classList.toggle("hidden");
}



