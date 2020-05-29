 $('#test').click(function(){
	var ele = $('.icon-to-change');
  if(ele.hasClass('fa-caret-down')){
  	ele.removeClass('fa-caret-down')
       .addClass('fa-caret-up')
  }
  else{
  	ele.addClass('fa-caret-down')
       .removeClass('fa-caret-up')
  }
})

	

		 	 $('#test2').click(function(){
	var ele = $('.icon-to-change2');
  if(ele.hasClass('fa-caret-down')){
  	ele.removeClass('fa-caret-down')
       .addClass('fa-caret-up')
  }
  else{
  	ele.addClass('fa-caret-down')
       .removeClass('fa-caret-up')
  }
})

	
		 	 $('#test3').click(function(){
	var ele = $('.icon-to-change3');
  if(ele.hasClass('fa-caret-down')){
  	ele.removeClass('fa-caret-down')
       .addClass('fa-caret-up')
  }
  else{
  	ele.addClass('fa-caret-down')
       .removeClass('fa-caret-up')
  }
})
			 
			 
		 	 $('#test4').click(function(){
	var ele = $('.icon-to-change4');
  if(ele.hasClass('fa-caret-down')){
  	ele.removeClass('fa-caret-down')
       .addClass('fa-caret-up')
  }
  else{
  	ele.addClass('fa-caret-down')
       .removeClass('fa-caret-up')
  }
})

	
	
		 	 $('#test5').click(function(){
	var ele = $('.icon-to-change5');
  if(ele.hasClass('fa-caret-down')){
  	ele.removeClass('fa-caret-down')
       .addClass('fa-caret-up')
  }
  else{
  	ele.addClass('fa-caret-down')
       .removeClass('fa-caret-up')
  }
})


		 	 $('#test6').click(function(){
	var ele = $('.icon-to-change6');
  if(ele.hasClass('fa-caret-down')){
  	ele.removeClass('fa-caret-down')
       .addClass('fa-caret-up')
  }
  else{
  	ele.addClass('fa-caret-down')
       .removeClass('fa-caret-up')
  }
})


		 	 $('#test7').click(function(){
	var ele = $('.icon-to-change7');
  if(ele.hasClass('fa-caret-down')){
  	ele.removeClass('fa-caret-down')
       .addClass('fa-caret-up')
  }
  else{
  	ele.addClass('fa-caret-down')
       .removeClass('fa-caret-up')
  }
})

	
	
		 	 $('#test8').click(function(){
	var ele = $('.icon-to-change8');
  if(ele.hasClass('fa-caret-down')){
  	ele.removeClass('fa-caret-down')
       .addClass('fa-caret-up')
  }
  else{
  	ele.addClass('fa-caret-down')
       .removeClass('fa-caret-up')
  }
})


		 	 $('#test9').click(function(){
	var ele = $('.icon-to-change9');
  if(ele.hasClass('fa-caret-down')){
  	ele.removeClass('fa-caret-down')
       .addClass('fa-caret-up')
  }
  else{
  	ele.addClass('fa-caret-down')
       .removeClass('fa-caret-up')
  }
})


		 	 $('#test10').click(function(){
	var ele = $('.icon-to-change10');
  if(ele.hasClass('fa-caret-down')){
  	ele.removeClass('fa-caret-down')
       .addClass('fa-caret-up')
  }
  else{
  	ele.addClass('fa-caret-down')
       .removeClass('fa-caret-up')
  }
})

	
	
	/*Sort Button contoll youtube*/
	

		   
		  $(function() {
   var links = $('a.link').click(function() {
       links.removeClass('active');
       $(this).addClass('active');
	   $(this).css('color', '#4ccbc7');
	   $(this).css('text-decoration', 'none');
   });
});


clicked= true;
$(function() {
   var links = $('.decc').click(function() {
	   if(clicked)
	   {
	   $(this).css('color', '#4ccbc7');
	   clicked  = false;
	   }
	   else
	   {
	   $(this).css('color', '#535353');
	   clicked  = true;
	   }
   });
});



clicked= true;
$(function() {
   var links = $('.acc').click(function() {
	   if(clicked)
	   {
	   $(this).css('color', '#4ccbc7');
	   clicked  = false;
	   }
	   else
	   {
	   $(this).css('color', '#535353');
	   clicked  = true;
	   }
   });
});



clicked= true;
$(function() {
   var links = $('.select_dropdwon').click(function() {
	   if(clicked)
	   {
	   $(this).css('color', '#4ccbc7');
	   clicked  = false;
	   }
	   else
	   {
	   $(this).css('color', 'white');
	   clicked  = true;
	   }
   });
});