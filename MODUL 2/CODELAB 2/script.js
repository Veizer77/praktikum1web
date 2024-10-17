function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var successMessage = document.getElementById('successMessage');
    var errorMessage = document.getElementById('errorMessage');

    // Reset pesan sebelumnya
    successMessage.style.display = "none";
    errorMessage.style.display = "none";

    // Cek apakah semua input sudah diisi
    if (name === "" || email === "" || message === "") {
        errorMessage.style.display = "block";
    } else {
        successMessage.style.display = "block";
    }
}
