$(document).ready(function () {
  $("#courseSelect").select2();
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#section1 .left").classList.add("clicked");
  document.querySelector("#section2 .btn1").classList.add("clicked");
  addClickEvent("section1");
  addClickEvent("section2");
});

function addClickEvent(sectionId) {
  const section = document.getElementById(sectionId);
  const buttons = section.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttons.forEach((btn) => btn.classList.remove("clicked"));
      this.classList.add("clicked");
    });
  });
}

document.getElementById("content").className = "container";
