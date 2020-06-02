
var multiple = document.getElementById('multiple');


multiple.onkeyup = function(){
    document.getElementById('oferrdescdublicate').value = tersconditons.value;
}


var tersconditons = document.getElementById('tersconditons');
	

tersconditons.onkeyup = function(){
    document.getElementById('oferrdescdublicate').value = tersconditons.value;
}



var inputBox = document.getElementById('entcname');
	

inputBox.onkeyup = function(){
    document.getElementById('printcname').value = inputBox.value;
}




	
var inputBox1 = document.getElementById('offer');

inputBox1.onkeyup = function(){
    document.getElementById('printoffer').value = inputBox1.value;
	document.getElementById('oferrdescdublicate').value = inputBox1.value;
	
}

	

var inputBox2 = document.getElementById('entdesc');

inputBox2.onkeyup = function(){
    document.getElementById('printdes').value = inputBox2.value;
	 document.getElementById('oferrdescdublicate').value = inputBox2.value;
}


					
				$('#select').change(function(){
  if($(this).val() == 'food'){ 
    
	$("#couponsimage").css('background-image','url(img/blankcoupons/Health.png)');
	  $("#catrogires").css('background-color','#3755a5');
	  
  }
    if($(this).val() == 'drink'){
    $("#couponsimage").css('background-image', 'url(img/blankcoupons/Professional_Services.png)');
		$("#catrogires").css('background-color','#f1592d');
  }
    if($(this).val() == 'sports'){
    $("#couponsimage").css('background-image', 'url(img/blankcoupons/Services.png)');
		$("#catrogires").css('background-color','#502d7e');
  }
    if($(this).val() == 'schools'){
    $("#couponsimage").css('background-image', 'url(img/blankcoupons/Things_to_do.png)');
		$("#catrogires").css('background-color','#158982');
  }
					
});







//for hiding the deals and coupons
		  
		 
					function qrcode()
					{
			  
			y = document.getElementById("mainconainercup");
			y.style.display = "none";
			 		  
						dealhide1();
						
					}
		
		  
		  function dealhide1()
		  {
			   x = document.getElementById("cuponscodeQR");
			  x.style.display = "block";
		  }
		  

		  function dealshow()
		  {
			  x = document.getElementById("maincondeal");
			  x.style.display = "block";
			  cupbt = document.getElementById("cubtcolor");
			  cupbt.style.background="#D5D5D5";
			  document.getElementById("cuposnimage").src="img/Icons/cuponsoff.png";
		  }
		  
		  function dealhide()
		  {
			 x = document.getElementById("maincondeal");
			  x.style.display = "none"; 
			   y = document.getElementById("btncolor");
			y.style.background = "#D5D5D5";
			 y.style.boxShadow = "0px 0px 0px black";
			  
//			  document.getElementById("dealsimage").src="img/Icons/dealsoff.png";
			  
			  
		  }
		
		  function mydeal()
		  {  
			   
			    ylw = document.getElementById("btncolor");
			  ylw.style.boxShadow = "0px 2px 4px black";
			  ylw.style.background = "white";
			  
			  
			   searchdeals = document.getElementById("searchdeals");
			  searchdeals.style.display = "block"; 
			  
			  
			  
			   searchtextfild = document.getElementById("searchtextfild");
			  searchtextfild.style.display = "none";
			  
			  createnewcouponsdeals = document.getElementById("createnewcouponsdeals");
			  createnewcouponsdeals.style.display = "block";
			  
			  createnewcouponsbtn = document.getElementById("createnewcouponsbtn");
			  createnewcouponsbtn.style.display = "none";
			 
			  
			   cupbt = document.getElementById("cubtcolor");
			  cupbt.style.background="#d3d4d3";
			  cupbt.style.boxShadow="0px 0px 0px black";
			  
			  document.getElementById("cuposnimage").src="img/Icons/cuponsoff.png";
			  
			  maindeal = document.getElementById("maincondeal");
			  maindeal.style.display = "block"; 
			
			  
			  var cuponslist = document.getElementById("couponsimagedeal");
			  cuponslist.style.display = "block"; 
			 
			  
			   var cuponslist1 = document.getElementById("couponsimage");
			  cuponslist1.style.display = "none"; 
			  
			 y = document.getElementById("mainconainercup");
			y.style.display = "none";
		
			
			  
//			document.getElementById("dealsimage").src="img/Icons/dealslight.png";
			  
//			  x = document.getElementById("cuponscodeQR");
//			  x.style.display = "none";

			  
			
			  
			
			  
		  }



     
		  
		  function mycupons()
		  {
			  
			   searchdeals = document.getElementById("searchdeals");
			  searchdeals.style.display = "none"; 
			  
			   searchtextfild = document.getElementById("searchtextfild");
			  searchtextfild.style.display = "block";
			  
			  
			   couplist1 = document.getElementById("couponsimagedeal");
			couplist1.style.display = "none";
			  
			   couplist = document.getElementById("couponsimage");
			couplist.style.display = "block";
			  
			  
			  createnewcouponsdeals = document.getElementById("createnewcouponsdeals");
			createnewcouponsdeals.style.display = "none";
			  
			   createnewcouponsbtn = document.getElementById("createnewcouponsbtn");
			  createnewcouponsbtn.style.display = "block";
			  
			  
			   z = document.getElementById("mainconainercup");
			z.style.display = "block";
			   cupbt = document.getElementById("cubtcolor");
			  cupbt.style.background="white";
			  cupbt.style.boxShadow = "0px 2px 4px black";
			  
			  
			document.getElementById("cuposnimage").src="img/Icons/cuponslight.png";
			  
			  
			  dealhide();
			  
			  
			  
		  }
		  
		  
		  	





// JavaScript Document