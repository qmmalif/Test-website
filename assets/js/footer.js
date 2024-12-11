        // Fungsi untuk menyertakan footer dari file eksternal
        function loadFooter() {
            fetch('footer.html') // Mengambil file footer
                .then(response => response.text())
                .then(html => {
                    var footer = document.createElement("div"); // Membuat div baru
                    footer.innerHTML = html; // Memasukkan konten footer
                    document.body.appendChild(footer); // Menyertakan footer di akhir body
                })
                .catch(error => console.error('Error loading footer:', error));
        }

        // Menyertakan footer setelah halaman dimuat
        document.addEventListener("DOMContentLoaded", loadFooter);