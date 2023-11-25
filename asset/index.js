$(document).ready(function () {
  // Fungsi untuk mengaktifkan/menonaktifkan Dark Mode
  $("#darkModeToggle").click(function () {
    $("body").toggleClass("dark-mode");
  });
});

// togler
 const navbarTogglerBtn = document.getElementById("navbarTogglerBtn");
 const navbarCollapse = document.getElementById("navbarNav");

 // Add event listener to the toggler button
 navbarTogglerBtn.addEventListener("click", () => {
   // Toggle the 'show' class on navbar-collapse
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

