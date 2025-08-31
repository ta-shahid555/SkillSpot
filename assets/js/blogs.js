document.addEventListener('DOMContentLoaded', function() {

    // Blog search functionality
    const blogSearch = document.getElementById('blog-search');
    const blogCards = document.querySelectorAll('.blog-card');
    
    blogSearch.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        blogCards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const excerpt = card.querySelector('.card-text').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Category filter functionality
    const categoryLinks = document.querySelectorAll('.category-link');
    
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            categoryLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            if (category === 'all') {
                blogCards.forEach(card => {
                    card.style.display = 'block';
                });
            } else {
                blogCards.forEach(card => {
                    const cardCategory = card.querySelector('.category-badge').classList[1];
                    
                    if (cardCategory === category) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            }
        });
    });

    // Smooth scroll for pagination
    document.querySelectorAll('.page-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: document.querySelector('.blog-listing').offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });

    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput.value) {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
});