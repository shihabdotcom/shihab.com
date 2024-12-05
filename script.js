// script.js
function searchArticles() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const articles = document.querySelectorAll('.article');

    articles.forEach((article) => {
        const title = article.querySelector('h2').textContent.toLowerCase();
        const content = article.querySelector('p').textContent.toLowerCase();

        if (title.includes(searchInput) || content.includes(searchInput)) {
            article.style.display = 'block';
            article.classList.add('fadeIn');
        } else {
            article.style.display = 'none';
        }
    });
}

// Wait for the page to load and trigger the fadeIn effect
window.addEventListener('DOMContentLoaded', () => {
    const articles = document.querySelectorAll('.article');
    articles.forEach((article, index) => {
        setTimeout(() => {
            article.style.opacity = '1';
            article.style.transform = 'translateY(0)';
        }, index * 200); // Stagger the animations
    });
});

// Smooth Scroll to Top Functionality (Optional)
document.querySelector("#searchInput").addEventListener("focus", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
            
