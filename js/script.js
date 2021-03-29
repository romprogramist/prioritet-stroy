let ul = document.getElementById("ul");

let navA = ul.getElementsByClassName("header__a");

for (let i = 0; i < navA.length; i++) {
  navA[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".header__menu"),
    menuItem = document.querySelectorAll(".header__li"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("header__menu_active1");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("header__menu_active1");
    });
  });
});

const input = document.body.querySelector(".telmask");


input.addEventListener("click", (evt) => {
  input.value = "+7 ";
  evt.preventDefault();
});

var pics = document.querySelectorAll(".products__wrapperImgOpacity");

pics.forEach((i) =>
  i.addEventListener("mouseover", (e) => {
    i.querySelector(".products__wrapperImgOpacity__opacity").classList.remove(
      "opacityBlock"
    );
    e.preventDefault();
  })
);

pics.forEach((i) =>
  i.addEventListener("mouseout", (e) => {
    i.querySelector(".products__wrapperImgOpacity__opacity").classList.add(
      "opacityBlock"
    );
    e.preventDefault();
  })
);

const hamburger = document.querySelector(".hamburger");
const body = document.body;
const liNav = document.querySelectorAll("li");

hamburger.addEventListener("click", (e) => {
  if (body.style.overflow == "hidden") {
    body.style.overflow = "auto";
  } else {
    body.style.overflow = "hidden";
  }
});
liNav.forEach((i) =>
  i.addEventListener("click", (e) => {
    body.style.overflow = "auto";
  })
);
