    //du lieu
    const facilityData = {
    restaurant: {
        title: "Nhà hàng",
        details: [
            { img: "../IMAGE/restaurant1.png", desc: "Không gian tinh tế, đẳng cấp, nâng tầm trải nghiệm ẩm thực.", 
                                               service: "★★★★★ (5/5) - Phục vụ chuyên nghiệp, tận tâm", 
                                               atmosphere: "★★★★☆ (4/5) - Ấm áp, sang trọng, lý tưởng cho bữa tối gia đình hoặc gặp gỡ đối tác." },
            { img: "../IMAGE/restaurant2.png", desc: "Không gian sáng thoáng với cửa kính lớn, ánh sáng tự nhiên tràn ngập, mang lại cảm giác tươi mới và dễ chịu.", 
                                               service: "★★★★☆ (4/5) - Phục vụ tận tình, chuyên nghiệp.", 
                                               atmosphere: "★★★★★ (5/5) - Sang trọng, thư thái, lý tưởng cho những buổi gặp gỡ và trải nghiệm ẩm thực tinh tế." },
            { img: "../IMAGE/restaurant3.png", desc: "Khi màn đêm buông xuống, ánh sáng dịu nhẹ tạo nên không gian ấm cúng, lãng mạn.", 
                                               service: "★★★★★ (5/5) - Phục vụ chuyên nghiệp, tận tâm.", 
                                               atmosphere: "★★★★★ (5/5) - Sang trọng, gần gũi, lý tưởng cho những buổi hẹn hò hay tiệc tối thân mật." }
        ]
    },
    spa: {
        title: "Spa",
        details: [
            { img: "../IMAGE/spa1.png", desc: "Phòng massage với ánh sáng vàng dịu, hương thơm nhẹ nhàng, mang lại cảm giác thư giãn tuyệt đối.", 
                                        service: "★★★★★ (5/5) - Chăm sóc tận tình, chuyên nghiệp.", 
                                        atmosphere: "★★★★★ (5/5) - Yên bình, sang trọng, lý tưởng để tái tạo năng lượng." },
            { img: "../IMAGE/spa2.png", desc: "Không gian sauna hiện đại, ánh sáng ấm áp, sạch sẽ và tinh tế.", 
                                        service: "★★★★★ (5/5) - Tiện nghi cao cấp, phục vụ chu đáo.", 
                                        atmosphere: "★★★★☆ (4/5) - Thư giãn, sang trọng, giúp cân bằng cơ thể và tinh thần." },
            { img: "../IMAGE/spa3.png", desc: "Phòng nghỉ ấm cúng với thiết kế tự nhiên, ánh sáng nhẹ nhàng, mang lại sự thoải mái.", 
                                        service: "★★★★☆ (4/5) - Bố trí tinh tế, tiện nghi đầy đủ.", 
                                        atmosphere: "★★★★★ (5/5) - Thân thiện, sang trọng, lý tưởng cho giây phút nghỉ ngơi sau liệu trình." }
        ]
    },
    pool: {
        title: "Hồ bơi",
        details: [
            { img: "../IMAGE/pool1.png", desc: "Hồ bơi vô cực bên biệt thự mái lá, hướng ra thung lũng xanh mát, hòa mình cùng thiên nhiên.", 
                                         service: "★★★★☆ (4/5) - Tiện nghi cao cấp, phục vụ chu đáo.", 
                                         atmosphere: "★★★★★ (5/5) - Thư giãn, sang trọng, lý tưởng cho kỳ nghỉ nhiệt đới." },
            { img: "../IMAGE/pool2.png", desc: "Hồ bơi vô cực cạnh biệt thự hiện đại, ngắm hoàng hôn rực rỡ và toàn cảnh thành phố.", 
                                         service: "★★★★★ (5/5) - Đầy đủ tiện ích, phục vụ tận tâm.", 
                                         atmosphere: "★★★★★ (5/5) - Sang trọng, tinh tế, hoàn hảo cho những buổi thư giãn phong cách đô thị." },
            { img: "../IMAGE/pool3.png", desc: "Hồ bơi tự do giữa rừng cây, đá tự nhiên và thác nước nhỏ tạo nên khung cảnh gần gũi.", 
                                         service: "★★★★★ (5/5) - Bố trí hài hòa, tiện nghi thoải mái.", 
                                         atmosphere: "★★★★☆ (4/5) - Yên bình, thư thái, lý tưởng để hòa mình vào thiên nhiên." }
        ]
    },
    gym: {
        title: "Phòng gym",
        details: [
            { img: "../IMAGE/gym1.png", desc: "Không gian rộng rãi, sàn gỗ sang trọng, cửa kính lớn ngập ánh sáng tự nhiên, thiết bị đa dạng.", 
                                        service: "★★★★★ (5/5) - Hỗ trợ chuyên nghiệp, tận tâm.", 
                                        atmosphere: "★★★★☆ (4/5) - Năng động, thoải mái, truyền cảm hứng tập luyện." },
            { img: "../IMAGE/gym2.png", desc: "Phòng tập với thiết bị đa dạng, ánh sáng ấm áp, mural đầy màu sắc tạo điểm nhấn.", 
                                        service: "★★★★★ (5/5) -  Tiện nghi đầy đủ, phục vụ chu đáo.", 
                                        atmosphere: "★★★★★ (5/5) - Trẻ trung, năng lượng, lý tưởng cho rèn luyện thể lực." },
            { img: "../IMAGE/gym3.png", desc: "Thiết kế tinh gọn, ánh sáng cong mềm mại, không gian mở với máy chạy bộ và xe đạp.", 
                                        service: "★★★★☆ (4/5) - Bố trí khoa học, tiện nghi hiện đại.", 
                                        atmosphere: "★★★★★ (5/5) - Thanh thoát, sang trọng, mang lại trải nghiệm tập luyện thư thái." }
        ]
    },
    coffee: {
        title: "Coffee",
        details: [
            { img: "../IMAGE/coffe1.png", desc: "Không gian cao rộng với cửa sổ vòm lớn, ánh sáng tự nhiên chan hòa, điểm nhấn mảng xanh thẳng đứng.", 
                                          service: "★★★★★ (5/5) - Phục vụ thân thiện, chuyên nghiệp.", 
                                          atmosphere: "★★★★★ (5/5) - Tươi mới, thoải mái, lý tưởng cho trò chuyện nhẹ nhàng." },
            { img: "../IMAGE/coffe2.png", desc: "Thiết kế hiện đại với tông đỏ – be, cây xanh trung tâm, ánh sáng tròn mềm mại tạo sự gần gũi.", 
                                          service: "★★★★★ (5/5) - Tận tâm, chu đáo.", 
                                          atmosphere: "★★★★☆ (4/5) - Ấm áp, tinh tế, thích hợp cho gặp gỡ bạn bè và hẹn hò." },
            { img: "../IMAGE/coffe3.png", desc: "Quầy bar nhỏ gọn, đường nét uốn lượn sang trọng, ánh sáng vàng ấm áp, cửa sổ vòm thoáng sáng.", 
                                          service: "★★★★☆ (4/5) - Chuyên nghiệp, nhanh chóng.", 
                                          atmosphere: "★★★★★ (5/5) - Thân mật, sang trọng, lý tưởng cho thưởng thức cà phê chất lượng." }
        ]
    }
}; 

    let currentType = "restaurant"; //dich vu//
    let currentIndex = 0; //anh//
    function openFacilities(type){
        let modal = document.getElementById("facilityModal");
        modal.style.display = "flex";
        currentType = type;
        currentIndex = 0;
        renderFacility();
    }
    
    function renderFacility(){
        let data = facilityData[currentType]; //lay du lieu//
        let item = data.details[currentIndex]; //lay anh + mo ta//
            document.getElementById("facilityTitle").innerText = data.title; //doi tieu de//
            document.getElementById("facilityMainImg").src = item.img; // doi anh lon//
            document.getElementById("facilityText").innerHTML = `
            <span class="label">Mô tả:</span> ${item.desc} <br><br>
            <span class="label">Dịch vụ:</span>
            <span class="stars">${item.service}</span> <br><br>
            <span class="label">Không khí:</span>
            <span class="stars">${item.atmosphere}</span>`; //doi mo ta + noi dung//
            updateThumbs(); //anh cu the//
        }
    function updateThumbs(){ //xoa anh cu//
        let thumbs = document.querySelector(".thumbs");
        thumbs.innerHTML = "";
        facilityData[currentType].details.forEach((item, index)=>{
            thumbs.innerHTML += `
            <img src="${item.img}" onclick="changeImg(${index})">`;
        });
    }
    function changeImg(index){ //click//
        currentIndex = index;
        renderFacility();
    }
    function closeFacilities(){ //dong//
        document.getElementById("facilityModal").style.display="none";
    }