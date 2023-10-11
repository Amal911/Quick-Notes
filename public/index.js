const checkbox = document.getElementById("checkbox")
const body = document.querySelector('body');
const nav = document.querySelector('nav');

if (localStorage.getItem("theme") === "light") {
  body.classList.add('light');
  nav.setAttribute('data-bs-theme', 'light');
  document.getElementById("checkbox").checked = true;
  
}

checkbox.addEventListener("change", () => {
  // document.body.classList.toggle("light")



  if (body.classList.contains('light')) {
    body.classList.remove('light');
    nav.setAttribute('data-bs-theme', 'dark');
    localStorage.setItem("theme", "dark");
  
  } else {
    body.classList.add('light');
    nav.setAttribute('data-bs-theme', 'light');
    localStorage.setItem("theme", "light");
    
  }
})