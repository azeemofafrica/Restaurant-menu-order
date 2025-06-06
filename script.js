    const toggleBtn = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('rightSidebar');

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });