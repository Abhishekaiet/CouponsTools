

var tersconditons = document.getElementById('tersconditons');
var UploadedImages = [];	

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
		  
		  
		  function collectionCheck(){
			  $("#CollectionDiv").css("display","block")
			    $("#ProductDiv").css("display","none")
		  }
		  function EntireCheck() {
			  $("#CollectionDiv").css("display","none")
			  $("#ProductDiv").css("display","none")
		  }
		   function productCheck(){
			  $("#ProductDiv").css("display","block")
			  $("#CollectionDiv").css("display","none")
		  }
		  
		  function ShowPercentageDiv(){
			  $("#FixedAmountDiv").css("display","none")
			    $("#percentageDiv").css("display","block")
				$("#buyXgetYDiv").css("display","none")
				$("#freeShippingDiv").css("display","none")
		  }
		  function ShowFixedAmountDiv() {
			    $("#FixedAmountDiv").css("display","block")
			    $("#percentageDiv").css("display","none")
				$("#buyXgetYDiv").css("display","none")
				$("#freeShippingDiv").css("display","none")
		  }
		   function ShowfreeshippingDiv(){
			   $("#FixedAmountDiv").css("display","none")
			    $("#percentageDiv").css("display","none")
				$("#buyXgetYDiv").css("display","none")
				$("#freeShippingDiv").css("display","block")
		  }
		   function ShowBuyXDiv(){
			   $("#FixedAmountDiv").css("display","none")
			    $("#percentageDiv").css("display","none")
				$("#buyXgetYDiv").css("display","block")
				$("#freeShippingDiv").css("display","none")
		  }
		  
		  function enterLimit() {
			  $("#totalUsageLimitli").toggle();
		  }
		  function customerChange(){
			  $("#CustomersSearch").css("display","block")
			  $("#groupCustomerSearch").css("display","none")
		  }
		  function purchaseAmount(){
			  $("#purchaseAmount").css("display","block")
			  $("#QuantityItem").css("display","none")
		  }
		  function NoneReq() {
			  $("#purchaseAmount").css("display","none")
			  $("#QuantityItem").css("display","none")
		  }
		   function quantityCheck(){
			  $("#QuantityItem").css("display","block")
			  $("#purchaseAmount").css("display","none")
		  }
		  function EveryoneSelect() {
			  $("#groupCustomerSearch").css("display","none")
			  $("#CustomersSearch").css("display","none")
		  }
		  
		  function showBrowseCountry() {
			  $("#BrowseCountry").css("display","flex");
		  }
		  function hideBrowseCountry() {
			  $("#BrowseCountry").css("display","none");
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
		  
		  $('#prerequisitesTypeSelect').change(function(){
			  var value = $(this).val();
			  if(value == "PRODUCTS"){
				   $("#SelectText").html("Specific products");
				   $("#productInput").css("display","flex");
				   $("#collectionsInput").css("display","none");
				    $("#cbuy").css("display","none");
					 $("#pbuy").css("display","block");
			  } else if(value == "COLLECTIONS") {
				   $("#SelectText").html("Specific collections");
				   $("#productInput").css("display","none");
				   $("#collectionsInput").css("display","flex");
				   $("#cbuy").css("display","block");
					 $("#pbuy").css("display","none");
			  }
		  });
			
		 $('#itemEntitlementsType').change(function(){
			  var value = $(this).val();
			  if(value == "PRODUCTS"){
				   $("#selectTextGet").html("Specific products");
				   $("#productInputGet").css("display","flex");
				   $("#collectionsInputGet").css("display","none");
				   $("#cget").css("display","none");
					 $("#pget").css("display","block");
			  } else if(value == "COLLECTIONS") {
				   $("#selectTextGet").html("Specific collections");
				   $("#productInputGet").css("display","none");
				   $("#collectionsInputGet").css("display","flex");
				    $("#cget").css("display","block");
					 $("#pget").css("display","none");
			  }
		  });
		  
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
			   
		  }


		function showEndDate() {
			$("#endDate").toggle();
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
		  function onClickImageButton() {
			  var html = $(".ImageUploadDiv4").html();
			  $("#AddImagestoslider").html(html);
			  $("#close-image-coupons").css("display","none");
			  $("#slider").css("display","block");
			  $("#AddImagestoslider li img").each(function() { 
					console.log(dataURLtoBlob($(this).attr("src")));
					var uniqueId = Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
					thisRef1 = firebase.storage().ref("/fieupload/"+uniqueId);
					thisRef1.put(dataURLtoBlob($(this).attr("src"))).then(function(url1) {
					console.log('logo has been uploaded!');
					var urlPromise1 = thisRef1.getDownloadURL();
					urlPromise1.then(url1 => {	
						UploadedImages.push({"imageUrl":url1});
					});
				});
				});
		  }
		  function Addcustomer() {
			  var html ="";
			  $('input:checkbox.customerCheck').each(function () {
				  if(this.checked){
				   var name = $(this).attr("data-name");
				   var email = $(this).attr("data-email");
				   var id = $(this).attr("value");
				   html += "<li id='"+id+"'><span>"+name+"</span><span>"+email+"</span><span class='crossIcon' data-id='"+id+"' onclick='UncheckCustomer("+id+")'><i class='fa fa-times' aria-hidden='true'></i></span></li>"
				  }
			  });
			  $(".customer_list").html(html);
			  $("#customerList").css("display","none");
		  }
		  
		  function UncheckCustomer(id) {
			  $(this).css('display','none');
			  $('input:checkbox[value=' + id + ']').prop('checked', false);
			  $('#'+id).css("display","none");
		  }
		   function UncheckProduct(id) {
			   $(this).css('display','none');
			  $('input:checkbox.productCheck[value=' + id + ']').prop('checked', false);
			  $('#'+id).css("display","none");
		  }
		   function Uncheckcollection(id) {
			   $(this).css('display','none');
			  $('input:checkbox.productCheck[value=' + id + ']').prop('checked', false);
			  $('#'+id).css("display","none");
		  }
		  function Addproduct() {
			  var html ="";
			  $('input:checkbox.productCheck').each(function () {
				  if(this.checked){
				   var name = $(this).attr("data-name");
				   var img = $(this).attr("data-image");
				   var id = $(this).attr("value");
				   html += "<li id='"+id+"'><img style='width:40px;margin-right: 30px;' src="+img+" /><span>"+name+"</span><span class='crossIcon' data-id='"+id+"' onclick='UncheckProduct("+id+")'><i class='fa fa-times' aria-hidden='true'></i></span></li>"
				  }
			  });
			   if($("#productVariantsEntitlements").val().length > 0){
				  $("#product_get").html(html);
			  } else {
			   if($("#buyXgetYDiv").css("display") == "block"){
				  $("#product_buy").html(html);
			  } else {
			  $(".product_list").html(html);
			  }
			  }
			  $("#ProductList").css("display","none");
		  }
		  function Addcollection() {
			  var html ="";
			  $('input:checkbox.collectionCheck').each(function () {
				  if(this.checked){
				   var name = $(this).attr("data-name");
				   var id = $(this).attr("value");
				   html += "<li id='"+id+"'><span>"+name+"</span><span class='crossIcon' data-id='"+id+"' onclick='Uncheckcollection("+id+")'><i class='fa fa-times' aria-hidden='true'></i></span></li>"
				  }
			  });
			  if($("#collectionsEntitlements_").val().length > 0){
				  $("#collection_get").html(html);
			  } else {
			  if($("#buyXgetYDiv").css("display") == "block"){
				  $("#collection_buy").html(html);
			  } else {
			  $(".collection_list").html(html);
			  }
			  }
			  $("#collectionList").css("display","none");
		  }
		  function closepopup() {
			   document.getElementById('customerList').style.display="none";
			   document.getElementById('ProductList').style.display="none";
			   document.getElementById('collectionList').style.display="none";
		  }
		  function GenerateCouponCode() {
			   var result           = '';
			   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
			   var charactersLength = characters.length;
			   for ( var i = 0; i < 13; i++ ) {
				  result += characters.charAt(Math.floor(Math.random() * charactersLength));
			   }
			   document.getElementById('DiscountCodeTextField').value = result;
			}
			function selected_Customers() {
				document.getElementById('customerList').style.display="block";
			}
			
			function selected_products() {
				document.getElementById('ProductList').style.display="block";
			}
			function selected_collect() {
				document.getElementById('collectionList').style.display="block";
			}
			function AutoSearchCustomers() {
				var query = document.getElementById('SearchCustomers').value;
				const GetCustomerList = async () => {
			    Data = CustomerData;
				     found_results = $.grep(Data.customers, function(v) {
						return (v.first_name.toLowerCase().indexOf(query) > -1 || v.email.toLowerCase().indexOf(query) > -1);
				});
			  var Html="";
			  found_results.forEach(function(item,index){
				Html += '<div><input class="customerCheck" type="checkbox" data-name="'+item.first_name+'" data-email="'+item.email+'" value="'+item.id+'"><span>'+item.email+ "    " + item.first_name +'</span></div>'
			  });
			  if(Html == ""){
				Html = "<div><p>No results found for "+query+"</p></div>"
			  }
			   $(".autoresultdiv").html(Html);
			   $(".resultdiv").css("display","none")
			   $(".autoresultdiv").css("display","block")
				}
				if(query.length >= 2){
				GetCustomerList();
				} else {
					$(".resultdiv").css("display","block")
					$(".autoresultdiv").css("display","none")
				};
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
			
			
			function createCoupons(update = false){
				var PRID = $(this).attr("data-id");
				var name = $("#listsearch").val();
				var Address = $("#address1").val();
				var category = $("#select").val();
				var offer = $(".inpt_offer").val();
				var termsandcondition = $("#tersconditons").val();
				var description = $("#coupondesc").val();
				var code = $("#DiscountCodeTextField").val();
				var isPercentage = $("#PercentageRadioButton").is(':checked');
				var isFixed = $("#FixedRadioButton").is(':checked')
				var isFreeShipping = $("#FreeShippingRadioButton").is(':checked')
				var isbuy = $("#BuyRadioButton").is(':checked')
				var percentagevalue = $("#percentageValueField").val();
				var fixedvalue = $("#fixedAmountValueField").val();
				var shippingvalue = $("#excludeShippingRatesOverTextField").val();
				var isentireOrderCheck = $("#entireOrderCheck").is(':checked')
				var isSpecificCollectCheck = $("#SpecificCollectCheck").is(':checked')
				var isSpecificProductCheck = $("#SpecificProductCheck").is(':checked')
				var prerequisite_quantity =  $("#itemPrerequisitesQuantity").val();
				var entitled_quantity =  $("#itemEntitlementsQuantity").val();
				var prerequisite_p =  [];
				var entitled_p=  []
				var prerequisite_c =  [];
				var entitled_c=  []
				var productIDs=[]
				var collectionIDs= [];
				var CustomerIDs= [];
				var startatDate = $("#StartEmbeddedDatePicker").val();
				var startatTime = $("#StartTimeField").val();
				var dateTime = new Date(startatDate + ' ' +  startatTime).toISOString();
				var isusageLimit = $("#UsageLimit").is(':checked')
				var usage_limit =  $("#totalUsageLimit").val();
				var target_selection = "entitled";
				var customer_selection = "all";
				var isSpecificCustomerCheck = $("#specificCustomerCheck").is(':checked')
				var isAllcustomerCheck = $("#AllcustomerCheck").is(':checked')
				var allcountry = $("#PolarisRadioButton65").is(':checked');
				var endDate = $("#EndEmbeddedDatePicker").val();
				var endTime = $("#EndTimeField").val();
				var enddateTime="";
				var allocation_method = "across";
				if(!allcountry){
					allocation_method= "each"
				}
				if(endDate != ""){
					enddateTime = new Date(endDate + ' ' +  endTime).toISOString();
				}
				
				var Images = UploadedImages;
				var  thisRef1;
				
				if(isSpecificCustomerCheck){
					customer_selection="prerequisite";
					$(".customer_list li").each(function() { 
					  CustomerIDs.push($(this).attr("id"));
					});
				}
				
				
				if(!isusageLimit){
					usage_limit = null;
				}
				if(isentireOrderCheck){
					target_selection = "all";
				}
				if(isSpecificCollectCheck){
				$(".collection_list li").each(function() { 
					collectionIDs.push($(this).attr("id"));
				});
				}
				if(isSpecificProductCheck){
				$(".product_list li").each(function() { 
				    productIDs.push($(this).attr("id"));
				});
				}
				
				if($("#prerequisitesTypeSelect").val() == "PRODUCTS"){
					$(".product_buy li").each(function() { 
				    prerequisite_p.push($(this).attr("id"));
				});
				}
				
				if($("#prerequisitesTypeSelect").val() == "COLLECTIONS"){
					$(".collection_buy li").each(function() { 
				    prerequisite_p.push($(this).attr("id"));
				});
				}
				
				if($("#itemEntitlementsType").val() == "PRODUCTS"){
					$(".product_get li").each(function() { 
				    entitled_p.push($(this).attr("id"));
				});
				}
				
				if($("#itemEntitlementsType").val() == "COLLECTIONS"){
					$(".collection_get li").each(function() { 
				    entitled_c.push($(this).attr("id"));
				});
				}
				if(isPercentage){
					PercentagePR("percentage",name,description,Address,category,offer,Images,code,target_selection,percentagevalue,usage_limit,customer_selection,isSpecificCollectCheck,collectionIDs,isSpecificProductCheck,productIDs,dateTime,endDate,CustomerIDs,allocation_method);
					if(update){
						UpdateCouponPR(PRID,"percentage",name,description,Address,category,offer,Images,code,target_selection,percentagevalue,usage_limit,customer_selection,isSpecificCollectCheck,collectionIDs,isSpecificProductCheck,productIDs,dateTime,endDate,CustomerIDs,allocation_method);
					}
				}
				if(isFixed){
					PercentagePR("fixed_amount",name,description,Address,category,offer,Images,code,target_selection,fixedvalue,usage_limit,customer_selection,isSpecificCollectCheck,collectionIDs,isSpecificProductCheck,productIDs,dateTime,endDate,CustomerIDs,allocation_method);
					if(update){
						UpdateCouponPR(PRID,"fixed_amount",name,description,Address,category,offer,Images,code,target_selection,fixedvalue,usage_limit,customer_selection,isSpecificCollectCheck,collectionIDs,isSpecificProductCheck,productIDs,dateTime,endDate,CustomerIDs,allocation_method,"")
					}
				}
				if(isFreeShipping){
					PercentagePR("fixed_amount",name,description,Address,category,offer,Images,code,target_selection,shippingvalue,usage_limit,customer_selection,isSpecificCollectCheck,collectionIDs,isSpecificProductCheck,productIDs,dateTime,endDate,CustomerIDs,allocation_method);
					if(update){
						UpdateCouponPR(PRID,"fixed_amount",name,description,Address,category,offer,Images,code,target_selection,shippingvalue,usage_limit,customer_selection,isSpecificCollectCheck,collectionIDs,isSpecificProductCheck,productIDs,dateTime,endDate,CustomerIDs,allocation_method);
					}
				}
				if(isbuy){
					PercentagePR("percentage",name,description,Address,category,offer,Images,code,"entitled",shippingvalue,usage_limit,customer_selection,isSpecificCollectCheck,collectionIDs,isSpecificProductCheck,productIDs,dateTime,endDate,CustomerIDs,allocation_method,entitled_quantity,prerequisite_quantity,prerequisite_p,prerequisite_c,entitled_p,entitled_c);
					if(update){
						UpdateCouponPR(PRID,"percentage",name,description,Address,category,offer,Images,code,"entitled",shippingvalue,usage_limit,customer_selection,isSpecificCollectCheck,collectionIDs,isSpecificProductCheck,productIDs,dateTime,endDate,CustomerIDs,allocation_method,entitled_quantity,prerequisite_quantity,prerequisite_p,prerequisite_c,entitled_p,entitled_c);
					}
				}
			}
			
			function PercentagePR(value_type,name,description,Address,category,offer,Images,code,target_selection,value,usage_limit,customer_selection,isSpecificCollectCheck,collectionIDs,isSpecificProductCheck,productIDs,startAt,enddateTime,CustomerIDs,allocation_method,entitled_quantity=null,prerequisite_quantity=null,prerequisite_p = null,prerequisite_c=null,entitled_p=null,entitled_c=null){
				var target_type = "line_item";
				var data = {
					  "price_rule": {
						"title": code,
						"target_type": target_type,
						"target_selection": target_selection,
						"allocation_method": allocation_method,
						"value_type": value_type,
						"value": "-"+value+".0",
						"customer_selection": customer_selection,
						"entitled_collection_ids": collectionIDs,
						"entitled_product_ids": productIDs,
						"starts_at": startAt,
						"prerequisite_customer_ids":CustomerIDs,
						"usage_limit":usage_limit
					  }
					}
					
					if(entitled_quantity != null,prerequisite_quantity != null,prerequisite_p != null,prerequisite_c != null,entitled_p != null,entitled_c != null){
					 data = {
					  "price_rule": {
						"title": code,
						"target_type": target_type,
						"target_selection": target_selection,
						"allocation_method": allocation_method,
						"value_type": value_type,
						"value": "-"+value+".0",
						"customer_selection": customer_selection,
						"entitled_collection_ids": collectionIDs,
						"entitled_product_ids": productIDs,
						"starts_at": startAt,
						"prerequisite_customer_ids":CustomerIDs,
						"usage_limit":usage_limit,
						"entitled_quantity":entitled_quantity,
						"prerequisite_quantity":prerequisite_quantity,
						"prerequisite_p":prerequisite_p,
						"prerequisite_c":prerequisite_c,
						"entitled_p":entitled_p,
						"entitled_c":entitled_c
					  }
					}
					}
					var PRID=0;
					const PostPR = async () => {
						const response_ = await fetch('https://cors-anywhere.herokuapp.com/https://store-mycommunity-today.myshopify.com/admin/api/2020-04/price_rules.json', {
							method: 'POST',
							body:  JSON.stringify(data),
							headers: {
							'Content-Type': 'application/json',
							'Authorization':'Basic MTgyOTJlYjhmZmE4ODNhMTBlM2JkNGM5NzdhN2MyM2M6c2hwcGFfOGE1NTdmMTc4OTNjYjQ1YmQyZWRkZmYxOTk3NDZiNjU=',
						}
					});
					 const Data = await response_.json();
					 PRID = Data.price_rule.id;
					 PostCoupon();	
					 PostCoupononServer();
					}
					PostPR();
					const PostCoupon = async () => {
						var body = {
							  "discount_code": {
								"code": code
							  }
							}
						const response_ = await fetch('https://cors-anywhere.herokuapp.com/https://store-mycommunity-today.myshopify.com/admin/api/2020-04/price_rules/'+PRID+'/discount_codes.json', {
							method: 'POST',
							body:  JSON.stringify(body),
							headers: {
							'Content-Type': 'application/json',
							'Authorization':'Basic MTgyOTJlYjhmZmE4ODNhMTBlM2JkNGM5NzdhN2MyM2M6c2hwcGFfOGE1NTdmMTc4OTNjYjQ1YmQyZWRkZmYxOTk3NDZiNjU=',
						}
						});
					}
				    const PostCoupononServer = async () => {
						var body = {
								"address": Address,
								"cateogry": category,
								"code": code,
								"description": description,
								"expiryDate": "10/03/2020",
								"id": PRID,
								"image": Images,
								"imagelogo": $("#myImg").attr("src"),
								"name": name,
								"offer": offer,
								"businessId": localStorage.getItem('sinid'),
								"discalmer": null,
								"place_id": null,
								"website": null,
								"location":null,
								"isPromoted": false,
								"priority": null,
							}
						const response_ = await fetch('https://proxy.actv.05media.com/rest/private/sincommunityhubservice/addCoupon', {
							method: 'POST',
							body:  JSON.stringify(body),
							headers: {
							'Content-Type': 'application/json',
							'Authorization':localStorage.getItem('_token')
						}
						});
						 const responseCode = await response_.ok;
						 if(responseCode){
							 window.location.href = "creatingcoupons.html";
						 }
					}
			}
			function UpdateCouponPR(PRID,value_type,name,description,Address,category,offer,Images,code,target_selection,value,usage_limit,customer_selection,isSpecificCollectCheck,collectionIDs,isSpecificProductCheck,productIDs,startAt,enddateTime,CustomerIDs,allocation_method,entitled_quantity=null,prerequisite_quantity=null,prerequisite_p = null,prerequisite_c=null,entitled_p=null,entitled_c=null){
				var target_type = "line_item";
				var data = {
					  "price_rule": {
						"title": code,
						"target_type": target_type,
						"target_selection": target_selection,
						"allocation_method": allocation_method,
						"value_type": value_type,
						"value": "-"+value+".0",
						"customer_selection": customer_selection,
						"entitled_collection_ids": collectionIDs,
						"entitled_product_ids": productIDs,
						"starts_at": startAt,
						"prerequisite_customer_ids":CustomerIDs,
						"usage_limit":usage_limit
					  }
					}
					
					if(entitled_quantity != null,prerequisite_quantity != null,prerequisite_p != null,prerequisite_c != null,entitled_p != null,entitled_c != null){
					 data = {
					  "price_rule": {
						"title": code,
						"target_type": target_type,
						"target_selection": target_selection,
						"allocation_method": allocation_method,
						"value_type": value_type,
						"value": "-"+value+".0",
						"customer_selection": customer_selection,
						"entitled_collection_ids": collectionIDs,
						"entitled_product_ids": productIDs,
						"starts_at": startAt,
						"prerequisite_customer_ids":CustomerIDs,
						"usage_limit":usage_limit,
						"entitled_quantity":entitled_quantity,
						"prerequisite_quantity":prerequisite_quantity,
						"prerequisite_p":prerequisite_p,
						"prerequisite_c":prerequisite_c,
						"entitled_p":entitled_p,
						"entitled_c":entitled_c
					  }
					}
					}
					const PostPR = async () => {
						const response_ = await fetch('https://cors-anywhere.herokuapp.com/https://store-mycommunity-today.myshopify.com/admin/api/2020-04/price_rules/'+PRID+'.json', {
							method: 'PUT',
							body:  JSON.stringify(data),
							headers: {
							'Content-Type': 'application/json',
							'Authorization':'Basic MTgyOTJlYjhmZmE4ODNhMTBlM2JkNGM5NzdhN2MyM2M6c2hwcGFfOGE1NTdmMTc4OTNjYjQ1YmQyZWRkZmYxOTk3NDZiNjU=',
						}
					});
					 PostCoupon();	
					 PostCoupononServer();
					}
					PostPR();
					const PostCoupon = async () => {
						var body = {
							  "discount_code": {
								"code": code
							  }
							}
						const response_ = await fetch('https://cors-anywhere.herokuapp.com/https://store-mycommunity-today.myshopify.com/admin/api/2020-04/price_rules/'+PRID+'/discount_codes/507328175.json', {
							method: 'POST',
							body:  JSON.stringify(body),
							headers: {
							'Content-Type': 'application/json',
							'Authorization':'Basic MTgyOTJlYjhmZmE4ODNhMTBlM2JkNGM5NzdhN2MyM2M6c2hwcGFfOGE1NTdmMTc4OTNjYjQ1YmQyZWRkZmYxOTk3NDZiNjU=',
						}
						});
					}
				    const PostCoupononServer = async () => {
						var body = {
								"address": Address,
								"cateogry": category,
								"code": code,
								"description": description,
								"expiryDate": "10/03/2020",
								"id": PRID,
								"image": Images,
								"imagelogo": $("#myImg").attr("src"),
								"name": name,
								"offer": offer,
								"businessId": localStorage.getItem('sinid'),
								"discalmer": null,
								"place_id": null,
								"website": null,
								"location":null,
								"isPromoted": false,
								"priority": null,
							}
						const response_ = await fetch('https://proxy.actv.05media.com/rest/private/sincommunityhubservice/addCoupon', {
							method: 'POST',
							body:  JSON.stringify(body),
							headers: {
							'Content-Type': 'application/json',
							'Authorization':localStorage.getItem('_token')
						}
						});
						 const responseCode = await response_.ok;
						 if(responseCode){
							 window.location.href = "creatingcoupons.html";
						 }
					}
			}
			function DeleteCoupons() {
				if(confirm("Are you sure to delete?")){
				var ids = [];
				var discountid;
				var prid;
				$(".checkboxclicks").each(function() {
					if(this.checked){					
						ids.push($(this).attr("id"));
					}
				});
				ids.forEach(function(item,index){
				 prid = item;
				 const DeleteCoupons_server = async () => {
					const response_ = await fetch('https://proxy.actv.05media.com/rest/private/sincommunityhubservice/deleteCoupon/'+item, {
							method: 'DELETE',
							headers: {
							'Content-Type': 'application/json',
							'Authorization':localStorage.getItem('_token')
						}
						});
					}
					const DeleteCoupons_shopify_ = async () => {
							const response_ = await fetch('https://cors-anywhere.herokuapp.com/https://store-mycommunity-today.myshopify.com/admin/api/2020-04/price_rules/'+prid+'/discount_codes/'+discountid+'.json', {
							method: 'DELETE',
							headers: {
							'Content-Type': 'application/json',
							'Authorization':'Basic MTgyOTJlYjhmZmE4ODNhMTBlM2JkNGM5NzdhN2MyM2M6c2hwcGFfOGE1NTdmMTc4OTNjYjQ1YmQyZWRkZmYxOTk3NDZiNjU=',
							}
						});
					}
					const DeleteCoupons_shopify = async () => {
					const response_ = await fetch('https://cors-anywhere.herokuapp.com/https://store-mycommunity-today.myshopify.com/admin/api/2020-04/price_rules/'+item+'/discount_codes.json', {
							method: 'GET',
							headers: {
							'Content-Type': 'application/json',
							'Authorization':'Basic MTgyOTJlYjhmZmE4ODNhMTBlM2JkNGM5NzdhN2MyM2M6c2hwcGFfOGE1NTdmMTc4OTNjYjQ1YmQyZWRkZmYxOTk3NDZiNjU=',
						}
						});
						const responsejson = await response_.json();
						responsejson.discount_codes.forEach(function(discount,index){
							discountid = discount.id;
							DeleteCoupons_shopify_();
						});
					}		
					DeleteCoupons_server();
					DeleteCoupons_shopify();
					$("#"+item).css("display","none");
				});
				}
			}
			
			function Autosearch(input,type){
			  var query = document.getElementById(input).value;
			  var Data;
			  var Html="";
			  var found_results;
			  if(query.length >= 2){
			  if(type == "product"){
				  Data = ProductData;
				     found_results = $.grep(Data.products, function(v) {
						return v.title.toLowerCase().indexOf(query) > -1;
				   });
			   found_results.forEach(function(item,index){
			   if(item.image){
			   img = item.image.src;
			  }
				Html += '<div><input class="productCheck" type="checkbox" data-name="'+item.title.replace('"','')+'" data-image="'+img+'" value="'+item.id+'"><img style="width:40px;" src="'+img+'" /><div style="margin-left: 40px;display: inline-block;min-width: 420px;">'+item.title +'</div><span>' +item.variants[0].inventory_quantity+" available"+ '</span><span style="margin-right: 40px;margin-left: 40px;">' +"$"+item.variants[0].price+'</span></div>'
			  });
			  if(Html == ""){
				Html = "<div><p>No results found for "+query+"</p></div>"
			  }
			   $(".autoProductresultdiv").html(Html);
			   $(".Productresultdiv").css("display","none")
			   $(".autoProductresultdiv").css("display","block")
			  } else if(type == "collection"){
				  Data = CollectionData;
				     found_results = $.grep(Data.custom_collections, function(v) {
						return v.title.toLowerCase().indexOf(query) > -1;
				  });
				   found_results.forEach(function(item,index){
				Html += '<div><input class="collectionCheck" type="checkbox" data-name="'+item.title.replace('"','')+'" value="'+item.id+'"><div style="margin-left: 40px;display: inline-block;min-width: 420px;">'+item.title +'</div></div>'
			  });
			  if(Html == ""){
				Html = "<div><p>No results found for "+query+"</p></div>"
			  }
			  $(".autoCollectionresultdiv").html(Html);
			  $(".Collectionresultdiv").css("display","none");
			   $(".autoCollectionresultdiv").css("display","block");
			  }
			  } else{
				  if(type == "product"){
					  $(".Productresultdiv").css("display","block");
					  $(".autoProductresultdiv").css("display","none")
				  } else if(type == "collection"){
				    $(".Collectionresultdiv").css("display","block");
					$(".autoCollectionresultdiv").css("display","none");
				  }
			  }
			};
			
			function ResetCoupons() {
				document.getElementById('entcname1').value  = "";
			document.getElementById('entcname').value  = "";
			document.getElementById('printdes').value  = "";
			document.getElementById('printoffer').value = "";
			document.getElementById('offer').value  = "";
			document.getElementById('entdesc').value  = "";
			document.getElementById('category').value = "";
			document.getElementById('tersconditons').value = "";
			document.getElementById('address1').value  = "";
			document.getElementById('expiraydate2').value  = "";
			document.getElementById('output').src  = "";
			document.getElementById("output").style.display="none";
			document.getElementById("slider").style.display="none";
			document.getElementById('coupondesc').value = "";
			document.getElementById('DiscountCodeTextField').value = "";
			
				$('.richText-editor').html("")
			
			var updatebtn = document.getElementById('updatebtn');
				updatebtn.style.display = "none";

				var addnewbtn121 = document.getElementById('addnewbtn121');
				addnewbtn121.style.display = "none";

				var confbtncou = document.getElementById('confim_copons');
				confbtncou.style.display = "inline-block";

				var cancelbtn = document.getElementById('cancelbtn');
				cancelbtn.style.display = "inline-block";
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