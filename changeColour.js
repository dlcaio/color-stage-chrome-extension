const stage = document
  .querySelector("#awsc-navigation__more-menu--list")
  .textContent.split("@")[1]
  .trim()[0];

const stageColor = {
  d: "#3ea832",
  s: "#A48900",
  p: "#7E0000",
};

document.querySelector("#awsc-nav-header").style.background = stageColor[stage];
document.querySelector("#console-nav-footer-inner").style.background =
  stageColor[stage];
