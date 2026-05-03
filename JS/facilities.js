//du lieu
const facilityData = {
  restaurant: {
    title: "Nhà hàng",
    details: [
      {
        img: "../IMAGE/restaurant1.png",
        style:
          "Sang trọng và nghệ thuật với điểm nhấn là trần nhà bọc vải lụa xếp lớp độc đáo.",
        amenity:
          "Nội thất hiện đại, ghế bọc đệm êm ái cùng hệ thống cây xanh trang trí tinh tế.",
        service: "Đội ngũ nhân viên chuyên nghiệp, phục vụ tận tâm và chu đáo.",
        atmosphere:
          "Ấm cúng và lịch sự, lý tưởng cho các bữa tối gia đình hoặc tiếp khách.",
      },
      {
        img: "../IMAGE/restaurant2.png",
        style: "Thiết kế không gian mở hiện đại, gần gũi với thiên nhiên.",
        amenity:
          "Ngập tràn ánh sáng tự nhiên nhờ cửa kính lớn, không gian rộng rãi với nhiều cây xanh.",
        service:
          "Phục vụ nhanh nhẹn, thân thiện, mang lại cảm giác thoải mái cho thực khách.",
        atmosphere:
          "Tươi mới và thoáng đãng, phù hợp cho những buổi họp mặt bạn bè.",
      },
      {
        img: "../IMAGE/restaurant3.png",
        style:
          "Quầy bar mang hơi hướng cổ điển, sử dụng tông màu gỗ tối sang trọng.",
        amenity:
          "Kệ rượu đồ sộ kết hợp cùng hệ thống đèn thả trần tạo hiệu ứng thị giác ấn tượng.",
        service:
          "Tinh tế và am hiểu, nhân viên có khả năng tư vấn chuyên sâu về đồ uống.",
        atmosphere:
          "Trầm lắng và lãng mạn, hoàn hảo cho những buổi hẹn hò về đêm..",
      },
    ],
  },
  spa: {
    title: "Spa",
    details: [
      {
        img: "../IMAGE/spa1.png",
        style:
          "Hiện đại và cao cấp với sự kết hợp giữa đá tự nhiên và ánh sáng âm tường nghệ thuật.",
        amenity:
          "Giường massage tiêu chuẩn quốc tế cùng khu vực bày trí nến thơm và thảo mộc thư giãn.",
        service:
          "Liệu trình trị liệu chuyên sâu giúp hồi phục cơ thể dưới bàn tay chuyên gia.",
        atmosphere:
          "Ấm cúng, riêng tư với tông vàng chủ đạo mang lại cảm giác bình yên tuyệt đối.",
      },
      {
        img: "../IMAGE/spa2.png",
        style:
          "Kiến trúc phòng xông hơi tối giản, sử dụng đá ốp cao cấp tạo vẻ sang trọng.",
        amenity:
          "Hệ thống xông hơi đá nóng hiện đại, giúp đào thải độc tố và cải thiện lưu thông khí huyết.",
        service:
          "Phục vụ chu đáo với khăn tắm sạch sẽ và nước thảo mộc chuẩn bị sẵn.",
        atmosphere:
          "Yên tĩnh và thư thái, là không gian lý tưởng để thanh lọc cơ thể sau ngày dài.",
      },
      {
        img: "../IMAGE/spa3.png",
        style:
          "Phòng nghỉ dưỡng mộc mạc với vách gỗ và các họa tiết trang trí thủ công tinh xảo.",
        amenity:
          "Trang bị giường đôi êm ái, đèn ngủ dịu nhẹ và đầy đủ các tiện ích nghỉ ngơi.",
        service:
          "Dịch vụ chăm sóc tận nơi, đảm bảo không gian nghỉ ngơi yên tĩnh nhất.",
        atmosphere:
          "Nhẹ nhàng và tinh tế, mang lại giấc ngủ ngon và sự thư giãn tối đa.",
      },
    ],
  },
  pool: {
    title: "Hồ bơi",
    details: [
      {
        img: "../IMAGE/pool1.png",
        style:
          "Thiết kế hồ bơi vô cực (infinity pool) mang đậm phong cách nghỉ dưỡng nhiệt đới.",
        amenity:
          "Hồ bơi tràn bờ sát vách núi, bao quanh bởi rừng cây và các căn bungalow gỗ truyền thống.",
        service:
          "Cung cấp khăn tắm và đồ uống tận nơi, có nhân viên cứu hộ túc trực đảm bảo an toàn.",
        atmosphere:
          "Thanh bình và hòa mình vào thiên nhiên với tầm nhìn vô tận ra những dãy núi hùng vĩ.",
      },
      {
        img: "../IMAGE/pool2.png",
        style:
          "Hồ bơi tầng thượng hiện đại với kiến trúc tối giản và sang trọng.",
        amenity:
          "Trang bị dãy ghế dài cao cấp, hệ thống đèn led đổi màu và khu vực ngồi thư giãn ngoài trời.",
        service:
          "Phục vụ cocktail và đồ ăn nhẹ tại hồ bơi, nước được xử lý bằng công nghệ lọc muối khoáng.",
        atmosphere:
          "Lộng lẫy và sôi động, đặc biệt lãng mạn vào thời điểm hoàng hôn với view toàn cảnh thành phố.",
      },
      {
        img: "../IMAGE/pool3.png",
        style:
          "Hồ bơi ngoài trời với thiết kế uốn lượn mềm mại, hài hòa với cảnh quan sân vườn.",
        amenity:
          "Hệ thống vòi phun nước nghệ thuật, khu vực bàn ăn ngoài trời và tiểu cảnh cây xanh bao quanh.",
        service:
          "Dịch vụ tổ chức tiệc pool party và buffet ngoài trời chuyên nghiệp theo yêu cầu của khách hàng.",
        atmosphere:
          "Thoáng đãng và mát mẻ, không gian lý tưởng cho các hoạt động vui chơi giải trí của gia đình.",
      },
    ],
  },
  gym: {
    title: "Fitness Gym",
    details: [
      {
        img: "../IMAGE/gym1.png",
        style:
          "Thiết kế công nghiệp hiện đại với trần cao, hệ thống đèn led lục giác và sàn gỗ sang trọng.",
        amenity:
          "Khu vực tập luyện đa năng hai tầng, trang bị đầy đủ giàn tạ, máy khối và gương lớn toàn thân.",
        service:
          "Có huấn luyện viên hướng dẫn kỹ thuật cơ bản và hỗ trợ điều chỉnh tư thế tập luyện an toàn.",
        atmosphere:
          "Năng động và tràn đầy cảm hứng với view cửa kính lớn nhìn ra không gian xanh bên ngoài.",
      },
      {
        img: "../IMAGE/gym2.png",
        style:
          "Không gian tập luyện chuyên nghiệp, tối giản với sự kết hợp giữa tông màu xám và ánh sáng dịu.",
        amenity:
          "Trang bị đầy đủ các dòng máy tập cơ chân, cơ ngực và khu vực cardio với máy đạp xe hiện đại.",
        service:
          "Cung cấp nước uống miễn phí và khăn tập sạch sẽ cho hội viên ngay tại sảnh tập.",
        atmosphere:
          "Tập trung và hiệu quả, phù hợp cho những ai muốn có không gian rèn luyện sức khỏe bền bỉ.",
      },
      {
        img: "../IMAGE/gym3.png",
        style:
          "Kiến trúc tương lai với những đường cong mềm mại và hệ thống tường gạch thông gió sáng tạo.",
        amenity:
          "Khu vực Cardio riêng biệt với máy chạy bộ đời mới nhất và không gian tập Yoga/Cycling rộng rãi.",
        service:
          "Hệ thống quản lý thông minh, cho phép theo dõi chỉ số sức khỏe và lịch tập qua ứng dụng.",
        atmosphere:
          "Thoáng đãng, tinh tế và cực kỳ sạch sẽ, mang lại cảm giác thư thái dù đang tập cường độ cao.",
      },
    ],
  },
  coffee: {
    title: "Coffee",
    details: [
      {
        img: "../IMAGE/coffe1.png",
        style:
          "Kiến trúc tối giản (Minimalism) kết hợp vườn treo xanh mát và các vòm cong tinh tế.",
        amenity:
          "Khu vực ngồi chờ hình bán nguyệt sang trọng, trang bị bàn nhỏ tiện lợi và ghế đôn gỗ độc đáo.",
        service:
          "Phục vụ các dòng cà phê đặc sản (Specialty Coffee) và bánh ngọt thủ công làm mới mỗi ngày.",
        atmosphere:
          "Thoáng đãng, tinh tế và ngập tràn cảm hứng nghệ thuật, lý tưởng để gặp gỡ bạn bè.",
      },
      {
        img: "../IMAGE/coffe2.png",
        style:
          "Phong cách đương đại với tông màu đỏ đất ấm cúng, điểm nhấn là hệ thống đèn lồng giấy độc đáo.",
        amenity:
          "Bố trí bàn gỗ tròn và ghế tựa cao cấp quanh khu vực tiểu cảnh cây xanh giữa trung tâm sảnh.",
        service:
          "Dịch vụ Order-to-Table nhanh chóng, nhân viên thân thiện và am hiểu về các loại hạt cà phê.",
        atmosphere:
          "Ấm áp, gần gũi và đầy sáng tạo, là không gian tuyệt vời để làm việc hoặc đọc sách.",
      },
      {
        img: "../IMAGE/coffe3.png",
        style:
          "Thiết kế quầy bar uốn lượn nghệ thuật bằng đá marble, kết hợp mảng tường điêu khắc 3D ấn tượng.",
        amenity:
          "Hệ thống máy pha cà phê đời mới, quầy trưng bày bánh ngọt bắt mắt và khu vực ngồi view cửa sổ.",
        service:
          "Kỹ thuật pha chế điêu luyện từ các barista chuyên nghiệp, phục vụ cả đồ uống nóng và lạnh.",
        atmosphere:
          "Sang trọng, năng động và tràn đầy ánh sáng tự nhiên, phù hợp cho những ai yêu thích sự hiện đại.",
      },
    ],
  },
};

