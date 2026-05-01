// Regex: tên phải viết hoa chữ cái đầu mỗi từ
const nameRegex = /^([A-ZÀ-Ỹ][a-zà-ỹ]+)(\s[A-ZÀ-Ỹ][a-zà-ỹ]+)*$/;

// Regex: số điện thoại 10 số, bắt đầu bằng 01-09
const phoneRegex = /^(0[1-9])[0-9]{8}$/;
// validation for booking form
document.addEventListener("DOMContentLoaded", function () {
    // đổi thành getID để kh bị phụ thuộc thứ tự
    const nameInput = document.getElementById('booking-name');
    const phoneInput = document.getElementById('booking-phone');
    const checkInInput = document.getElementById('booking-checkin');
    const checkOutInput = document.getElementById('booking-checkout');

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
    $("#loadMoreRoomsBtn").click(function () {

        $(".hidden-room").slice(0, 2).slideDown(300);

        $(".hidden-room").slice(0, 2).removeClass("hidden-room");

        if ($(".hidden-room").length === 0) {
            $("#loadMoreRoomsBtn").fadeOut();
        }

    });
    // Logic tính tổng tiền
    const roomSelect = document.getElementById('room-select');
    const guestsSelect =
        document.getElementById('booking-guests');
    const checkInInput = document.getElementById('booking-checkin');
    const checkOutInput = document.getElementById('booking-checkout');
    const totalPriceSpan = document.getElementById('total-price');
    const displayPriceSpan = document.getElementById('display-price');
    function updateGuestOptions() {

        const roomData =
            roomSelect.value.split("|");

        const capacity =
            Number(roomData[2]);

        guestsSelect.innerHTML = "";

        for (let i = 1; i <= capacity; i++) {

            guestsSelect.innerHTML += `
            <option value="${i}">
                ${i} người
            </option>
        `;

        }

    }
    function calculateTotal() {
        const checkIn = checkInInput.value;
        const checkOut = checkOutInput.value;

        const pricePerNight =
            Number(roomSelect.value.split("|")[1]);

        displayPriceSpan.innerText =
            pricePerNight.toLocaleString('vi-VN');

        // chưa chọn ngày
        if (!checkIn || !checkOut) {

            totalPriceSpan.innerText = "0";
            return;

        }

        const checkInDate = new Date(checkIn);
        const checkOutDate = new Date(checkOut);

        const diffTime = checkOutDate - checkInDate;

        const diffDays = Math.ceil(
            diffTime / (1000 * 60 * 60 * 24)
        );

        if (diffDays <= 0) {

            totalPriceSpan.innerText = "0";
            return;

        }

        const total = diffDays * pricePerNight;

        totalPriceSpan.innerText =
            total.toLocaleString('vi-VN');
        // lưu
        sessionStorage.setItem("bookingForm", JSON.stringify({
            room: roomSelect.value,
            checkIn: checkIn,
            checkOut: checkOut,
            total: total
        }));

    }

    // Lắng nghe sự kiện thay đổi trên các ô nhập liệu
    roomSelect.addEventListener('change', function () {
        calculateTotal();
        updateGuestOptions();
    });
    checkInInput.addEventListener('change', calculateTotal);
    checkOutInput.addEventListener('change', calculateTotal);

    // Ràng buộc ngày: Không cho phép chọn ngày quá khứ và ngày trả phòng phải sau ngày nhận
    // sửa tình trạng lệch múi giờ
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const minDate = `${yyyy}-${mm}-${dd}`;
    checkInInput.setAttribute('min', minDate)

    checkInInput.addEventListener('input', function () {
        checkOutInput.setAttribute('min', this.value);
    });
    const savedForm =
        JSON.parse(sessionStorage.getItem("bookingForm"));

    if (savedForm) {

        roomSelect.value = savedForm.room;
        checkInInput.value = savedForm.checkIn;
        checkOutInput.value = savedForm.checkOut;

    }
    calculateTotal();
    updateGuestOptions();
});

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
    const pricePerNight = Number(roomData[1]);
    const diffDays = Math.ceil(
        (new Date(checkOut) - new Date(checkIn))
        / (1000 * 60 * 60 * 24)
    );
    const totalPrice = diffDays * pricePerNight;

    let booking = {
        room: roomData[0],
        price: Number(roomData[1]),
        totalPrice: Number(totalPrice),
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

$(document).on("click", "#goLogin", function () {

    window.location.href = "login.html";

});

$(document).on("click", "#closeModal", function () {

    $("#loginRequiredModal").fadeOut();

});


// =======================
// SUCCESS MODAL
// =======================

$(document).on("click", "#goBooking", function () {

    window.location.href = "booking.html";

});

$(document).on("click", "#closeSuccess", function () {

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
