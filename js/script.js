$( document ).ready(function() {

    // show project name on hover

    $( "div.row a" ).hover(
      function() {
        $( this ).find("h3").css({
            opacity: 1,
        });
      }, function() {
        $( this ).find("h3").css({
            opacity: 0,
        });
      }
    );

    // show and hide the expanded views
    $( "div.row a" ).each(function() {
        $(this).click(function() {
            var getClass = this.className.toString();
            var projectExpanded = $("div.work-expanded." + getClass);
            $(projectExpanded).fadeIn(1000);
            $("div.work").fadeOut(10);
            $("div.about").fadeOut(10);
            $("div.hero").fadeOut(10);
        });
    });

    $( "p.back" ).each(function() {
        $(this).click(function() {
            $("div.work-expanded").fadeOut(1000);
            $("div.work").fadeIn(1000);
            $("div.about").fadeIn(1000);
            $("div.hero").fadeIn(1000);
        });
    });

    // scroll from hero to work
    // can change duration by editing the number below _ 1000 = 1 secondx
    $("div.see-work-button").click(function() {
        $('html, body').animate({
            scrollTop: $("#work").offset().top
        }, 1000);
    });

    // scroll to about section from nav
    $("p.nav-about").click(function() {
        $("div.work-expanded").fadeOut(1000);
        $("div.work").fadeIn(1000);
        $("div.about").fadeIn(1000);
        $("div.hero").fadeIn(1000);
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    });

    // scroll to work section from nav
    $("p.nav-work").click(function() {
        $("div.work-expanded").fadeOut(1000);
        $("div.work").fadeIn(1000);
        $("div.about").fadeIn(1000);
        $("div.hero").fadeIn(1000);
        $('html, body').animate({
            scrollTop: $("#work").offset().top
        }, 1000);
    });

});
