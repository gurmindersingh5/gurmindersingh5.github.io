document.addEventListener("DOMContentLoaded", function() {
    const mouse = document.getElementById('mouse');
    const viewResumeBtn = document.getElementById('view-resume-btn');

    mouse.addEventListener('animationend', function() {
        viewResumeBtn.click();
    });
});

function startLoading() {
    const animationContainer = document.getElementById('animation-container');
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    animationContainer.style.display = 'none';
    loader.style.display = 'block';

    setTimeout(function() {
        loader.style.display = 'none';
        content.style.display = 'block';
    }, 1000); // 1000ms = 1 second
}
