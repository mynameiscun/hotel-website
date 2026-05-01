    
    if(!sessionStorage.getItem("demoStarted")){
    localStorage.clear();
    sessionStorage.setItem("demoStarted", "true");
    }

 //signup   
$(document).ready(function(){

let loggedUser = localStorage.getItem("loggedInUser");

// nếu đã login
if(loggedUser){

$("#auth-area").html(`
<span>Xin chào, ${loggedUser}</span>
<a href="#" id="logout-btn">Logout</a>
`);

}

// logout
$(document).on("click","#logout-btn",function(){

localStorage.removeItem("loggedInUser");

alert("Đăng xuất thành công");

location.reload();

});

});


$(document).ready(function(){

let loggedUser = localStorage.getItem("loggedInUser");

if(loggedUser){

$("#auth-area").html(`
<span style="color: white;">Xin chào, ${loggedUser}</span>
<a href="#" id="logoutBtn">Logout</a>
`);

}


// logout
$(document).on("click","#logoutBtn",function(){

localStorage.removeItem("loggedInUser");

location.reload();

});

});
//Linh-checkRegexSearchBar
$(document).ready(function(){
    const regex_library = {
        requiredRegex: /\S/
    };

    function checkRequired(idInput, idErr, message) {
        let val = $(idInput).val().trim();

        if (!regex_library.requiredRegex.test(val)) {
            $(idErr).text(message);
            return false;
        } else {
            $(idErr).text("");
            return true;
        }
    }

    function checkNgayDi() {
        let ngayDiVal = $("#checkin").val();

        if (!regex_library.requiredRegex.test(ngayDiVal)) {
            $("#errCheckin").text("Vui lòng chọn ngày đi");
            return false;
        }

        let ngayDi = new Date(ngayDiVal + "T00:00:00");

        let homNay = new Date();
        homNay.setHours(0, 0, 0, 0);

        let ngayToiThieu = new Date(homNay);
        ngayToiThieu.setDate(ngayToiThieu.getDate() + 1);

        if (ngayDi < ngayToiThieu) {
            $("#errCheckin").text("Ngày đi phải sau ngày hiện tại ít nhất 1 ngày");
            return false;
        }

        $("#errCheckin").text("");
        return true;
    }

    function checkNgayVe() {
        let ngayDiVal = $("#checkin").val();
        let ngayVeVal = $("#checkout").val();

        if (!regex_library.requiredRegex.test(ngayVeVal)) {
            $("#errCheckout").text("Vui lòng chọn ngày về");
            return false;
        }

        if (!regex_library.requiredRegex.test(ngayDiVal)) {
            $("#errCheckout").text("Vui lòng chọn ngày đi trước");
            return false;
        }

        let ngayDi = new Date(ngayDiVal + "T00:00:00");
        let ngayVe = new Date(ngayVeVal + "T00:00:00");

        if (ngayVe < ngayDi) {
            $("#errCheckout").text("Ngày về không được trước ngày đi");
            return false;
        }

        $("#errCheckout").text("");
        return true;
    }

$("#btnSearch").click(function () {
    let kq1 = checkNgayDi();
    let kq2 = checkNgayVe();
    let kq3 = checkRequired("#guests", "#errGuests", "Vui lòng chọn số khách");

    if (kq1 && kq2 && kq3) {
        let checkin = $("#checkin").val();
        let checkout = $("#checkout").val();
        let guests = $("#guests").val();

        window.location.href =
            "room-detail.html?checkin=" + checkin +
            "&checkout=" + checkout +
            "&guests=" + guests;
    }
});
});

 
