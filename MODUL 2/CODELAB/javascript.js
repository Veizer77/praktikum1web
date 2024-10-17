function calculateSum() {
    // Mengambil nilai input dari user
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    // Memastikan kedua input adalah angka
    if (!isNaN(num1) && !isNaN(num2)) {
        // Melakukan operasi penjumlahan
        var sum = num1 + num2;
        // Menampilkan hasilnya di elemen dengan id 'result'
        document.getElementById('result').textContent = sum;
    } else {
        // Jika input tidak valid, tampilkan pesan kesalahan
        document.getElementById('result').textContent = 'Input tidak valid!';
    }
}
