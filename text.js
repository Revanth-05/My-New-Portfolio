$(document).ready(function () {
    $(window).scroll(function () {
      // sticky navbar on scroll script
      if (this.scrollY > 20) {
        $('.navbar').addClass("sticky");
      } else {
        $('.navbar').removeClass("sticky");
      }
  
      // scroll-up button show/hide script
      if (this.scrollY > 500) {
        $('.scroll-up-btn').addClass("show");
      } else {
        $('.scroll-up-btn').removeClass("show");
      }
    });
  
    // slide-up script
    $('.scroll-up-btn').click(function () {
      $('html').animate({ scrollTop: 0 });
      // removing smooth scroll on slide-up button click
      $('html').css("scrollBehavior", "auto");
    });
  
    $('.navbar .menu li a').click(function () {
      // applying again smooth scroll on menu items click
      $('html').css("scrollBehavior", "smooth");
    });
  
    // toggle menu/navbar script
    $('.menu-btn').click(function () {
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
    });
  
  });
  
  
  
  
  // ----------------------Project Card Effect --------------
  
  $(".project-card1").hover(function () {
    if ($(this).hasClass("active")) {
      $(".project-card1 .project-detail").slideUp(function () {
        $(".project-card1").removeClass("active");
      });
    } else {
      $(".project-card1").addClass("active");
      $(".project-card1 .project-detail").stop().slideDown();
    }
  });
  
  $(".project-card2").hover(function () {
    if ($(this).hasClass("active")) {
      $(".project-card2 .project-detail").slideUp(function () {
        $(".project-card2").removeClass("active");
      });
    } else {
      $(".project-card2").addClass("active");
      $(".project-card2 .project-detail").stop().slideDown();
    }
  });
  
  $(".project-card3").hover(function () {
    if ($(this).hasClass("active")) {
      $(".project-card3 .project-detail").slideUp(function () {
        $(".project-card3").removeClass("active");
      });
    } else {
      $(".project-card3").addClass("active");
      $(".project-card3 .project-detail").stop().slideDown();
    }
  });
  
  $(".project-card4").hover(function () {
    if ($(this).hasClass("active")) {
      $(".project-card4 .project-detail").slideUp(function () {
        $(".project-card4").removeClass("active");
      });
    } else {
      $(".project-card4").addClass("active");
      $(".project-card4 .project-detail").stop().slideDown();
    }
  });
  
  $(".toggle-btn").click(function () {
    $(".side-menu").toggleClass("active");
    $(this).toggleClass("fa-angle-double-right");
  });
  
  //  ------------- script for carousel --------------------
  $(".main-carousel").flickity({
    // options
    // cellAlign: 'left',
    freeScroll: true,
    wrapAround: true,
    autoPlay: true,
    prevNextButtons: false,
  });
  
  //-------script for carousel  Ends ----
  
  // ------Typing Effect script ------
  new TypeIt("#type1", {
    speed: 120,
    loop: true,
    waitUntilVisible: true,
  })
    .type("Java Programmer", { delay: 400 })
    .pause(500)
    .delete(16)
    .type("Web Developer", { delay: 400 })
    .pause(500)
    .delete(13)
    .type("Entrepreneur", { delay: 400 })
    .pause(500)
    .delete(13)
    .type("Programmer", { delay: 400 })
    .pause(500)
    .delete(11)
    .go();
  
  // -------Typing Effect script Ends------------
  
  
  
  
  document
    .getElementById("Contact_Form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
  
      const serviceID = "service_4et6qet";
      const templateID = "template_qbmwbao";
      emailjs.sendForm(serviceID, templateID, this).then(
        (res) => {
          console.log("success", res.status);
          alert("your message sent successfully..");
        },
        (err) => {
          console.log(JSON.stringify(err));
        }
      );
      document.getElementById("message").value = "";
      document.getElementById("email").value = "";
      document.getElementById("from_name").value = "";
    });
  
  
  
  AOS.init();