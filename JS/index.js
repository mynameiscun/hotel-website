    
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