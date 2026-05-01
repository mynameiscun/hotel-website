//du lieu
    const facilityData = {
    restaurant: {
        title: "Restaurant",
        details: [
            { img: "../IMAGE/restaurant1.png", desc: "The restaurant features a luxurious and elegant interior with warm lighting and modern furniture, creating a comfortable and relaxing dining environment for guests.", 
                                               service: "★★★★★ (5/5) - Professional and attentive staff provide excellent service to ensure a pleasant dining experience.", 
                                               atmosphere: "★★★★☆ (4/5) - Warm and sophisticated, perfect for family dinners or business meetings." },
            { img: "../IMAGE/restaurant2.png", desc: "A bright dining space with large glass windows allowing natural light to fill the room, creating a refreshing and pleasant dining atmosphere.", 
                                               service: "★★★★☆ (4/5)", 
                                               atmosphere: "★★★★★ (5/5)" },
            { img: "../IMAGE/restaurant3.png", desc: "At night, the restaurant becomes more charming with soft lighting, creating a cozy and romantic dining space.", 
                                               service: "★★★★★ (5/5)", 
                                               atmosphere: "★★★★★ (5/5)" }
        ]
    },
    spa: {
        title: "Spa",
        details: [
            { img: "../IMAGE/spa1.png", desc: "The steam room is designed with natural stone and modern lighting, offering a premium space for detoxification and improving overall wellness.", 
                                        service: "★★★★★ (5/5) - Professional therapists provide attentive and high-quality services, ensuring a soothing and revitalizing experience for every guest.", 
                                        atmosphere: "★★★★★ (5/5) - Calm, quiet, and intimate setting, ideal for stress relief and complete relaxation." },
            { img: "../IMAGE/spa2.png", desc: "Deep tissue hot stone massages performed by our professional therapists to rejuvenate your body.", 
                                        service: "★★★★★ (5/5) - Well-maintained facilities with consistent steam levels, providing a comfortable and beneficial experience for guests.", 
                                        atmosphere: "★★★★☆ (4/5) - Warm and tranquil environment, perfect for relaxing muscles and cleansing the body." },
            { img: "../IMAGE/spa3.png", desc: "The relaxation room provides a comfortable resting area with soft beds, wooden decor, and a minimalist design, ideal for unwinding after spa treatments.", 
                                        service: "★★★★☆ (4/5) - Clean and well-prepared space with essential amenities to support a pleasant resting experience.", 
                                        atmosphere: "★★★★★ (5/5) - Peaceful and cozy ambiance, offering guests a sense of comfort and relaxation." }
        ]
    },
    pool: {
        title: "Swimming Pool",
        details: [
            { img: "../IMAGE/pool1.png", desc: "Our infinity pool offers a breathtaking panoramic view of the city skyline from the top floor.", service: "★★★★☆ (4/5)", atmosphere: "★★★★★ (5/5)" },
            { img: "../IMAGE/pool2.png", desc: "High-end salt filtration system ensures the water is always crystal clear and safe for your skin.", service: "★★★★★ (5/5)", atmosphere: "★★★★★ (5/5)" },
            { img: "../IMAGE/pool3.png", desc: "Poolside bar serving cool cocktails and snacks while you enjoy the sun-loungers.", service: "★★★★★ (5/5)", atmosphere: "★★★★☆ (4/5)" }
        ]
    },
    gym: {
        title: "Fitness Gym",
        details: [
            { img: "../IMAGE/gym1.png", desc: "Equipped with state-of-the-art cardio machines and treadmills imported directly from Europe.", service: "★★★★★ (5/5)", atmosphere: "★★★★☆ (4/5)" },
            { img: "../IMAGE/gym2.png", desc: "A dedicated free-weights area with a full range of dumbbells for all fitness levels.", service: "★★★★★ (5/5)", atmosphere: "★★★★★ (5/5)" },
            { img: "../IMAGE/gym3.png", desc: "Peaceful Yoga and Pilates studio with professional mats and a calming atmosphere.", service: "★★★★☆ (4/5)", atmosphere: "★★★★★ (5/5)" }
        ]
    },
    coffee: {
        title: "Coffee",
        details: [
            { img: "../IMAGE/coffe1.png", desc: "Enjoy specialty hand-crafted coffee in a cozy space filled with artistic inspiration.", service: "★★★★★ (5/5)", atmosphere: "★★★★★ (5/5)" },
            { img: "../IMAGE/coffe2.png", desc: "Quiet workspace with high-speed Wi-Fi and power outlets, perfect for remote work.", service: "★★★★★ (5/5)", atmosphere: "★★★★☆ (4/5)" },
            { img: "../IMAGE/coffe3.png", desc: "Beautiful outdoor balcony area to enjoy the morning breeze and watch the busy streets.", service: "★★★★☆ (4/5)", atmosphere: "★★★★★ (5/5)" }
        ]
    }
}; 

    let currentType = "restaurant"; //dich vu//
    let currentIndex = 0; //anh//
    function openFacilities(type, index){
        let modal = document.getElementById("facilityModal");
        modal.style.display = "flex";
        currentType = type;
        currentIndex = index; // 🔥 quan trọng

    renderFacility();
    }
    
    function renderFacility(){
        let data = facilityData[currentType]; //lay du lieu//
        let item = data.details[currentIndex]; //lay anh + mo ta//
            document.getElementById("facilityTitle").innerText = data.title; //doi tieu de//
            document.getElementById("facilityMainImg").src = item.img; // doi anh lon//
            document.getElementById("facilityText").innerHTML = `
            <span class="label">Description:</span> ${item.desc} <br><br>
            <span class="label">Service:</span>
            <span class="stars">${item.service}</span> <br><br>
            <span class="label">Atmosphere:</span>
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
