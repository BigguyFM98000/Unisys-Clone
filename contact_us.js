const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
}

// Function to toggle the visibility of the form and hide the links
    function toggleForm(formId) {
        var form = document.getElementById(formId + '-form');
        var solutionContent = document.querySelector('.solutions-content');
        var productContent = document.querySelector('.product-content');
        var inquiryContent = document.querySelector('.inquiry-content');
        
        // Hide the links and show the form
        solutionContent.style.display = 'none';
        productContent.style.display = 'none';
        inquiryContent.style.display = 'none';
        
        form.style.display = 'block'; // Show the form
    }


// Function to close the form and show the links again
    function closeForm() {
        var form = document.getElementById('solutions-form');
        var solutionContent = document.querySelector('.solutions-content');
        var productContent = document.querySelector('.product-content');
        var inquiryContent = document.querySelector('.inquiry-content');
        
        // Hide the form and show the links again
        form.style.display = 'none';
        solutionContent.style.display = 'flex';
        productContent.style.display = 'flex';
        inquiryContent.style.display = 'flex';
    }