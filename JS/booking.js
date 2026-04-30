$(document).ready(function(){

let user = localStorage.getItem("loggedInUser");

if(!user){
window.location.href="login.html";
return;
}

let bookings = JSON.parse(localStorage.getItem("bookings")) || {};
let userBookings = bookings[user] || [];

let selectedIndex = null;

let currentPage = 0;
let perPage = 3;



/* render list */

function renderList(){

$("#booking-list").html("");

let start = currentPage * perPage;
let end = start + perPage;

let pageItems = userBookings.slice(start,end);

pageItems.forEach((b,index)=>{

let realIndex = start + index;

let paidClass = b.status=="Đã thanh toán" ? "booking-paid" : "";

$("#booking-list").append(`

<div class="booking-card ${paidClass}" data-index="${realIndex}">

<h4>${b.room}</h4>
<p>${b.checkIn} → ${b.checkOut}</p>
<p>${b.status}</p>

</div>

`);

});

}

renderList();



/* pagination */

$("#next").click(function(){

if((currentPage+1)*perPage < userBookings.length){
currentPage++;
renderList();
}

});

$("#prev").click(function(){

if(currentPage>0){
currentPage--;
renderList();
}

});



/* click booking */

$(document).on("click",".booking-card",function(){

$(".booking-card").removeClass("selected");

$(this).addClass("selected");

selectedIndex = $(this).data("index");

let b = userBookings[selectedIndex];

let badge = b.status=="Đã thanh toán" 
? '<span class="badge-paid">Paid</span>' 
: '<span class="badge-pending">Pending</span>';

$("#booking-detail").html(`

<div class="detail-card">

<div class="detail-row">
<div class="detail-title">Room</div>
<div>${b.room}</div>
</div>

<div class="detail-row">
<div class="detail-title">Guest</div>
<div>${b.name}</div>
</div>

<div class="detail-row">
<div class="detail-title">Phone</div>
<div>${b.phone}</div>
</div>

<div class="detail-row">
<div class="detail-title">Check In</div>
<div>${b.checkIn}</div>
</div>

<div class="detail-row">
<div class="detail-title">Check Out</div>
<div>${b.checkOut}</div>
</div>

<div class="detail-row">
<div class="detail-title">Guests</div>
<div>${b.guests}</div>
</div>

<div class="price-box">

<div>Total Price</div>

<div class="price">
${parseInt(b.price).toLocaleString()} VNĐ
</div>

<br>

${badge}

</div>

</div>

`);

});



/* confirm payment */

$("#confirmPayment").click(function(){

if(selectedIndex==null) return;

if(userBookings[selectedIndex].status=="Đã thanh toán") return;

userBookings[selectedIndex].status="Đã thanh toán";

bookings[user]=userBookings;

localStorage.setItem("bookings",JSON.stringify(bookings));

renderList();

$(".booking-card[data-index='"+selectedIndex+"']").click();
// Hiển thị thông báo căn giữa
    $("#successModal").css("display", "block").fadeIn();

});



$(".close,#okBtn").click(function(){

$("#successModal").fadeOut();

});


});

