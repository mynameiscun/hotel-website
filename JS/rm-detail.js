
        const select = document.getElementById('room-select');
        const priceDisplay = document.getElementById('display-price');

        select.addEventListener('change', function () {
            const price = this.value.split("|")[1];
            priceDisplay.innerText = parseInt(price).toLocaleString('vi-VN');
        });
        window.addEventListener("DOMContentLoaded", function () {
            const price = select.value.split("|")[1];
            priceDisplay.innerText = parseInt(price).toLocaleString('vi-VN');
        });
        // validation for booking form
        document.addEventListener("DOMContentLoaded", function () {
            const nameInput = document.querySelector('input[type="text"]');
            const phoneInput = document.querySelector('input[type="tel"]');
            const checkInInput = document.querySelectorAll('input[type="date"]')[0];
            const checkOutInput = document.querySelectorAll('input[type="date"]')[1];

            function showError(input, message) {
                let errorSpan = input.nextElementSibling;
                if (!errorSpan || !errorSpan.classList.contains("error-msg")) {
                    errorSpan = document.createElement("span");
                    errorSpan.classList.add("error-msg");
                    input.insertAdjacentElement("afterend", errorSpan);
                }
                errorSpan.textContent = "* " + message;
            }

            function clearError(input) {
                let errorSpan = input.nextElementSibling;
                if (errorSpan && errorSpan.classList.contains("error-msg")) {
                    errorSpan.textContent = "";
                }
            }

            // Regex: tên phải viết hoa chữ cái đầu mỗi từ
            const nameRegex = /^([A-ZÀ-Ỹ][a-zà-ỹ]+)(\s[A-ZÀ-Ỹ][a-zà-ỹ]+)*$/;

            // Regex: số điện thoại 10 số, bắt đầu bằng 01-09
            const phoneRegex = /^(0[1-9])[0-9]{8}$/;

            nameInput.addEventListener("input", () => {
                if (!nameRegex.test(nameInput.value.trim())) {
                    showError(nameInput, "Tên phải viết hoa chữ cái đầu mỗi từ và không chứa số.");
                } else {
                    clearError(nameInput);
                }
            });

            phoneInput.addEventListener("input", () => {
                if (!phoneRegex.test(phoneInput.value.trim())) {
                    showError(phoneInput, "Số điện thoại phải đủ 10 số và bắt đầu từ 01-09.");
                } else {
                    clearError(phoneInput);
                }
            });
        });
        // booking flow

        $(document).ready(function () {

            // =======================
            // CHECK LOGIN HEADER
            // =======================

            let loggedUser = localStorage.getItem("loggedInUser");

            if (loggedUser) {

                $("#auth-area").html(`
<span style="color: white;">Xin chào, ${loggedUser}</span>
<a href="#" id="logoutBtn">Logout</a>
`);

            }


            // =======================
            // LOGOUT
            // =======================

            $(document).on("click", "#logoutBtn", function () {

                localStorage.removeItem("loggedInUser");
                location.reload();

            });


            // =======================
            // BOOKING FORM
            // =======================

            $("#booking-form").submit(function (e) {

                e.preventDefault();

                let loggedUser = localStorage.getItem("loggedInUser");

                // chưa login
                if (!loggedUser) {

                    $("#loginRequiredModal")
                        .css("display", "flex")
                        .hide()
                        .fadeIn();

                    return;

                }


                // validate

                let name = $("#booking-name").val().trim();
                let phone = $("#booking-phone").val().trim();
                let checkIn = $("#booking-checkin").val();
                let checkOut = $("#booking-checkout").val();

                let nameRegex = /^([A-ZÀ-Ỹ][a-zà-ỹ]+)(\s[A-ZÀ-Ỹ][a-zà-ỹ]+)*$/;
                let phoneRegex = /^(0[1-9])[0-9]{8}$/;

                if (!nameRegex.test(name)) {
                    showErrorModal("Tên phải viết hoa chữ cái đầu mỗi từ");
                    return;
                }

                if (!phoneRegex.test(phone)) {
                    showErrorModal("Số điện thoại phải đủ 10 số");
                    return;
                }

                if (checkIn >= checkOut) {
                    showErrorModal("Ngày check-out phải lớn hơn check-in");
                    return;
                }

                // tạo booking

                let roomData = $("#room-select").val().split("|");

                let booking = {
                    room: roomData[0],
                    price: roomData[1],
                    name: name,
                    phone: phone,
                    checkIn: checkIn,
                    checkOut: checkOut,
                    guests: $("#booking-guests").val(),
                    status: "Chưa thanh toán"
                };


                // lưu booking theo user

                let bookings = JSON.parse(localStorage.getItem("bookings")) || {};

                if (!bookings[loggedUser]) {
                    bookings[loggedUser] = [];
                }

                bookings[loggedUser].push(booking);

                localStorage.setItem("bookings", JSON.stringify(bookings));


                // show success modal

                $("#bookingSuccessModal")
                    .css("display", "flex")
                    .hide()
                    .fadeIn();

            });


            // =======================
            // LOGIN MODAL
            // =======================

            $("#goLogin").click(function () {

                window.location.href = "login.html";

            });

            $("#closeModal").click(function () {

                $("#loginRequiredModal").fadeOut();

            });


            // =======================
            // SUCCESS MODAL
            // =======================

            $("#goBooking").click(function () {

                window.location.href = "booking.html";

            });

            $("#closeSuccess").click(function () {

                $("#bookingSuccessModal").fadeOut();

            });
            function showErrorModal(message) {
                $("#errorMessage").text(message);

                $("#errorModal")
                    .css("display", "flex")
                    .hide()
                    .fadeIn();
            }
            // close error modal
            $("#closeError , #closeErrorBtn").click(function () {
                $("#errorModal").fadeOut();
            });
        });
