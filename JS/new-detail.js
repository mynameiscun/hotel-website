 document.addEventListener("DOMContentLoaded", function () {
            const urlParams = new URLSearchParams(window.location.search);
            const articleId = urlParams.get('id');

            const titleElement = document.getElementById('detail-title');
            const dateElement = document.getElementById('detail-date');
            const contentElement = document.getElementById('detail-content');

            if (typeof newsData !== 'undefined' && articleId && newsData[articleId]) {
                const article = newsData[articleId];

                titleElement.innerText = article.title;
                dateElement.innerText = article.date;

                contentElement.innerHTML = article.content;

                document.title = article.title + " - Hotel Booking";
            } else {
                titleElement.innerText = "Lỗi 404: Không tìm thấy bài viết";
                dateElement.innerText = "";
                contentElement.innerHTML = "<p>Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa. Vui lòng quay lại <a href='news.html' style='color: #e0a61f; font-weight: bold;'>Trang Tin Tức</a>.</p>";
            }
        });
