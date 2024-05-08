//=========== Menu option==============

function toggleMenu() {
  // let toggleMenu = document.querySelector(".toggleMenu");
  let navigation = document.querySelector('.navigation');
  let main = document.querySelector(".main");
 

  // toggleMenu.classList.toggle("active");
  navigation.classList.toggle('active1');
  main.classList.toggle("active");
}



// dark mode option

const htmlTag = document.getElementsByTagName("html")[0];
const toggle = document.querySelector(".toggle1");

const getMode = localStorage.getItem('mode');

if (getMode && getMode === "dark") {
  htmlTag.classList.add('dark');
  toggle.classList.add('active');
}

toggle.addEventListener('click', () => {
  htmlTag.classList.toggle('dark');

  if (!htmlTag.classList.contains('dark')) {
    return localStorage.setItem('mode', 'light')
  }
  localStorage.setItem('mode', 'dark')
});

toggle.addEventListener('click', () => toggle.classList.toggle('active'))


//================= User profile==============
// Function to toggle visibility of userdropdown
function usershow() {
  const userdropdown = document.getElementById("userdropdown");
  userdropdown.classList.toggle("hidden");
}



