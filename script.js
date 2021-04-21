$(function(){

	$('.with-dropdown').mouseenter(function(){
		
        if($('.with-dropdown').find('.dropdown-menu').hasClass("active") === true){
            $('.with-dropdown').find('.dropdown-menu').removeClass("active");
            $(this).find('.dropdown-menu').addClass('active');
        }else{
            $(this).find('.dropdown-menu').addClass('active');
        }
		
	});

    $('.with-dropdown').click(function(){
		
		$(this).find('.dropdown-menu').removeClass('active');
	});

});