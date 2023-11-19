"use strict";
let now = 1;
let next = 0;
const register_user = document.getElementById(".user-ipt-register");
const register_password = document.getElementById(".paswd-ipt-register");
const register_btn = document.querySelector(".register-btn");
const info_register = document.querySelector(".info-register");
const register = document.querySelector(".register");
const register_close = document.querySelector(".register-close");
const overlay = document.querySelector(".overlay");
const register_password_ipt = document.getElementById(".user-ipt-register");
const register_user_ipt = document.getElementById(".password-ipt-register");
// 轮播图箭头
document.querySelector(".prev").addEventListener("click", function () {
  if (now == 1) next = 4;
  else next = now - 1;
  document.querySelector(`.banner-img-${now}`).classList.add("hidden");
  document.querySelector(`.banner-img-${next}`).classList.remove("hidden");
  document.querySelector(`.pointer-${now}`).classList.remove(".pointer-active");
  document.querySelector(`.pointer-${next}`).classList.add(".pointer-active");
  now = next;
});
document.querySelector(".next").addEventListener("click", function () {
  if (now == 4) next = 1;
  else next = now + 1;
  document.querySelector(`.banner-img-${now}`).classList.add("hidden");
  document.querySelector(`.banner-img-${next}`).classList.remove("hidden");
  document.querySelector(`.pointer-${now}`).classList.remove(".pointer-active");
  document.querySelector(`.pointer-${next}`).classList.add(".pointer-active");
  now = next;
});
// 轮播图小点
document.querySelector(".pointer-1").addEventListener("mouseover", function () {
  document.querySelector(`.banner-img-${now}`).classList.add("hidden");
  document.querySelector(`.banner-img-1`).classList.remove("hidden");
  now = 1;
});
document.querySelector(".pointer-2").addEventListener("mouseover", function () {
  document.querySelector(`.banner-img-${now}`).classList.add("hidden");
  document.querySelector(`.banner-img-2`).classList.remove("hidden");
  now = 2;
});
document.querySelector(".pointer-3").addEventListener("mouseover", function () {
  document.querySelector(`.banner-img-${now}`).classList.add("hidden");
  document.querySelector(`.banner-img-3`).classList.remove("hidden");
  now = 3;
});
document.querySelector(".pointer-4").addEventListener("mouseover", function () {
  document.querySelector(`.banner-img-${now}`).classList.add("hidden");
  document.querySelector(`.banner-img-4`).classList.remove("hidden");
  now = 4;
});
document.querySelector(".info-login").addEventListener("click", function () {
  document.querySelector(".login").classList.remove("hidden");
  document.querySelector(".overlay").classList.remove("hidden");
});
info_register.addEventListener("click", function () {
  register.classList.remove("hidden");
  document.querySelector(".overlay").classList.remove("hidden");
});
// 登录判断
document.querySelector(".login-btn").addEventListener("click", function () {
  let user = document.getElementById("user-ipt").value;
  let paswd = document.getElementById("paswd-ipt").value;
  if (user === "suiman" && paswd === "123456") {
    document.querySelector(".login").classList.add("hidden");
    document.querySelector(".overlay").classList.add("hidden");
    document.querySelector(".login-error").classList.add("hidden");
    document.querySelector(".users").classList.remove("hidden");
    document.querySelector(".info-login").classList.add("hidden");
    alert("登录成功！");
  } else {
    document.querySelector(".login-error").classList.remove("hidden");
  }
});
document.querySelector(".login-close").addEventListener("click", function () {
  document.querySelector(".login").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
  document.querySelector(".login-error").classList.add("hidden");
});
register_close.addEventListener("click", function () {
  register.classList.add("hidden");
  overlay.classList.add("hidden");
});
register_btn.addEventListener("click", function () {
  document.querySelector(".register").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
});
// 注册

register_btn.addEventListener("click", function () {
  let usrname = document.getElementById("user-ipt-register").value;
  let pasword = document.getElementById("paswd-ipt-register").value;
  $.ajax({
    url: "http://127.0.0.1:3000/user/adduser/",
    data: {
      username: usrname,
      password: pasword,
    },
    type: "GET",
  });
});
