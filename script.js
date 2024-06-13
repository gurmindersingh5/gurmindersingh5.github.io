document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('content').style.display = 'flex';
    }, 3000); // 3000ms = 3 seconds
});
