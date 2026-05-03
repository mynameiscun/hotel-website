$(document).ready(function () {
  $("#login-form").submit(function (e) {
    e.preventDefault();
    let username = $("#login-username").val().trim();
    let password = $("#login-password").val().trim();

    // lấy user
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // tìm user
    let user = users.find(
      (u) => u.username === username && u.password === password,
    );

    if (!user) {
      $("#errorModal").css("display", "flex").hide().fadeIn();
      return;
    }

    // lưu user login
    localStorage.setItem("loggedInUser", username);

    // hiện modal
    $("#loginModal").css("display", "flex").hide().fadeIn();
  });

  // nút về home
  $("#goHome").click(function () {
    window.location.href = "index.html";
  });

  // nút X đóng modal
  $(".close-modal").click(function () {
    $("#loginModal").fadeOut();
  });

  // click ngoài modal
  $(window).click(function (e) {
    if ($(e.target).is("#loginModal")) {
      $("#loginModal").fadeOut();
    }
  });
  $("#closeError,.close-error").click(function () {
    $("#errorModal").fadeOut();
  });
});
