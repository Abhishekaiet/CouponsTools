
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


function openMenu(x) {
         	x.classList.toggle("change");
         	var y = document.getElementById("menuItems");
         	y.classList.toggle("display");
 }
	

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
			  
			document.getElementById("dealsimage").src="img/Icons/dealsoff.png";
			  
			  
		  }
		
		  function mydeal()
		  {  
			   
			    ylw = document.getElementById("btncolor");
			  ylw.style.boxShadow = "0px 2px 4px black";
			  ylw.style.background = "white";
			  
			  document.getElementById("dealsimage").src="img/Icons/dealsoff.png";
			   searchdeals = document.getElementById("searchdeals");
			  searchdeals.style.display = "block"; 
			  
			  
			  
			   searchtextfild = document.getElementById("searchtextfild");
			  searchtextfild.style.display = "none";
			  
			
			  
			   cupbt = document.getElementById("cubtcolor");
			  cupbt.style.background="#d3d4d3";
			  cupbt.style.boxShadow="0px 0px 0px black";
			  
			  document.getElementById("cuposnimage").src="img/Icons/cuponsoff.png";
			  
			  maindeal = document.getElementById("maincondeal");
			  maindeal.style.display = "block"; 
			
			  
			  var cuponslist = document.getElementById("couponsimagedeal");
			  cuponslist.style.display = "block"; 
			 
			  
			   var selectcoupons = document.getElementById("coupon_selectall");
			  selectcoupons.style.display = "none"; 
			  
			   var selectdeals = document.getElementById("deals_selectall");
			  selectdeals.style.display = "inline-block"; 
			 
			  
			   var cuponslist1 = document.getElementById("couponsimage");
			  cuponslist1.style.display = "none"; 
			  
			 y = document.getElementById("mainconainercup");
			y.style.display = "none";
		
			  createnewcouponsdeals = document.getElementById("createnewcouponsdeals");
			  createnewcouponsdeals.style.display = "block";
			  
			  createnewcouponsbtn = document.getElementById("createnewcouponsbtn22");
			  createnewcouponsbtn.style.display = "none";
			 
			  
			document.getElementById("dealsimage").src="img/Icons/dealslight.png";
			  
//			  x = document.getElementById("cuponscodeQR");
//			  x.style.display = "none";  
		  }



     
		  function selectAllChangeDeals() {
			   var inputs = document.getElementsByClassName("dealsCheckboxes");
				for(var i = 0; i < inputs.length; i++) {
					if(inputs[i].type == "checkbox") { 
						if(inputs[i].checked == false) {
							inputs[i].checked = true; 
						} else {
							if(inputs[i].checked == true) {
								inputs[i].checked = false; 
							}   
						}
					}  
				} 
		  }
		   function selectAllChangeCoupons() {
			   var inputs = document.getElementsByClassName("checkboxclicks");
				for(var i = 0; i < inputs.length; i++) {
					if(inputs[i].type == "checkbox") { 
						if(inputs[i].checked == false) {
							inputs[i].checked = true; 
						} else {
							if(inputs[i].checked == true) {
								inputs[i].checked = false; 
							}   
						}
					}  
				} 
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
			  
			  createnewcouponsbtn = document.getElementById("createnewcouponsbtn22");
			  createnewcouponsbtn.style.display = "inline-block";
			  
				  var selectcoupons = document.getElementById("coupon_selectall");
			  selectcoupons.style.display = "inline-block"; 
			  
			   var selectdeals = document.getElementById("deals_selectall");
			  selectdeals.style.display = "none"; 
			 
			   z = document.getElementById("mainconainercup");
			z.style.display = "block";
			   cupbt = document.getElementById("cubtcolor");
			  cupbt.style.background="white";
			  cupbt.style.boxShadow = "0px 2px 4px black";
			  
			  
			document.getElementById("cuposnimage").src="img/Icons/cuponslight.png";
			  
			  
			  dealhide();
			    
		  }
		  
		  function ResetDeal() {
				document.getElementById('delcomname').value = "";
				document.getElementById('entcname3').value = "";
				document.getElementById('deloffer').value = "";
				document.getElementById('delofferc').value = "";
				document.getElementById('delplaceid').value = "";
				document.getElementById('deldescription').value = "";
				document.getElementById('deldescriptnc').value = "";
				document.getElementById('delcate').value = "";
				document.getElementById('delexpirydate').value ="";
				document.getElementById('delcondtions').value = "";
				document.getElementById('deladdress').value = "";
				document.getElementById('delzipcode').value ="";
				document.getElementById('delqrcode').value = "";
				document.getElementById('imagedel').value = "";
				document.getElementById('delimagelink').value = "";
				document.getElementById('imagelogodel').value = "";
				document.getElementById('dellogo').src = "";
				document.getElementById('dlimageoutput').src ="";
				document.getElementById('colorbackgroudurl').value = "";
				document.getElementById("dlimage").style.display="block";
				document.getElementById("dlimageoutput").style.display="none";
			}
			function ResetCoupons() {
				document.getElementById('entcname1').value  = "";
			document.getElementById('entcname').value  = "";
			document.getElementById('printdes').value  = "";
			document.getElementById('printoffer').value = "";
			document.getElementById('offer').value  = "";
			document.getElementById('entdesc').value  = "";
			document.getElementById('category').value = "";
			document.getElementById('expiraydate').value  = "";
			document.getElementById('tersconditons').value = "";
			document.getElementById('address1').value  = "";
			document.getElementById('qrcode').value = "";
			document.getElementById('zipcode').value  = "";
			document.getElementById('editplaceid').value  = "";
			document.getElementById('myImg').src  = "";
			document.getElementById('output').src  = "";
		   
			document.getElementById('imageurl11').value = "";
			document.getElementById('logourl11').value  = "";
			document.getElementById("priority").value = "";
			document.getElementById("myImg").style.display="none";
			document.getElementById("output").style.display="none";
			}
				//allowTaint: true,foreignObjectRendering: true
			document.querySelector('#download_btn').addEventListener('click', function() {
				html2canvas(document.getElementsByClassName('cupons_intact1'), {onrendered : function(canvas) {
					//document.body.appendChild(canvas);
					return Canvas2Image.saveAsPNG(canvas);
				}
			});
			});
			
		 
// JavaScript Document