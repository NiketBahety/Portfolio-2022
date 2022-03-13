let mousecursor = document.getElementsByClassName("cursor")[0];
let back = document.querySelectorAll(".back");
let photo = document.querySelectorAll(".home-right div")[0];
let social = document.querySelectorAll(".social-links a i");

document.addEventListener("mousemove", cursor);

function cursor(e) {
  mousecursor.style.top = e.pageY + "px";
  mousecursor.style.left = e.pageX + "px";
}

back.forEach((el) => {
  el.addEventListener("mouseleave", () => {
    mousecursor.classList.remove("grown-cursor");
  });
  el.addEventListener("mouseover", () => {
    mousecursor.classList.add("grown-cursor");
  });
});
social.forEach((el) => {
  el.addEventListener("mouseleave", () => {
    mousecursor.classList.remove("bw-cursor");
  });
  el.addEventListener("mouseover", () => {
    mousecursor.classList.add("bw-cursor");
  });
});

photo.addEventListener("mouseleave", () => {
  mousecursor.classList.remove("bw-cursor");
});
photo.addEventListener("mouseover", () => {
  mousecursor.classList.add("bw-cursor");
});
