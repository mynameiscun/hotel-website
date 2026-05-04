// Chờ DOM load xong
$(document).ready(function () {

  // Bắt sự kiện submit form signup
  $("#signup-form").submit(function (e) {

    // Ngăn form reload trang
    e.preventDefault();

    // Lấy dữ liệu từ các input và trim khoảng trắng
    let name = $("#signup-name").val().trim();
    let email = $("#signup-email").val().trim();
    let username = $("#signup-username").val().trim();
    let password = $("#signup-password").val().trim();
    
 // ================= REGEX =================
    const usernameRegex = /^[a-zA-Z0-9]{5,20}$/;
    const passRegex = /^(?=.*[A-Z])(?=(?:.*\d){3,}).{6,}$/;
    const nameRegex = /^([A-ZÀ-Ỹ][a-zà-ỹ]*)(\s[A-ZÀ-Ỹ][a-zà-ỹ]*)*$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    // ================= VALIDATE =================

    // Name
    if (!nameRegex.test(name)) {
      alert("Họ tên phải từ 2 ký tự, chỉ gồm chữ cái và khoảng trắng");
      return;
    }

    // Email
    if (!emailRegex.test(email)) {
      alert("Email phải là Gmail hợp lệ (example@gmail.com)");
      return;
    }

    // Username
    if (!usernameRegex.test(username)) {
      alert("Username phải từ 5-20 ký tự, chỉ gồm chữ và số");
      return;
    }

    // Password
    if (!passRegex.test(password)) {
      alert("Mật khẩu phải ≥6 ký tự, có ít nhất 1 chữ hoa và 3 chữ số");
      return;
    }


    // Lấy danh sách users từ localStorage (nếu chưa có thì là mảng rỗng)
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Kiểm tra username đã tồn tại chưa
    let exist = users.find((user) => user.username === username);

    // Nếu đã tồn tại
    if (exist) {

      // Thông báo lỗi
      alert("Username đã tồn tại");

      return; // dừng xử lý
    }

    // Tạo object user mới
    let newUser = {
      name: name,         // tên người dùng
      email: email,       // email
      username: username, // username đăng nhập
      password: password, // mật khẩu
    };

    // Thêm user mới vào mảng users
    users.push(newUser);

    // Lưu lại vào localStorage (chuyển object → JSON)
    localStorage.setItem("users", JSON.stringify(users));

    // Hiển thị modal signup thành công
    $("#signupModal").css("display", "flex").hide().fadeIn();
  });

  // Nút chuyển sang trang login
  $("#goLogin").click(function () {

    // Redirect sang login.html
    window.location.href = "login.html";
  });

  // Nút X đóng modal
  $(".close-modal").click(function () {

    // Ẩn modal signup
    $("#signupModal").fadeOut();
  });

  // Bắt sự kiện click toàn window
  $(window).click(function (e) {

    // Nếu click vào nền của modal
    if ($(e.target).is("#signupModal")) {

      // Ẩn modal
      $("#signupModal").fadeOut();
    }
  });
});
