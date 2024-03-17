// Get all the "Read More" buttons
const readMoreButtons = document.querySelectorAll('.read-more-btn');

// Attach click event listeners to each button
readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Find the corresponding article details element
        const articleDetails = button.nextElementSibling;

        // Toggle the visibility of the article details
        articleDetails.classList.toggle('hidden');

        // Update the button text
        if (articleDetails.classList.contains('hidden')) {
            button.textContent = 'Read More';
        } else {
            button.textContent = 'Read Less';
        }
    });
});

const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

darkModeToggle.addEventListener("change", function() {
    body.classList.toggle("dark-mode");
});

document.querySelector("#loginLink").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});
document.querySelector(".close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});


