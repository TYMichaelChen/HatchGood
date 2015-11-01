$(function(){
	//Change dropdown button text after selecting: html selector: data-name
    $(".dropdown-menu li a").click(function(){
    	selector = $(this).parents('ul').data('name');
       	caret = ' <span class="caret"></span>';
		$("#"+selector+"-btn").html($(this).text()+caret);
		$("#"+selector+"-btn").val($(this).text());
   });
});