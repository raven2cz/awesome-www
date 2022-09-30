window.onscroll = function() { scrollFunction() };

scrollFunction();

function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("navbar").style.backgroundColor = "var(--nav-background-color)";
    document.getElementById("navbar").style.borderStyle = "solid";
    document.getElementById("nav-logo").style.width = "300px";
    document.getElementById("nav-logo").style.display = "initial";

  } else {
    document.getElementById("navbar").style.padding = "35px 10%";
    document.getElementById("navbar").style.backgroundColor = "var(--nav-background-color-transparent)";
    document.getElementById("navbar").style.borderStyle = "hidden";
    document.getElementById("nav-logo").style.width = "400px";
    document.getElementById("nav-logo").style.display = "none";
  }
}
