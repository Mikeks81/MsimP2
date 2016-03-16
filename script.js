// function home(){
// 	$('html, body').animate({scrollTop: 0},700);
// }

// function about(){
// 	$('html, body').animate({scrollTop: 483},700);
// }

// function portfolio(){
// 	$('html, body').animate({scrollTop: 1324},700);
// }

// function contact(){
// 	$('html, body').animate({scrollTop: 2439},700);
// }

// function typing(){
// 	var greeting = "Michael Simonitsch".split("");
// 	var a = [];
// 	for (var i = 0; i < greeting.length; i++) {
// 		a.push(greeting[i]);
// 		$('.greeting').delay(500).html(a.join());
// 		console.log(greeting[i]);
// 	}
// }

$(document).ready(
	function(){
	
	$('#burger').on('click',
		function(){
			$('nav li').toggle();
	});

		$(window).scroll(function(){

			if ( $('header').css('opacity') < 1){
				$('header').css({'opacity':0+(
					($(this).scrollTop())/270)
				});
			}

		});

});		


// #### header animation ##### 





