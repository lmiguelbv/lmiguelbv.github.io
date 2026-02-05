document.addEventListener('DOMContentLoaded', () => {
    const dropdownBtn = document.getElementById('cvDropdownBtn');
    const dropdownMenu = document.getElementById('cvDropdown');

    if (dropdownBtn && dropdownMenu) {
        // Toggle dropdown on click
        dropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent click from bubbling up
            dropdownMenu.classList.toggle('active');
            
            // Rotate arrow for effect
            const arrow = dropdownBtn.querySelector('svg');
            if (arrow) {
                arrow.style.transform = dropdownMenu.classList.contains('active') 
                    ? 'rotate(180deg)' 
                    : 'rotate(0deg)';
            }
        });

        // Close dropdown when clicking anywhere else on the page
        document.addEventListener('click', (e) => {
            if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.classList.remove('active');
                
                // Reset arrow
                const arrow = dropdownBtn.querySelector('svg');
                if (arrow) arrow.style.transform = 'rotate(0deg)';
            }
        });
    }
});