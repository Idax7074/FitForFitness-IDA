// Lav variablen "btn", der henviser til ".toggle-btn"
const btn = document.querySelector(".toggle-btn");

// Lav variablen "menu", der henviser til ".main-menu"
const menu = document.querySelector(".burger-menu");

// Lav funktionen "toggleMenu()" med følgende funktionalitet
function toggleMenu() {
  // toggle klassen "shown" på menu vha. classList.toggle
  menu.classList.toggle("shown");

  // lav variablen "menuShown", som siger, at menu-variablen indeholder klassen "shown" via classList.contains("")
  const menuShown = menu.classList.contains("shown");

  // spørg om "menuShown" i if-sætningen nedenfor (=> if (menuShown)), og udskift teksten
  if (menuShown) {
    console.log(menuShown);
  } else {
    console.log(menuShown);
  }
}

// Tilføj et klik-event til "btn", der sætter toggleMenu-funktionen i gang
btn.addEventListener("click", toggleMenu);

//Funktionen myFunction (som vi klikker på i HTML'en)
//Funktionen siger at når vi klikker på knappen vil klassen change blive sat på eller fjernet
function myFunction(x) {
  x.classList.toggle("change");
}
