jQuery(function($){
$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
			
//	$('.single-item').slick();
	// var elem = $('#box-1');
	// elem.css('color', 'red');
	// elem.css({
	// 	'color': 'red',
	// 	'font-weight': 'bold'
	// })
	
// 	$('.boxes').find('.box')
// 	           .css('textTransform','uppercase');
// 	$('.boxes .box')
// 				.eq(2)
// 				.css('color','blue');
// 	var str = 'hello world';
// //	$('.box:nth-child(4)').text('hello world');
// 	var titletext = $('.title').text('<h4>Lorem ipsum dolor sit.</h4>');
// 	$('.box:nth-child(4)').text(titletext);
// 	$('.boxes-2 .box:first-child').html('<div class="card">'+
// 		'<h4>Lorem ipsum dolor sit.</h4>'
// 		+'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>'+
// 	+'</div>');
// 	var newElem =$('<p>  Lorem</p>').css('color','red');
// 	 $('.box').append(newElem);

// 	 var newpara = $('<p> new text</p>').css('border-bottom','1px solid blue');

// 	 $('.boxes-2 .box').after(newpara);


// 	 $('#btn').on('click', function(){
// 	 	If (!$('#modal').hasClass('is-open')) {
// 	 		$('#modal').fadeIn(700)
// 	 					.addClass('is-open');
// 	 	} else {
// 	 		$('#modal').fadeOut(400)
// 	 		removeClass('is-open')

// 	 	}	
// 	 });
// 	 console.log('you clicked button');
//	 $('body').append(h4);
	// var elem = $('#string-3' + '#string-5'+'#string-2'+'#string-6'+'#string-4'+'#string-1');
	// console.log(elem);






});

