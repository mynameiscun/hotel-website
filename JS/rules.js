window.addEventListener("DOMContentLoaded", () => {
  //Lấy giá trị từ URL (?section=...) hoặc từ dấu Hash (#...)
  const urlParams = new URLSearchParams(window.location.search);
  const sectionParam = urlParams.get("section");
  const hashParam = window.location.hash.substring(1); // Bỏ dấu #

  //Ưu tiên lấy tham số section, nếu không có thì lấy hash, cuối cùng là 'chung'
  const targetId = sectionParam || hashParam || "chung";

  //Ẩn tất cả và chỉ hiển thị mục tiêu
  const sections = document.querySelectorAll(".content-section");
  sections.forEach((s) => s.classList.remove("active"));

  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.classList.add("active");
  } else {
    document.getElementById("chung").classList.add("active");
  }
});
