function updateClock() {
    // Menggunakan opsi zona waktu Asia/Jakarta
    const options = {
      timeZone: 'Asia/Jakarta',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    const jakartaTime = new Date().toLocaleTimeString('en-GB', options);
    document.getElementById('clock').textContent = jakartaTime;
  }
  
  // Perbarui jam setiap 1 detik
  setInterval(updateClock, 1000);
  updateClock();
  
