

$(document).ready(function(){
$('.slider').slick({
  				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows:true,
				prevArrow:'<button type="button" class="slick-prev"> </button>',
				nextArrow:'<button type="button" class="slick-next"></button>',
				responsive: [
					{
						breakpoint: 600,
						settings: {
							arrows: false,
						}
					  }
				]
				
			});


			$('.partners__slider').slick({
				dots: false,
				infinite: false,
				speed: 300,
				slidesToShow: 5,
				slidesToScroll: 1,
				
  				ariableWidth: true,
				prevArrow:'<button type="button" class="partners__slider__prev"> </button>',
				nextArrow:'<button type="button" class="partners__slider__next"></button>',
				responsive: [
					{
						breakpoint: 1250,
						settings: {
						  slidesToShow: 4,
						  slidesToScroll: 1,
						  infinite: true,
						  dots: false
						}
					  },
				  {
					breakpoint: 1024,
					settings: {
					  slidesToShow: 3,
					  slidesToScroll: 1,
					  infinite: true,
					  dots: false
					}
				  },
				  {
					breakpoint: 600,
					settings: {
					  slidesToShow: 2,
					  slidesToScroll: 1
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
		
});