
 
$(document).ready(function(){

$("#signup-form").submit(function(e){

e.preventDefault();

let name = $("#signup-name").val().trim();
let email = $("#signup-email").val().trim();
let username = $("#signup-username").val().trim();
let password = $("#signup-password").val().trim();


// lấy users
let users = JSON.parse(localStorage.getItem("users")) || [];

// check username trùng
let exist = users.find(user => user.username === username);

if(exist){
alert("Username đã tồn tại");
return;
}


// tạo user
let newUser = {
name:name,
email:email,
username:username,
password:password
};

// push user
users.push(newUser);

// save
localStorage.setItem("users", JSON.stringify(users));


// HIỂN THỊ MODAL SAU KHI SUCCESS
$("#signupModal").css("display","flex").hide().fadeIn();

});


// nút login
$("#goLogin").click(function(){

window.location.href="login.html";

});


// nút X đóng modal
$(".close-modal").click(function(){

$("#signupModal").fadeOut();

});


// click ngoài modal đóng
$(window).click(function(e){

if($(e.target).is("#signupModal")){
$("#signupModal").fadeOut();
}

});

});

