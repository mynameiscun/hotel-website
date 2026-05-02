
      const filterButtons = document.querySelectorAll(".filter-btn");
      const promoCards = document.querySelectorAll(".promo-card");

      filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
          filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
          });

          button.classList.add("active");

          const filterValue = button.getAttribute("data-filter");

          promoCards.forEach(function (card) {
            const cardCategory = card.getAttribute("data-category");

            if (filterValue === "all" || filterValue === cardCategory) {
              card.style.display = "block";
            } else {
              card.style.display = "none";
            }
          });
        });
      });
