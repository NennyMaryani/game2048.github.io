// Memilih elemen tautan restart-button
const restartButton = document.querySelector(".restart-button");

// Memilih elemen audio untuk lagu
const lagu = document.getElementById("lagu");

// Menambahkan event listener ke tautan restart-button
restartButton.addEventListener("click", function(event) {
    event.preventDefault(); // Mencegah tautan melakukan navigasi

    // Memainkan lagu ketika tautan diklik
    lagu.play();
});