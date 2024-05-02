var menulist = document.getElementById('menulist');
menulist.style.maxHeight = "0px";

function menutoggle() {
  if (menulist.style.maxHeight == "0px") {
    menulist.style.maxHeight = "100vh";
  } else {
    menulist.style.maxHeight = "0px";
  }
}

// Slider
$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
});
// Book button link to html function
function book(){
  window.location = "book.html";
}

function click1(){

  var div41 = document.getElementById("div41");
  var div42 =  document.getElementById("div42");
  var div43 =  document.getElementById("div43");
  div41.classList = "div4";
  div42.classList = "div4 hide";
  div43.classList = "div43 hide";

}

function click2(){

  var div41 = document.getElementById("div41");
  var div42 =  document.getElementById("div42");
  var div43 =  document.getElementById("div43");
  div41.classList = "div4 hide";
  div42.classList = "div4 ";
  div43.classList = "div43 hide";

}

function click3(){

  var div41 = document.getElementById("div41");
  var div42 =  document.getElementById("div42");
  var div43 =  document.getElementById("div43");
  var divb =   document.getElementById("divb");
  div41.classList = "div4 hide";
  div42.classList = "div4 hide";
  divb.classList = "divb hide";
  div43.classList = "div3";

}

$(document).ready(function () {
  $('.owl-carousel').owlCarousel1({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
});
