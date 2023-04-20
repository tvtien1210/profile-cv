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
