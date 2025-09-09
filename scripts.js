// scripts.js - Tab navigation for Majji Research Group site
document.addEventListener('DOMContentLoaded', function () {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabSections = document.querySelectorAll('.tab-section');

    function showTab(tab) {
        tabSections.forEach(section => {
            section.style.display = section.id === tab ? 'block' : 'none';
        });
        tabLinks.forEach(link => {
            if (link.dataset.tab === tab) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    tabLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const tab = this.dataset.tab;
            showTab(tab);
            // Update hash in URL
            window.location.hash = tab;
        });
    });

    // On page load, show tab from hash if present
    const hash = window.location.hash.replace('#', '');
    if (hash && document.getElementById(hash)) {
        showTab(hash);
    } else {
        showTab('home');
    }
});
