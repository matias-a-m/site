
  
    $('a.scroll-queHago').on('click', function (e) {
        e.preventDefault();
        var seccionOffsetTop = $($(this).attr('href')).offset().top - 10;
        $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 900);
      });
  
 