"use strict";

// Selecting Element
const personalEl = document.querySelector(".personal-section");
const emailEl = document.querySelector(".email-section");
const errorEl = document.querySelector(".error-alert");

const btnSubmit = document.querySelector(".btn--submit");

// Validate an Email
const validateEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

// Display email-section
emailEl.classList.remove("hidden");

// Handle Submit Button
btnSubmit.addEventListener("click", function () {
  const emailValue = document.getElementById("email").value.toLocaleLowerCase(); //👺chú ý dấu () sau property toLocal
  console.log(emailValue);
  // Check type of email
  const checkEmail = emailValue.match(validateEmail);
  console.log(typeof checkEmail);
  // Check condition
  if (checkEmail) {
    personalEl.classList.remove("hidden");
    emailEl.classList.add("hidden");
  } else {
    errorEl.style.color = "red";
    errorEl.innerHTML = "Nhập sai định dạng email, vui lòng nhập lại! 👹";
  }
});

// Ghi nhớ

/*
toLocaleLowerCase()
toLocaleLowerCase() được sử dụng khi bạn muốn chuyển tất cả các ký tự trong string về dạng chữ thường của địa phương.

Trong hầu hết các trường hợp, thì phương thức này với phương thức toLowerCase() kể trên sẽ 
trả về cùng một kết quả. Tuy nhiên với một số quốc gia, ví dụ như Thổ Nhĩ Kỳ, thì không tuân theo 
quy tắc Unicode thông thường, nên kết quả có thể khác nhau.

Cú pháp: string.toLocaleUpperCase(). Phương thức này không có tham số.
*/

// Phần tử để phạm vi di chuột ra vào
const jobInfoCard = document.querySelectorAll(".job-info .card");
const divInfo = document.querySelectorAll(".div-info");

console.log(jobInfoCard);
// Phần tử điều khiển nút bấm view more less more
const controlView = document.querySelectorAll(".control-view");
for (let i = 0; i < jobInfoCard.length; i++) {
  // When mouse move over
  jobInfoCard[i].addEventListener("mouseover", function () {
    // Display View More Button
    controlView[i].classList.remove("hidden");
  });

  // When mouse move out
  jobInfoCard[i].addEventListener("mouseout", function () {
    // Nếu phần tử controlView[i] có chứa value view-more, thì sẽ ẩn nút View More khi mouse out
    // Trường hợp còn lại(nếu không chứa value view-more) thì sẽ không ẩn nút (Cụ thể là Less More) khi mouse out
    if (controlView[i].classList.value.includes("view-more")) {
      // UnDisplay View More Button
      controlView[i].classList.add("hidden");
    }
  });

  // When click controlView[i]
  controlView[i].addEventListener("click", function () {
    if (controlView[i].classList.value.includes("view-more")) {
      // Nếu controlView[i] có chứa giá trị view-more thì khi click vào nút View More
      // phần nội dung div-info sẽ hiện lên
      divInfo[i].classList.remove("hidden");
      // Thay đổi nội dung của nút bấm
      controlView[i].innerHTML = "閉じる";
      // Xoá tiếp class view-more, để thực hiện trường hợp còn lại khi ấn vào nút Less More
      controlView[i].classList.remove("view-more");
    } else {
      // Lúc này khi click vào Less More, class view-more không còn tồn tại nữa

      // Phần nội dung sẽ ẩn đi
      divInfo[i].classList.add("hidden");
      // Thay đổi nội dung của nút bấm
      controlView[i].innerHTML = "もっと見る";
      // Add lại class view-more, để thực hiện lại từ đầu các lệnh
      controlView[i].classList.add("view-more");
    }
  });
}
