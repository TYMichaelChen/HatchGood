$( document ).ready(function() {
    console.log( $('.bot-box').offset().top);
    offsetHeight = $('#affix-stop').offset().top;
     $(document).on("mousewheel", function() {
     	if($(document).scrollTop()>offsetHeight){
     		$('#sticky-box').removeClass("affix");
     	}else{     		
     		$('#sticky-box').addClass("affix");
     	}
    });
});