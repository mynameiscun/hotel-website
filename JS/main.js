
document.addEventListener('DOMContentLoaded', function() {
    
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            const hiddenItems = document.querySelectorAll('.hidden-news');
            hiddenItems.forEach(function(item) {
                item.classList.remove('hidden-news');
            });
            this.style.display = 'none';
        });
    }

    const filterBtns = document.querySelectorAll('.filter-btn');
    const newsItems = document.querySelectorAll('.latest-news-item');

    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            filterBtns.forEach(function(b) {
                b.classList.remove('active');
            });
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            const hiddenItems = document.querySelectorAll('.hidden-news');
            hiddenItems.forEach(item => item.classList.remove('hidden-news'));

            newsItems.forEach(function(item) {
                const itemCategory = item.getAttribute('data-category');

                if (filterValue === 'all' || itemCategory === filterValue) {
                    item.style.display = 'flex'; 
                } else {
                    item.style.display = 'none'; 
                }
            });

            if (loadMoreBtn) {
                if (filterValue === 'all') {
                    loadMoreBtn.style.display = 'inline-block';
                } else {
                    loadMoreBtn.style.display = 'none';
                }
            }
        });
    });

});