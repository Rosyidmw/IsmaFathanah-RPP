let nama = prompt('Masukkan Nama');
if (nama != null) {
    document.getElementById("ucapan").innerHTML =
    "Halo " + nama + " , Selamat Belajar, yaa!"
}

// pop up
function togglePopup() {
    document.getElementById("popup-1").classList.toggle ("active")
}