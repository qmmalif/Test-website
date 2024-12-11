//Litterally ini buat contacts and other. haduh :)

function kirimKeWhatsApp(event) {
    event.preventDefault(); // Mencegah pengiriman formulir biasa

    var nomor = "+6285883305985"; // Ganti dengan nomor WhatsApp Anda
    var nama = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pesan = document.getElementById("message").value;

    // Format pesan yang akan dikirim ke WhatsApp
    var pesanFinal = `Hai, nama saya ${nama}\nAnda dapat menghubungi saya melalui email dibawah ini:\n${email}\n\nSaran saya untuk kedepannya:\n${pesan}`;

    var url = "https://wa.me/" + nomor + "?text=" + encodeURIComponent(pesanFinal);
    window.open(url, "_blank"); // Membuka di tab baru

    return false; // Menjaga agar form tidak mengirimkan data ke server
}

function checkEmail() {
    var emailInput = document.getElementById("email");
    var labelEmail = document.getElementById("labelEmail");
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Pola dasar untuk email

    if (regex.test(emailInput.value)) {
        emailInput.style.color = "gray"; // Warna teks di input abu saat valid
    } else {
        emailInput.style.color = "red"; // Warna teks di input merah saat tidak valid
    }
}