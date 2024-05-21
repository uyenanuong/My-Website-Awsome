document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const icon = document.getElementById('toggle-icon');

    // Check if dark mode was previously enabled
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }

    toggleButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');

        // Toggle the icon
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    });
});



