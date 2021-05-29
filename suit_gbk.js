function getPilihanKomputer() {
    const Komputer = Math.random();
    if (Komputer < 0.33) return "gunting";
    if (Komputer > 0.33 && Komputer < 0.67) return "batu";
    return "kertas";
}

function getHasil(komputer, player) {
    if (player == komputer) return "SERI";
    if (player == "gunting") return (komputer == "kertas") ? "MENANG" : "KALAH";
    if (player == "batu") return (komputer == "gunting") ? "MENANG" : "KALAH";
    if (player == "kertas") return (komputer == "batu") ? "MENANG" : "KALAH";
}

function rollingImg() {
    const imgKomputer = document.querySelector(".img-komputer");
    const imgPlayer = document.querySelector(".img-player");
    const gambar = ["gunting", "batu", "kertas"];
    let i = 0;
    const waktuMulai = new Date().getTime();

    setInterval(function() {
        if (new Date().getTime() - waktuMulai > 1000) return;
        imgKomputer.setAttribute("src", gambar[i++] + ".png");
        if (i == gambar.length) i = 0;
        imgPlayer.setAttribute("src", gambar[i] + ".png");
    }, 100);
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function(pil) {
    pil.addEventListener("click", function() {
        const pilihanKomputer = getPilihanKomputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanKomputer, pilihanPlayer);

        rollingImg();

        setTimeout(function() {
            const imgKomputer = document.querySelector(".img-komputer");
            const imgPlayer = document.querySelector(".img-player");
            const info = document.querySelector(".info");
            imgKomputer.setAttribute("src", pilihanKomputer + ".png");
            imgPlayer.setAttribute("src", pilihanPlayer + ".png");
            info.innerHTML = hasil;
        }, 1000);
    })
})