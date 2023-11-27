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
