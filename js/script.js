$(document).ready(function () {
     $('a[href*="#"]').click(function (aksi_navbar) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
          aksi_navbar.preventDefault();
          $('html, body').animate(
               {
               scrollTop: target.offset().top,
               },
               1000,
          );
          }
     
     });
});
