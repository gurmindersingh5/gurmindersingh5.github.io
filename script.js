document.addEventListener("DOMContentLoaded", function() {
    // Animation complete event
    const animationContainer = document.getElementById('animation-container');
    const mouse = document.getElementById('mouse');
    const viewResumeBtn = document.getElementById('view-resume-btn');

    mouse.addEventListener('animationend', function() {
        viewResumeBtn.click();
    });

    viewResumeBtn.addEventListener('click', function() {
        animationContainer.style.display = 'none';
        document.getElementById('loader').style.display = 'block';
        
        setTimeout(function() {
            document.getElementById('loader').style.display = 'none';
            document.getElementById('content').style.display = 'block';
        }, 1000); // 1000ms = 1 second
    });
});
