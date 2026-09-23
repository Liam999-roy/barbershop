

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".navbar button");
    const sidenav = document.getElementById("sidenav");

    // 4. Read More popup
    const readMoreBtn = document.getElementById("readMoreBtn");
    readMoreBtn.addEventListener("click", function (e) {
        e.preventDefault();
        alert(
            "Welcome to Hair Studio!\n\n" +
            "We offer premium haircuts, styling, and grooming.\n\n" +
            "📍 #30MINE AREA, KABWE City\n" +
            "📞  CALL 0779943209\n" +
            "🕐 Mon-Fri: 9am - 9pm\n" +
            "🕐 Sat-Sun: 8am - 11pm"
        );
    });

    // 5. Smooth scroll for all # links (Find Out + nav links)
    document.querySelectorAll("a[href^='#']").forEach(function (link) {
        link.addEventListener("click", function (e) {
            const target = link.getAttribute("href");
            if (target === "#") return;

            const section = document.querySelector(target);
            if (section) {
                e.preventDefault();
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});


// ============================================
// 1. MENU TOGGLE (open/close the side nav)
// ============================================

let menuBtn = document.querySelector(".navbar button");
let sidenav = document.getElementById("sidenav");

// Start hidden off screen
sidenav.style.right = "-250px";

menuBtn.onclick = function() {
    // Check if menu is hidden or visible, then toggle
    if (sidenav.style.right === "-250px") {
        sidenav.style.right = "0px";   // slide IN
    } else {
        sidenav.style.right = "-250px"; // slide OUT
    }
}

// Close the menu when any nav link is clicked
let navLinks = document.querySelectorAll("#sidenav nav ul li a");
navLinks.forEach(function(link) {
    link.onclick = function() {
        sidenav.style.right = "-250px";
    }
});




