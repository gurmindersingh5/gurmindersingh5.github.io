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

    animationContainer.style.display = 'none';
    loader.style.display = 'block';

    setTimeout(function() {
        loader.style.display = 'none';
        // Replace 'your-github-repo-url' with the actual URL of your GitHub repo README.md
        window.location.href = 'https://gurmindersingh5.github.io/Gurminder_resume/';
    }, 1000); // 1000ms = 1 second
}
