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
            $(projectExpanded).addClass("show");
            $("div.work").addClass("hide");
        });
    });

    $( "p.back" ).each(function() {
        $(this).click(function() {
            $("div.work-expanded").removeClass("show");
            $("div.work").removeClass("hide");
        });
    });

    // scroll from hero to work
    // can change duration by editing the number below _ 1000 = 1 secondx

    $("div.see-work-button").click(function() {
        $('html, body').animate({
            scrollTop: $("#work").offset().top
        }, 1000);
    });

});
