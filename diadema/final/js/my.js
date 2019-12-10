 

	$(document).ready(function(e){
        e.preventDefault

    // menu 
        $('.upper__humburger').on("click", function(){
          $('.menu__wrapper').toggleClass('active');
          $('body').addClass('no-scroll');         
        });

        $('.menu__close').on("click", function(){
          $('.menu__wrapper').toggleClass('active');       
          $('body').removeClass('no-scroll');
        });     

        $('.menu__item a').on("click", function(){
          // Проверка наличия подменю
          if($(this).parent().children('.sub-menu__wrap').length > 0) {
            $('.menu').addClass('active');
            $(this).parent().addClass('active');
          }
          
        });      

        $('.sub-menu__name').on("click", function(){
          $('.menu').removeClass('active');              
          $(this).parents('.menu__item').removeClass('active');
        });
    // end menu

    //мини карзина

    //smartfilter
        $('.catalog__smartfilter-btn').on("click", function(){
          $('.catalog__left').addClass('active');
          $('body').addClass('no-scroll');
        });
        $('.smartfilter__up--btn').on("click", function(){
          $('.catalog__left').removeClass('active');
          $('body').removeClass('no-scroll');
        });

// POPUP
        //popup popup__fast-order
        $('.classforpopup__fast-order').on("click", function(){
          $('.popup-overlay').addClass('active');
          $('body').addClass('no-scroll');
          $('.popup__fast-order').addClass('active');         
        });

        //popup popup__thank
        $('.classforpopup__thank').on("click", function(){
          $('.popup-overlay').addClass('active');
          $('body').addClass('no-scroll');
          $('.popup__thanks').addClass('active');         
        });

        //close popup
        $('.popup-close').on("click", function(){
          $('.popup-overlay').removeClass('active');
          $('body').removeClass('no-scroll');
          $('.popup-block').removeClass('active');          
        });
// END POPUP
// StART smartfilter
        $('.filter-parameters-box-title').on("click", function(){
          $(this).parent().toggleClass('active');
        });

        $('.popup-option__value span').on("click", function(){
          $(this).parent().toggleClass('active');
        });   	

         $('.popup-option__item').on("click", function(){
         
          $(this).parents('.popup-option__value').toggleClass('active');
          $(this).parents('.popup-option__value').children('span').text($(this).text());
        });  
//

	// tab characterSet
        $('#cart-info__tabs').responsiveTabs({
             startCollapsed: 'accordion'
        });

    // menu when scroll
        var $menu = $(".header__wrap");

        $(window).scroll(function(){
            if ( $(this).scrollTop() > 200){
            	
                $menu.addClass("fixed");
            } else if($(this).scrollTop() <= 200) {
                $menu.removeClass("fixed");
              
            }
        });
    // end scroll


    // slick
        $(".cart-product__slider-mini").slick({
			dots: false,
			vertical: true,
			verticalSwiping: true,
			centerMode: true,
			slidesToShow: 4,
			slidesToScroll: 2,
			asNavFor: '.cart-product__slider-main',
			focusOnSelect: true
        });

        $(".cart-product__slider-main").slick({
        	vertical: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			responsive: [						
			    {
			      breakpoint: 576,
			      settings: {
			        dots: true,
			        fade: false			      
			      }
			    }
			  ]
        });
        $(".slider__and-order").slick({
        	vertical: false,
			slidesToShow: 4,
			arrows: true,
			infinite: false,
  			focusOnSelect: true,
  			responsive: [
  			    {
  			      breakpoint: 1024,
  			      settings: {
  			        slidesToShow: 4
  			      }
  			    },
  			    {
  			      breakpoint: 768,
  			      settings: {
  			        slidesToShow: 3
  			      }
  			    },
  			    {
  			      breakpoint: 576,
  			      settings: {
  			      	// centerMode: true,
  			      	infinite: true,
  			        slidesToShow: 2,
  			        arrows: false,
  			        focusOnSelect: true

  			      }
  			    }	
  			   ]		
        });   

    //     $(".cart-advantage__items").slick({
	   //      	vertical: false,
				// slidesToShow: 1,
				// arrows: false,
				// infinite: false,
	  	// 		focusOnSelect: true,
	  	// 		customPaging: 10;
  		// 	});	
    

		


});
	

	// slider price
	$( function() {
	    $( "#slider-range" ).slider({
	      range: true,
	      min: 0,
	      max: 500,
	      values: [ 100, 300 ],
	      slide: function( event, ui ) {
	        $( "#lower-price" ).val(ui.values[ 0 ]);
	        $( "#higher-price" ).val(ui.values[ 1 ]);

	      }
	    });
	    $( "#lower-price" ).val($( "#slider-range" ).slider( "values", 0 ));
	    $( "#higher-price" ).val($( "#slider-range" ).slider( "values", 1 ));
  		} 
  	);
 





 $(function() {
    $('#phone1, #phone2, #phone3, #phone4').mask("+7 (999) 99-99-999");    
  });   


  function windowSize(){

    	if ($(document).width() <= '576'){
    		  $(".cart-advantage__items").slick({
	        	vertical: false,
				slidesToShow: 1,
				arrows: false,
				infinite: false,
				variableWidth: true,
	  			focusOnSelect: true
	  			
  			});	 
    		  // add link on basket
  			$('.upper-basket.no-null .upper-basket__wrap').attr("href","/basket");        	
    	} else {

    		 $('.upper-basket.no-null .upper-basket__wrap').on("click", function(){
	        	$('.stash__pop').toggleClass('active');              
	        });    
    	}


      


	}
  function windowResize() {
      if ($(document).width() > '1100'){
          $('.menu__wrapper').removeClass('active');      
      }
  }
	$(document).ready(windowSize);
  $(window).resize(windowResize);
