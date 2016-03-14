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
		
		$('#greeting').delay(3000).slideUp(300);

		$(window).scroll(function(){
			// $('.greeting').css({'opacity': 1-(($(this).scrollTop())/200)
			// });
			// $('.wrapper').css({'opacity': 1-(($(this).scrollTop())/200)
			// });

			if ( $('header').css('opacity') < 1){
				$('header').css({'opacity':0+(
					($(this).scrollTop())/470)
				});
			}

		});

});		


// #### header animation ##### 