let currentType = "restaurant"; //dich vu//
let currentIndex = 0; //anh//
function openFacilities(type, index) {
  let modal = document.getElementById("facilityModal");
  modal.style.display = "flex";
  currentType = type;
  currentIndex = index; // 🔥 quan trọng

  renderFacility();
}

function renderFacility() {
  let data = facilityData[currentType]; //lay du lieu//
  let item = data.details[currentIndex]; //lay anh + mo ta//
  document.getElementById("facilityTitle").innerText = data.title; //doi tieu de//
  document.getElementById("facilityMainImg").src = item.img; // doi anh lon//
  document.getElementById("facilityText").innerHTML = `
            <span class="label">Phong cách:</span> ${item.style} <br><br>
            <span class="label">Tiện nghi:</span> ${item.amenity} <br><br>
            <span class="label">Dịch vụ:</span> ${item.service} <br><br>
            <span class="label">Bầu không khí:</span> ${item.atmosphere}`; //doi mo ta + noi dung//
  updateThumbs(); //anh cu the//
}
function updateThumbs() {
  //xoa anh cu//
  let thumbs = document.querySelector(".thumbs");
  thumbs.innerHTML = "";
  facilityData[currentType].details.forEach((item, index) => {
    thumbs.innerHTML += `
            <img src="${item.img}" onclick="changeImg(${index})">`;
  });
}
function changeImg(index) {
  //click//
  currentIndex = index;
  renderFacility();
}
function closeFacilities() {
  //dong//
  document.getElementById("facilityModal").style.display = "none";
}
