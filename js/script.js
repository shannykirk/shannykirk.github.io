$('#intro').typeIt({
	speed: 130,
     autoStart: false
})
.tiType('anna marie boone');
$('.ti-cursor').remove();

$(function(){
    $("#menu").click(function () {
        $(".slide-content").slideToggle("medium");
      $('#nav-icon3').toggleClass('open');
    });
});

$(".clickme").click(function() {
	var classes = ['comic', 'colorfade', 'swing', 'flip'];
	var randomnumber = Math.floor(Math.random() * classes.length); 
	$('#intro').removeClass();
	$("#intro").toggleClass(classes[randomnumber]);
}); 
	