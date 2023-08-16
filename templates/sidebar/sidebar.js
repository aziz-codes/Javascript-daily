const menuIcon = document.getElementById("hamburger-menu");
const sidebar = document.querySelector(".sidebar");
const mainSection = document.querySelector(".main-section");
let check = true;
menuIcon.addEventListener("click", () => {
  // if (sidebar.getAttribute("isopen", true)) {
  //   sidebar.setAttribute("isopen", false);
  // } else if (sidebar.getAttribute("isopen", false)) {
  //   sidebar.setAttribute("isopen", true);
  // }
  // let test = sidebar.getAttribute("isopen");
  // sidebar.setAttribute("isopen", !test);
  let attr = sidebar.getAttribute("isopen");
  if (attr === "true") {
    sidebar.setAttribute("isopen", "false");
    sidebar.classList.add("close-sidebar");
    sidebar.classList.remove("open-sidebar");
    mainSection.style.marginLeft = "-2px";
  } else {
    sidebar.classList.remove("close-sidebar");
    sidebar.classList.add("open-sidebar");
    sidebar.setAttribute("isopen", "true");
    mainSection.style.marginLeft = "200px";
  }
  // console.log(!check);
  // let isOpen = sidebar.getAttribute("isopen");
  // sidebar.setAttribute("isopen", !isOpen);
  //   if (isOpen) {
  //     sidebar.setAttribute("isopen", false);
  //   } else {
  //     sidebar.setAttribute("isopen", true);
  //   }
  // sidebar.classList.toggle("close-sidebar");
  // console.log(isOpen);
  //   if (isOpen) {
  //     //    close the sidebar if it is open
  //     // sidebar.classList.add("close-sidebar");
  //     // sidebar.classList.remove("open-sidebar");
  //     sidebar.setAttribute("isopen", false);
  //   } else {
  //     // sidebar.classList.add("open-sidebar");
  //     sidebar.setAttribute("isopen", true);
  //     // sidebar.classList.remove("close-sidebar");
  //   }
});
