$(document).ready(function () {
  $("#darkModeToggle").click(function () {
    $("body").toggleClass("dark-mode");
  });
});

// togler
const navbarTogglerBtn = document.getElementById("navbarTogglerBtn");
const navbarCollapse = document.getElementById("navbarNav");

navbarTogglerBtn.addEventListener("click", () => {
  navbarCollapse.classList.toggle("show");
});

//  download CV

function downloadCV() {
  var cvPath = "cv/cv_ilham.pdf";

  var link = document.createElement("a");
  link.href = cvPath;
  link.download = "Ilham_Kusmayadi_CV.pdf";
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


// services
function flipCard(card) {
  card.classList.toggle("flipped");
}

// menutup kartu 
let openCard = null;

function flipCard(card) {
  card.classList.toggle("flipped");

  if (openCard && openCard !== card) {
    // Menutup kartu yang sebelumnya terbuka
    openCard.classList.remove("flipped");
  }

  // Menyimpan kartu yang baru saja dibuka
  openCard = card.classList.contains("flipped") ? card : null;
}


// menutup hamburger mneu
document.addEventListener('DOMContentLoaded', function () {
  var body = document.getElementById('body');
  var navbarTogglerBtn = document.getElementById('navbarTogglerBtn');
  var navbarNav = document.getElementById('navbarNav');

  // Fungsi untuk menutup menu jika diklik di luar area hamburger menu
  function closeMenu() {
    navbarTogglerBtn.classList.add('collapsed');
    navbarNav.classList.remove('show');
  }

  // Event listener untuk mendeteksi klik di luar area hamburger menu
  body.addEventListener('click', function (event) {
    var isClickInsideNavbar = navbarNav.contains(event.target) || navbarTogglerBtn.contains(event.target);
    if (!isClickInsideNavbar) {
      closeMenu();
    }
  });

  // Event listener untuk menutup menu ketika salah satu item di dalam menu diklik
  navbarNav.addEventListener('click', function () {
    closeMenu();
  });
});

