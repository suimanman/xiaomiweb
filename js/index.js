"use strict";
let username = "suiman";
let password = "123456";
let now = 1;
let next = 0;
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
