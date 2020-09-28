

var tersconditons = document.getElementById('tersconditons');
var UploadedImages = [];	
var SelectedProducts = 0;
var ProductSelected= "product1";
var currentForm = "AppDealform1";
var cropWidth=490;
var cropHeight = 340;
var productno = 1;
var productIds = [];
var inputBox = document.getElementById('entcname');
var totalProducts = 1;
var itemclicked= "FourProductTemplate";
var isDeal = false;
var updatedData = [];
var updatedDataCoupons = [];
var templateSelected = "";	
var iswebImg = false;
var productPosted = 0;
var googlePlaceID;
var encodeImaged = [];
var collectionId;
var isTemplateUpdate= false;

function convertFileToDataURLviaFileReader(url) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var reader = new FileReader();
    reader.onloadend = function() {
      encodeImaged.push(reader.result);
    }
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', "https://cors-anywhere.herokuapp.com/"+url);
  xhr.responseType = 'blob';
  xhr.send();
}


inputBox.onkeyup = function(){
    document.getElementById('printcname').value = inputBox.value;
}


function logoutuser(){
			window.sessionStorage.removeItem("_token");
			window.location.href = "login.html";
		}
$(".deoffdesinput").click(function(){
	window.location.href = "creatingcoupons.html#"+currentForm;
	if(currentForm == "updateProductTemplate"){
		window.location.href = "creatingcoupons.html#AppDealform1";
	}
});
$(".offerdes").click(function(){
	window.location.href = "creatingcoupons.html#tersconditons";
});
$(".product .productdesc").click(function(){
	window.location.href = "creatingcoupons.html#"+currentForm;
	if(currentForm == "updateProductTemplate"){
		window.location.href = "creatingcoupons.html#AppDealform1";
	}
});

var inputBox1 = document.getElementById('offer');

inputBox1.onkeyup = function(){
    document.getElementById('printoffer').value = inputBox1.value;
	document.getElementById('oferrdescdublicate').value = inputBox1.value;
	
}

$(".titleinput").keyup(function() {
	var txt = $(this).val();
	$("#"+currentForm+ " #productTitle"+productno).val(txt);
	if(currentForm == "updateProductTemplate"){
		$("#AppDealform1 #productTitle"+productno).val(txt);
	}
	$(".demoTitle").val(txt);
});	

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
			  isDeal = true;
			  cropWidth=1280;
			  cropHeight = 720;
			  ylw = document.getElementById("btncolor");
			  ylw.style.boxShadow = "0px 2px 4px black";
			  ylw.style.background = "white";
			  
			  document.getElementById("dealsimage").src="img/Icons/dealsoff.png";
			   searchdeals = document.getElementById("searchdeals");
			  searchdeals.style.display = "block"; 
			  
			  
			   $(".couponssection").css("display","none");
			   $(".dealsSection").css("display","block");
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
		  
			  
		  function DeleteDeals() {
			  var ids = [];
				var discountid;
				var prid;
				$(".dealsCheckboxes").each(function() {
					if(this.checked){					
						ids.push($(this).attr("id"));
					}
				});
				if(ids){
				if(confirm("Are you sure to delete?")){
				ids.forEach(function(item,index){
				 prid = item;
				 const DeleteDeals_server = async () => {
					const response_ = await fetch('https://proxy.actv.05media.com/rest/private/sincommunityhubservice/deleteDeal/'+item, {
							method: 'DELETE',
							headers: {
							'Content-Type': 'application/json',
							'Authorization':sessionStorage.getItem('_token')
						}
						});
					}
					const DeleteDeals_shopify_ = async () => {
							const response_ = await fetch('https://cors-anywhere.herokuapp.com/https://store-mycommunity-today.myshopify.com/admin/api/2020-07/products/'+item+'.json', {
							method: 'DELETE',
							headers: {
							'Content-Type': 'application/json',
							'Authorization':'Basic MTgyOTJlYjhmZmE4ODNhMTBlM2JkNGM5NzdhN2MyM2M6c2hwcGFfOGE1NTdmMTc4OTNjYjQ1YmQyZWRkZmYxOTk3NDZiNjU=',
							}
						});
					}
					DeleteDeals_server();
					DeleteDeals_shopify_();
					$("#"+item).parent().parent().remove();
				});
				}
				}
				ResetDeal();
		  }
		  function mycupons()
		  {
			   isDeal = false;
			    cropWidth=490;
				cropHeight = 340;
			   $(".couponssection").css("display","block");
			   $(".dealsSection").css("display","none");
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
		  var paths = [];
		  var count =0;
		  
		  function closeImageModal(id) {
			  $("#"+id).css("display","none");
			  iswebImg = false;
		  }
		  function OnclickOnPreview() {
			  var desc = $(".Previewdesc").html();
			  var backg =$("#PreviewCoupon #cplframe").css("background-image");
			  var offer =  $(".offerpreview").html();
			  if(desc != "Offer description here*"){
			  $("#printdes").html(desc);
			  $("#coupondesc_c").val(desc);
			   $("#Couponform .richText-editor").html(desc);
			  }else{
				  $("#printdes").html("")
				  $("#printdes").attr("placeholder",desc);
				  $("#coupondesc_c").val("");
				  $(".richText-editor").html("");
			  }
			  if(offer != "Your offer here *"){
			  $("#printoffer").val(offer);} else {
				  $("#printoffer").val("")
				  $("#printoffer").attr("placeholder",offer)
			  }
			  $(".cupons_intact1").addClass("preview");
			  $("#AddImagestoslider").html($(".previewSlider").html());
			  $("#imagebackground").attr('src',backg.replace('url(','').replace(')','').replace(/\"/gi, ""));
			  $(".ImageUploadDiv4").html($(".previewSlider").html());
			  
			document.getElementById('entcname1').value  = "";
			document.getElementById('offer').value  = "";
			document.getElementById('entdesc').value  = "";
			document.getElementById('category').value = "";
			document.getElementById('tersconditons').value = "";
			document.getElementById('expiraydate2').value  = "";
			document.getElementById('output').src  = "";
			document.getElementById('coupondesc_c').value = desc;
			document.getElementById('DiscountCodeTextField').value = ""
			document.getElementById('percentageValueField').value = ""
			  
		  }
		   function onEnterPress(e) {
				if (e.keyCode === 13) {
					$('#imagesearch2').trigger("click");
				}
			};
		  function onClickImageButton() {
			  UploadedImages = []
			  paths = [];
			  encodeImaged = [];
			  if(isDeal){
				  $("#close-image-coupons").css("display","none");
				$("#"+templateSelected + " #"+ ProductSelected+ " .slider").css("display","none");
				$("#"+templateSelected + " #"+ ProductSelected+ " .ImageLoader").css("display","inherit");
				$(".ImageUploadDiv4 li img").each(function() {
					if($(this).attr("src").indexOf("base64") == -1){
						convertFileToDataURLviaFileReader($(this).attr("src"));
					} else {
					encodeImaged.push($(this).attr("src"));
					}
					if($(this).attr("src").indexOf("base64") > -1){
					console.log(dataURLtoBlob($(this).attr("src")));
					var uniqueId = Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
					var  thisRef1;
					thisRef1 = firebase.storage().ref("/fieupload/"+uniqueId);
					thisRef1.put(dataURLtoBlob($(this).attr("src"))).then(function(url1) {
					console.log('logo has been uploaded!');
					var urlPromise1 = thisRef1.getDownloadURL();
					setTimeout(function(){
					urlPromise1.then(url => {
					
					var id = "DealImg"+($("#"+currentForm+" .previewIMG img").length+1+Imgcount);
					var html_ = '<li class="'+id+'"><img src="'+url+'" /></li>'
					var remove = 'removeImage("'+id+'")';
					var click = 'openPop("'+id+'")';
					previewImg = "<li><img src='"+url+"' id='"+id+"' onclick='"+click+"' ><span onclick='"+remove+"' class='removeImage'><i class='fa fa-times' aria-hidden='true'></i></span></li>"
					if(iswebImg){
						$("#"+currentForm+" .previewIMG").append(previewImg);
					}
					if(currentForm == "updateProductTemplate"){
						$("#AppDealform1 "+curremtCropid).attr('src', url);
						if(iswebImg){
						$("#AppDealform1 .previewIMG").append(previewImg);
						}
					}
					$(".ImageLoader").css("display","none");
					$("#"+templateSelected + " #"+ ProductSelected+ " .slider").css("display","block");
					$("#"+templateSelected + " #"+ ProductSelected+ " .imgdiv  #AddImagestoslider").prepend(html_)
					$("#"+templateSelected + " #"+ ProductSelected+ " .slider").css("display","block");
					$("#"+SelectedProducts+ " #"+ ProductSelected + " .imgdiv #AddImagestoslider"+ " ."+curremtCropid.replace("#","")).html(html);
					$(".demoImage").attr("src",url);
					$(".demoImage").css("display","block");
					var li_id = $("#update_dealbtn").attr("data-id");
					$("#li"+li_id+ " #dlimageoutput").attr("src",url);
					$("#close-image-coupons").css("display","none");
						iswebImg = false;
						return false;
					});
					}, 2000);
				});
				}
				});
			  }
			  if(!isDeal){
			  var html = $(".ImageUploadDiv4").html();
				$("#AddImagestoslider").html(html);
				$("#close-image-coupons").css("display","none");
				$(".slider").css("display","none");
				$(".ImageLoader").css("display","block");
			  $("#AddImagestoslider li img").each(function() { 
					if($(this).attr("src").indexOf("base64") > -1){
					console.log(dataURLtoBlob($(this).attr("src")));
					var uniqueId = Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
					thisRef1 = firebase.storage().ref("/fieupload/"+uniqueId);
					paths.push("fieupload/"+uniqueId);
					thisRef1.put(dataURLtoBlob($(this).attr("src"))).then(function(url1) {
					console.log('logo has been uploaded!');
					$(".slider").css("display","block");
					$(".ImageLoader").css("display","none");
					var urlPromise1 = thisRef1.getDownloadURL();
					urlPromise1.then(url => {
						UploadedImages.push({"imageUrl":url});
					});
				});
				} else {
					    var startpoint = $(this).attr("src").indexOf("fieupload");
					    var endpoint = $(this).attr("src").indexOf("?");
						if(startpoint > -1){
						paths.push($(this).attr("src").substring(startpoint,endpoint));}
						UploadedImages.push({"imageUrl":$(this).attr("src")});
						 var html = $(".ImageUploadDiv4").html();
						 $("#AddImagestoslider").html(html);
					}
				});
				$(".previewImg").attr("src",$("#AddImagestoslider li:first-child img").attr('src'));
				var li_id = $("#updatebtn").attr("data-id");
				$("#"+li_id+ " #cplframe .rigtimage img").attr("src",$("#AddImagestoslider li:first-child img").attr('src'));
				$(".previewSlider").html($("#AddImagestoslider").html());
				$(".previewImg").css("display","block");
				$("#previewimg").hide()
			  }
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
			
			function showDemo() {
				var id = $(".demoli").attr("data-id");
				if(!id){
					ResetDeal();
					return false;
				}
				$("#"+id).trigger("click");
			}
			function copyTitle(id) {
				var textValue = $("#"+id).val();
				var li_id = $("#update_dealbtn").attr("data-id");
				$("#"+SelectedProducts + " #"+ProductSelected+ " input").val(textValue);
				if(currentForm == "updateProductTemplate"){
					$("#"+SelectedProducts + " #"+ProductSelected+ " .nameproduct").val(textValue);
				}
				$("#li"+li_id+ " .decoffer").html(textValue);
				$(".demoTitle").val(textValue);
				$(".demoli").attr("data-id",itemclicked);
			}
			function copyDesc(id) {
				var textValue = $("#"+id).val();
				$("#"+SelectedProducts + " #"+ProductSelected+ " textarea").val(textValue);
				$(".demodesc").html(textValue)
			}
			function dragNdrop(event) {
				var fileName = event.target.files[0];
				var preview = $("#AppDealform1 .previewIMG");
				var previewImg = "";
				var id = "DealImg"+($("#"+currentForm+" .previewIMG img").length+1);
				if(currentForm == "updateProductTemplate"){
					id = "DealImg"+($("#AppDealform1 .previewIMG img").length+1);
				}
				if(event.target.files){
				var uniqueId = Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
					thisRef1 = firebase.storage().ref("/fieupload/"+uniqueId);
					paths.push("fieupload/"+uniqueId);
					$("#"+currentForm+" .loaderImgs img").css("display","inline");
					if(currentForm == "updateProductTemplate"){
						$("#AppDealform1 .loaderImgs img").css("display","inline");
					}
					thisRef1.put(event.target.files[0]).then(function(url1) {
					console.log('logo has been uploaded!');
					$("#"+templateSelected + ".slider").css("display","block");
					var urlPromise1 = thisRef1.getDownloadURL();
					urlPromise1.then(url => {
						fileName = url;
						var html = '<li class="'+id+'"><img src="'+fileName+'" /></li>'
						var remove = 'removeImage("'+id+'")';
						var click = 'openPop("'+id+'")';
						previewImg = "<li><img src='"+fileName+"' id='"+id+"' onclick='"+click+"' ><span onclick='"+remove+"' class='removeImage'><i class='fa fa-times' aria-hidden='true'></i></span></li>"
						preview = $("#"+currentForm+" .previewIMG");
						if(currentForm == "updateProductTemplate"){
							preview = $("#AppDealform1 .previewIMG");
						}
						preview.append(previewImg);
						$("#"+SelectedProducts+ " #"+ ProductSelected +" .imgdiv  #AddImagestoslider").append(html);
						$("#"+currentForm+" .loaderImgs img").css("display","none");
						if(currentForm == "updateProductTemplate"){
							$("#AppDealform1 .loaderImgs img").css("display","none");
						}
						$(".demoImage").attr("src",fileName);
						$(".demoImage").css("display","block");
						var li_id = $("#update_dealbtn").attr("data-id");
						$("#"+li_id+ "#dlimageoutput").attr("src",fileName);
						$(".demoli").attr("data-id",itemclicked);
						$("#"+SelectedProducts+ " #"+ ProductSelected +" .imgdiv .slider").css('display','block');
						$("#"+SelectedProducts+ " #"+ ProductSelected +" .imgdiv").attr("onclick","");
						if(currentForm == "updateProductTemplate"){
							$("#updateProductTemplate .imgdiv  #AddImagestoslider").append('<li><img class="'+id+'" style="max-height: 356px" src="'+fileName+'" /></li>');
							$("#updateProductTemplate .imgdiv  .slider").css("display","block");
						}
					});
					});
				}
			}
			function updateDeal(id = 0){
				$(".saveloader").css("display","inline");
				var pid = $("#update_dealbtn").attr("data-id");
				var productID=0;	
				var i = 1;
				if(id != 0){
					i= productno;
					pid = id;
				}
				
				var title1 = $("#productTitle"+i).val();
				var desc1 = $("#productdescription"+i).val();
				var vendor = $(".deconame").val();
				var category = $("#Dealselect").val();
				var Images = [];
				encodeImaged.forEach(function(item,index){
					Images.push({"attachment":item.replace("data:image/jpeg;base64,","")});
				});
				var startatDate = $("#StartEmbeddedDatePickerDeals"+i).val();
				var startatTime = $("#StartTimeFieldDeals"+i).val();
				var dateTime = new Date(startatDate + ' ' +  startatTime).toISOString();
				var price = $("#AppDealform"+i + " #pricing"+i).val();
				var sku = $("#AppDealform"+i + " #InventoryCardSku"+i).val();
				var compare_at_price = $("#AppDealform"+i + " #compareAtPrice"+i).val();
				var barcode = $("#AppDealform"+i + " #InventoryCardBarcode").val();
				var grams = $("#AppDealform"+i + " #AdjustQuantityPopoverTextFieldActivator").val();
				var weight = $("#AppDealform"+i + " #ShippingCardWeight").val();
				var unit = $("#AppDealform"+i + " .weigthUnit").html();
				$("#li"+pid+ " .decoffer").html(title1);
				$("#li"+pid+ " .deoffdesinput").html(desc1);
				var sampleImgs = [];
				$("#AppDealform1 .previewIMG li img").each(function() {
					sampleImgs.push({"src":$(this).attr("src")});
				});
				updatedArray = { pid: {
							"id": pid,
							"title": title1,
							"desc1": desc1,
							"vendor": vendor,
							"product_type": "",
							"images": sampleImgs,
							"price": price,
							"sku":sku,
							"compare_at_price":compare_at_price,
							"barcode":barcode,
							"grams":grams,
							"weight":weight,
							"unit": unit,
						  }
						}
				updatedData = updatedData.filter(element => element.pid.id != pid);
				updatedData.push(updatedArray);
				var variants = [
							  {
								"price": price,
								"sku": sku,
								"compare_at_price": compare_at_price,
								"created_at": dateTime,
								"barcode": barcode,
								"inventory_quantity": grams,
								"weight": weight,
								"weight_unit": unit,
								"requires_shipping": true
							  }
							];
				var data = { "product": {
							"title": title1,
							"body_html": desc1,
							"vendor": vendor,
							"product_type": "",
							"images": Images,
							"variants": variants,
						  }
						}
			const PostdealServer = async () => {
					Images = [];
					$("#AppDealform1 .previewIMG li img").each(function() {
					Images.push({"imageUrl":$(this).attr("src")});
					});
						var body = {
								"address": $(".businessField").val(),
								"cateogry": $("#Dealselect").val(),
								"code": $("#codeDeal").val(),
								"description": desc1,
								"discalmer": null,
								"expiryDate": null,
								"id": pid,
								"image": Images,
								"imagelogo": $(".deloutput").attr("src"),
								"name": title1,
								"offer": "GRILL",
								"place_id": googlePlaceID.place_id,
								"website": null,
								"location": {
									"latitude": googlePlaceID.geometry.location.lat,
									"longitude":googlePlaceID.geometry.location.lng
								},
								"isPromoted": null,
								"businessId": sessionStorage.getItem('sinid'),
							}
							console.log(JSON.stringify(body));
						const response_ = await fetch('https://proxy.actv.05media.com/rest/private/sincommunityhubservice/addDeal', {
							method: 'POST',
							body:  JSON.stringify(body),
							headers: {
							'Content-Type': 'application/json',
							'Authorization':sessionStorage.getItem('_token')
						}
						});
							 $(".saveloader").css("display","none");
							 $(".showMessage").html("Deal has been updated sucessfully.").delay(2000).fadeOut(500);
						 const responseCode = await response_.ok;
						 if(responseCode){
							
						 } else {
							 $(".saveloader").css("display","none");
							 $(".showMessage").html("Something went wrong,please try it again.").delay(2000).fadeOut(500);
						 }
					}
					
					const Postdeal = async () => {
						const response_ = await fetch('https://cors-anywhere.herokuapp.com/https://store-mycommunity-today.myshopify.com/admin/api/2020-07/products/'+pid+'.json', {
								method: 'PUT',
								body:  JSON.stringify(data),
								headers: {
								'Content-Type': 'application/json',
								'Authorization':'Basic MTgyOTJlYjhmZmE4ODNhMTBlM2JkNGM5NzdhN2MyM2M6c2hwcGFfOGE1NTdmMTc4OTNjYjQ1YmQyZWRkZmYxOTk3NDZiNjU=',
							}
						});
						 const Data = await response_.json();
						 PostdealServer();
						}
						const Postdeal__ = async () => {
						await Postdeal();
						}
						Postdeal__();
					}
			function EmbedYoutube(){
				var youtubeLink = $("#PolarisTextField13").val();
				if(youtubeLink.indexOf("www.youtube.com") > -1){
					var html = '<iframe width="160" height="120" onclick="changeHeight(iframe'+$('#previewIMG iframe').length+')" id="iframe'+$('#previewIMG iframe').length+'" src="'+youtubeLink.replace("watch?v=","embed/")+'"></iframe>'
					$("#"+currentForm+ " .previewIMG").append(html);
				}
				$("#UploadYoutube").css("display","none");
			};
			function changeHeight(id){
				$("#"+id).css("height","400");
				$("#"+id).css("width","800");
			};
			function showmedia(){
				$(".mediaDropDown").toggle();
			}
			function openRelatedProduct(id,num){
				var triggerid = $("."+id).attr("id");
				$("#"+triggerid).trigger("click");
				if($("#"+triggerid).length == 0){
					collectionId = id.split('-')[1];
					ResetDeal();
					$("#SimpleDealTemplate").trigger("click");
					totalProducts=num;
					productno=id.split('-')[0].replace('li','');
					isTemplateUpdate = true;
					
				}
			}
			function closePOP(){
				$("#UploadYoutube").css("display","none");
				$("#UploadYoutube").css("display","none");
			}
			function ShowModal(){
				$(".mediaDropDown").toggle();
				$("#UploadYoutube").css("display","block");
			}
			function drag() {
				document.getElementById('uploadFile').parentNode.className = 'draging dragBox';
			}
			function drop() {
				document.getElementById('uploadFile').parentNode.className = 'dragBox';
			}
			function pricing(id) {
				var cost = $("#PolarisTextField4").val();
				var netsale = $("#PolarisTextField2").val();
				var margin=0;
				var profit=0;
				if(cost && netsale){
					margin = ([parseInt(netsale) - parseInt(cost)] / parseInt(netsale)) * 100;
					profit = [parseInt(netsale) - parseInt(cost)]
				}
				$(".marginValue").html(margin+"%");
				$(".profitValue").html("$ "+profit);
			}
		    function ResetDeal() {
				$(".templateDiv").css("display","block");
				$(".rightpos").css("display","none");
				$("#delbackgroundurl").css("display","none");
				$("#AppFrameMainDeal").css("display","block");
				$("#Product_Number_1").css("display","none");
				$("#Product_Number_2").css("display","none");
				$("#Product_Number_3").css("display","none");
				$("#Product_Number_4").css("display","none");
				$("#AppDealform1").css("display","none");
				$("#updateProductTemplate").css("display","none");
				$("#AppDealform2").css("display","none");
				$("#AppDealform3").css("display","none");
				$("#AppDealform4").css("display","none");
				$("#Add_product").css("display","block");
				$(".productdetail").css("display","none");
				$("#productTitle1").val('');
				$("#productdescription1").val('');
				$(".previewIMG").html('');
				$(".richText-editor div").html('')
			}
			
			$('.preview #printdes').bind('input', function() {
				$(".Previewdesc").html($(this).val());
				document.getElementById('coupondesc_c').value = $(this).val();
				$('#Couponform .richText-editor').html($(this).val())
			} );
			$('.preview #printoffer').bind('input', function() {
				$(".offerpreview").html($(this).val());
				var li_id = $("#updatebtn").attr("data-id");
				$("#"+li_id+ " .offerdd p").html($(this).val());
			} );
			
			function createCoupons(update = false){
				var PRID = $("#updatebtn").attr("data-id");
				var name = $("#listsearch").val();
				var Address = $("#address1").val();
				var category = $("#select").val();
				var offer = $(".inpt_offer").val();
				var termsandcondition = $("#tersconditons").val();
				var description = $("#coupondesc_c").val();
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
				var enddateTime=null;
				var allocation_method = "across";
				if(!allcountry){
					allocation_method= "each"
				}
				if($("#PolarisCheckbox3").is(':checked')){
					enddateTime = new Date(endDate + ' ' +  endTime).toISOString();
				}
				var sample = [];
				var minus = 0;
				UploadedImages.forEach(function(item,index){
					var startpoint = item.imageUrl.indexOf("fieupload");
					var endpoint = item.imageUrl.indexOf("?");
					if(startpoint > -1){
					sample.push({"imageUrl":item.imageUrl.replace(item.imageUrl.substring(startpoint,endpoint),paths[index-minus].replace("/","%2F"))});
					} else {
					sample.push({"imageUrl":item.imageUrl});
					minus++
					}
				});
				
				var Images = sample;
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
				if(code == ""){
				   alert("please fill the discount code");
				   $("#DiscountCodeTextField").css("border","1px solid red");
					return false;				   
				}
				if($("#providername").val() != ""){
					
				}
				if(isPercentage){
					if(percentagevalue == ""){
					   alert("please fill the discount value");
					   $("#percentageValueField").css("border","1px solid red");
						return false;				   
					}
					if(update){
						UpdateCouponPR(PRID,"percentage",name,termsandcondition,description,Address,category,offer,Images,code,target_selection,percentagevalue,usage_limit,customer_selection,isSpecificCollectCheck,collectionIDs,isSpecificProductCheck,productIDs,dateTime,enddateTime,CustomerIDs,allocation_method);
					}else {
						PercentagePR("percentage",name,termsandcondition,description,Address,category,offer,Images,code,target_selection,percentagevalue,usage_limit,customer_selection,isSpecificCollectCheck,collectionIDs,isSpecificProductCheck,productIDs,dateTime,enddateTime,CustomerIDs,allocation_method);
					}
				}
				if(isFixed){
					if(fixedvalue == ""){
					   alert("please fill the discount value");
					   $("#percentageValueField").css("border","1px solid red");
						return false;				   
					}
					if(update){
						UpdateCouponPR(PRID,"fixed_amount",name,termsandcondition,description,Address,category,offer,Images,code,target_selection,fixedvalue,usage_limit,customer_selection,isSpecificCollectCheck,collectionIDs,isSpecificProductCheck,productIDs,dateTime,enddateTime,CustomerIDs,allocation_method,"")
					}else {
						PercentagePR("fixed_amount",name,termsandcondition,description,Address,category,offer,Images,code,target_selection,fixedvalue,usage_limit,customer_selection,isSpecificCollectCheck,collectionIDs,isSpecificProductCheck,productIDs,dateTime,enddateTime,CustomerIDs,allocation_method);
					}
				}
				if(isFreeShipping){
					if(shippingvalue == ""){
					   alert("please fill the discount value");
					   $("#percentageValueField").css("border","1px solid red");
						return false;				   
					}
					if(update){
						UpdateCouponPR(PRID,"FreeShipping",name,termsandcondition,description,Address,category,offer,Images,code,target_selection,shippingvalue,usage_limit,customer_selection,isSpecificCollectCheck,collectionIDs,isSpecificProductCheck,productIDs,dateTime,enddateTime,CustomerIDs,allocation_method);
					}else {
						PercentagePR("fixed_amount",name,termsandcondition,description,Address,category,offer,Images,code,target_selection,shippingvalue,usage_limit,customer_selection,isSpecificCollectCheck,collectionIDs,isSpecificProductCheck,productIDs,dateTime,enddateTime,CustomerIDs,allocation_method);
					}
				}
				if(isbuy){
					if(shippingvalue == ""){
					   alert("please fill the discount value");
					   $("#percentageValueField").css("border","1px solid red");
						return false;				   
					}
					if(update){
						UpdateCouponPR(PRID,"BuyGet",name,termsandcondition,description,Address,category,offer,Images,code,"entitled",shippingvalue,usage_limit,customer_selection,isSpecificCollectCheck,collectionIDs,isSpecificProductCheck,productIDs,dateTime,enddateTime,CustomerIDs,allocation_method,entitled_quantity,prerequisite_quantity,prerequisite_p,prerequisite_c,entitled_p,entitled_c);
					}else{
						PercentagePR("percentage",name,termsandcondition,description,Address,category,offer,Images,code,"entitled",shippingvalue,usage_limit,customer_selection,isSpecificCollectCheck,collectionIDs,isSpecificProductCheck,productIDs,dateTime,enddateTime,CustomerIDs,allocation_method,entitled_quantity,prerequisite_quantity,prerequisite_p,prerequisite_c,entitled_p,entitled_c);
					}
				}
			}
			var body1
			var body2
			var body3
			var body4
			var content
			
			function triggerImg(id) {
				var no = id.slice(id.length - 1)
				if(productIds.length < no-1){
					alert("Please save the previous product to proceed further.")
					return false;
				}
				$("#close-image-coupons").css("display","block");
				iswebImg = true;
				//$("#"+id+ " #uploadFile").trigger("click");
			}
			function CreateDeal(published_at=null){
				var collectionadded =0;
				$(".saveloader").css("display","inline");
				var count = 1;
				var i = productno;
				if(isTemplateUpdate){
					i = 1;
				}
				var collection;
				const forLoop = async _ => {
				var productID=0;	
				var title1 = $("#productTitle"+i).val();
				var desc1 = $("#productdescription"+i).val();
				var vendor = $(".deconame").val();
				var category = $("#Dealselect").val();
				var Images = [];
				encodeImaged.forEach(function(item,index){
					Images.push({"attachment":item.replace("data:image/jpeg;base64,","")});
				});
				var startatDate = $("#StartEmbeddedDatePickerDeals"+i).val();
				var startatTime = $("#StartTimeFieldDeals"+i).val();
				var dateTime = new Date(startatDate + ' ' +  startatTime).toISOString();
				var price = $("#"+currentForm + " #pricing"+i).val();
				var sku = $("#"+currentForm + " #InventoryCardSku"+i).val();
				var compare_at_price = $("#"+currentForm + " #compareAtPrice"+i).val();
				var barcode = $("#"+currentForm + " #InventoryCardBarcode").val();
				var grams = $("#"+currentForm + " #AdjustQuantityPopoverTextFieldActivator").val();
				var weight = $("#"+currentForm+ " #ShippingCardWeight").val();
				var unit = $("#"+currentForm+ " .weigthUnit").html();
				if(published_at){
					published_at = dateTime;
				}
				if(weight == ""){
					weight = 0;
				}

				if(compare_at_price < price && compare_at_price != ""){
					alert("Compare at price needs to be higher than Price.")
					$(".saveloader").css("display","none");
					return false;
				}
				var variants = [
							  {
								"price": price,
								"sku": sku,
								"compare_at_price": compare_at_price,
								"created_at": dateTime,
								"barcode": barcode,
								"inventory_quantity": grams,
								"weight": weight,
								"weight_unit": unit,
								"requires_shipping": true
							  }
							];
				var data = { "product": {
							"title": title1,
							"body_html": desc1,
							"vendor": vendor,
							"product_type": "",
							"images": Images,
							"variants": variants,
							"published_at": published_at,
						  }
						}
				
				
			const PostdealServer = async () => {
					Images = [];
					var body = body1;
				
				if(i==1){
					body = body1;
				}
				if(i==2){
				body = body2;
				}
				if(i==3){
				body = body3;
				}
				if(i==4){
				body = body4;
				}
						console.log(JSON.stringify(body));
						const response_ = await fetch('https://proxy.actv.05media.com/rest/private/sincommunityhubservice/addDeal', {
							method: 'POST',
							body:  JSON.stringify(body),
							headers: {
							'Content-Type': 'application/json',
							'Authorization':sessionStorage.getItem('_token')
						}
						});
						 const responseCode = await response_.ok;
						 productPosted++;
						 if(productPosted == totalProducts && totalProducts == 1) {
							$("#actionloader").css("display","none");
							window.location.href = "creatingcoupons.html?deal=1";
						}
					}
			const Postdeal = async () => {
				const response_ = await fetch('https://cors-anywhere.herokuapp.com/https://store-mycommunity-today.myshopify.com/admin/api/2020-07/products.json', {
						method: 'POST',
						body:  JSON.stringify(data),
						headers: {
						'Content-Type': 'application/json',
						'Authorization':'Basic MTgyOTJlYjhmZmE4ODNhMTBlM2JkNGM5NzdhN2MyM2M6c2hwcGFfOGE1NTdmMTc4OTNjYjQ1YmQyZWRkZmYxOTk3NDZiNjU=',
					}
				});
				 const Data = await response_.json();
				 productID = Data.product.id;
				 productIds.push(Data.product.id);
				 Images = [];
				 $("#AppDealform"+i+ " .previewIMG li img").each(function() {
					Images.push({"imageUrl":$(this).attr("src")});
				 });
				 if(i==1){
				body1 = {
								"address": $(".businessField").val(),
								"cateogry": $("#Dealselect").val(),
								"code": totalProducts+"-"+productno,
								"description": desc1,
								"discalmer": null,
								"expiryDate": null,
								"id": productID,
								"image": Images,
								"imagelogo": $(".deloutput").attr("src"),
								"name": title1,
								"offer": $("#"+SelectedProducts + ".deoffdesinput").val(),
								"place_id": googlePlaceID.place_id,
								"website": null,
								"location": {
									"latitude": googlePlaceID.geometry.location.lat,
									"longitude":googlePlaceID.geometry.location.lng
								},
								"isPromoted": null,
								"priority": null,
								"businessId": sessionStorage.getItem('sinid'),
							}
				}
				if(i==2){
				body2 = {
								"address": $(".businessField").val(),
								"cateogry": $("#Dealselect").val(),
								"code": totalProducts+"-"+productno,
								"description": desc1,
								"discalmer": null,
								"expiryDate": null,
								"id": productID,
								"image": Images,
								"imagelogo": $(".deloutput").attr("src"),
								"name": title1,
								"offer": $("#"+SelectedProducts + ".deoffdesinput").val(),
								"place_id": googlePlaceID.place_id,
								"website": null,
								"location": {
									"latitude": googlePlaceID.geometry.location.lat,
									"longitude":googlePlaceID.geometry.location.lng
								},
								"isPromoted": null,
								"priority": null,
								"businessId": sessionStorage.getItem('sinid'),
							}
				}
				if(i==3){
				body3 = {
								"address": $(".businessField").val(),
								"cateogry": $("#Dealselect").val(),
								"code": totalProducts+"-"+productno,
								"description": desc1,
								"discalmer": null,
								"expiryDate": null,
								"id": productID,
								"image": Images,
								"imagelogo": $(".deloutput").attr("src"),
								"name": title1,
								"offer": $("#"+SelectedProducts + ".deoffdesinput").val(),
								"place_id": googlePlaceID.place_id,
								"website": null,
								"location": {
									"latitude": googlePlaceID.geometry.location.lat,
									"longitude":googlePlaceID.geometry.location.lng
								},
								"isPromoted": null,
								"priority": null,
								"businessId": sessionStorage.getItem('sinid'),
							}
				}
				if(i==4){
				body4 = {
								"address": $(".businessField").val(),
								"cateogry": $("#Dealselect").val(),
								"code": totalProducts+"-"+productno,
								"description": desc1,
								"discalmer": null,
								"expiryDate": null,
								"id": productID,
								"image": Images,
								"imagelogo": $(".deloutput").attr("src"),
								"name": title1,
								"offer": $("#"+SelectedProducts + ".deoffdesinput").val(),
								"place_id": googlePlaceID.place_id,
								"website": null,
								"location": {
									"latitude": googlePlaceID.geometry.location.lat,
									"longitude":googlePlaceID.geometry.location.lng
								},
								"isPromoted": null,
								"priority": null,
								"businessId": sessionStorage.getItem('sinid'),
							}
				}
				 count++;
				 PostdealServer();
				 if(productIds.length > 0) {
					 
					 productIds.forEach(function(item,index){
						var h = index;
						if(isTemplateUpdate){
							h = productno;
						}
						collect.push({
								"product_id": item,
								"position": h,
						});
					 });
					    collection = { "custom_collection": {
								"title": $("#listsearch1").val(),
								"collects": collect,
								}
						}
						if(collectionId){
						  collection = { "custom_collection": {
								"id": collectionId,
								"title": $("#listsearch1").val(),
								"collects": collect,
								}
							}
						}
						
					  Postcollection();
					} 
				}
				var collect = [];
				
				if(title1){
					await Postdeal();
					$(".saveloader").css("display","none");
					
					if(totalProducts >= (productno+1)){
						$("#Product_Number_"+(productno)).css("border","3px solid darkgreen");
						$("#Product_Number_"+(productno)).css("background-color","lightgreen")
						$("#Product_Number_"+(productno+1)).trigger("click");
						$(".ImageUploadDiv4").html("");
					}
				} else{
					alert("Please fill the title field.")
					$(".saveloader").css("display","none");
					return false;
				}
				}
				forLoop();
				
				const PostProductWithColllection = async () => {
						collectionadded++;
						const response_ = await fetch('https://proxy.actv.05media.com/rest/private/sincommunityhubservice/addDeal', {
							method: 'POST',
							body:  JSON.stringify(content),
							headers: {
							'Content-Type': 'application/json',
							'Authorization':sessionStorage.getItem('_token')
						}
						});
						const responseCode = await response_.ok;
						if(responseCode){
							if(collectionadded == totalProducts || isTemplateUpdate){
								$("#actionloader").css("display","none");
								window.location.href = "creatingcoupons.html?deal=1";
							}
						}
					}
				const Postcollection = async () => {
					var method = "POST";
					var url = 'https://cors-anywhere.herokuapp.com/https://store-mycommunity-today.myshopify.com/admin/api/2020-07/custom_collections.json';
					if(collectionId){
						method = 'PUT'
						url = 'https://cors-anywhere.herokuapp.com/https://store-mycommunity-today.myshopify.com/admin/api/2020-07/custom_collections/'+collectionId+'.json'
					}
					const response_ = await fetch(url, {
							method: method,
							body:  JSON.stringify(collection),
							headers: {
							'Content-Type': 'application/json',
							'Authorization':'Basic MTgyOTJlYjhmZmE4ODNhMTBlM2JkNGM5NzdhN2MyM2M6c2hwcGFfOGE1NTdmMTc4OTNjYjQ1YmQyZWRkZmYxOTk3NDZiNjU=',
						}
					});
					const Data = await response_.json();
					collectionId= Data.custom_collection.id;
					 productIds.forEach(async function(item,index){
						if(index == 0){
							body1.code = totalProducts+"-"+(index+1)+"-"+collectionId;
							content = body1;
						}
						if(index == 1){
							body2.code = totalProducts+"-"+(index+1)+"-"+collectionId;
							content = body2;
						}
						if(index == 2){
							body3.code = totalProducts+"-"+(index+1)+"-"+collectionId;
							content = body3;
						}
						if(index == 3){
							body4.code = totalProducts+"-"+(index+1)+"-"+collectionId;
							content = body4;
						}
						if(isTemplateUpdate){
							content.code = totalProducts+"-"+productno+"-"+collectionId;
						}
						await PostProductWithColllection();
					});
				}
			}
			
			function weightChange(id) {
				var value = $("#"+id).val();
				$("#"+currentForm+ " .weigthUnit").html(value);
			}
			function PercentagePR(value_type,name,termsandcondition,description,Address,category,offer,Images,code,target_selection,value,usage_limit,customer_selection,isSpecificCollectCheck,collectionIDs,isSpecificProductCheck,productIDs,startAt,enddateTime,CustomerIDs,allocation_method,entitled_quantity=null,prerequisite_quantity=null,prerequisite_p = null,prerequisite_c=null,entitled_p=null,entitled_c=null){
				$("#actionloader").css("display","inline-block");
				var target_type = "line_item";
				var data = {
					  "price_rule": {
						"title": code,
						"target_type": target_type,
						"target_selection": target_selection,
						"allocation_method": allocation_method,
						"value_type": value_type,
						"value": parseInt("-"+value+".0"),
						"customer_selection": customer_selection,
						"entitled_collection_ids": collectionIDs,
						"entitled_product_ids": productIDs,
						"starts_at": startAt,
						"ends_at":enddateTime,
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
						"ends_at":enddateTime,
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
								"businessId": sessionStorage.getItem('sinid'),
								"discalmer": termsandcondition,
								"place_id": googlePlaceID.place_id,
								"website": null,
								"location": {
									"latitude": googlePlaceID.geometry.location.lat,
									"longitude":googlePlaceID.geometry.location.lng
								},
								"isPromoted": false,
								"priority": null,
							}
							console.log(JSON.stringify(body));
						const response_ = await fetch('https://proxy.actv.05media.com/rest/private/sincommunityhubservice/addCoupon', {
							method: 'POST',
							body:  JSON.stringify(body),
							headers: {
							'Content-Type': 'application/json',
							'Authorization':sessionStorage.getItem('_token')
						}
						});
						 const responseCode = await response_.ok;
						 if(responseCode && AddBusinessplace){
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
								"businessId": AddBusinessSin,
								"discalmer": termsandcondition,
								"place_id": AddBusinessplace.place_id,
								"website": null,
								"location": {
									"latitude": AddBusinessplace.geometry.location.lat,
									"longitude":AddBusinessplace.geometry.location.lng
								},
								"isPromoted": false,
								"priority": null,
							}
							 const response_1 = await fetch('https://proxy.actv.05media.com/rest/private/sincommunityhubservice/addCoupon', {
								method: 'POST',
								body:  JSON.stringify(body),
								headers: {
								'Content-Type': 'application/json',
								'Authorization': AddBusinessToken
							}
							});
							 const responseCode_1 = await response_1.ok;
							 if(responseCode_1){
								 $("#actionloader").css("display","none");
								 window.location.href = "creatingcoupons.html";
							 } else {
								 $("#actionloader").css("display","none");
							 }
						 } else {
							 if(responseCode){
								 $("#actionloader").css("display","none");
								 window.location.href = "creatingcoupons.html";
							 } else {
								 $("#actionloader").css("display","none");
							 }
							 
						 }
					}
			}
			function openPop(id) {
				curremtCropid = "#image"+id+" img";
				rawImg = $("#image"+id+" img").attr("src");
				if(!rawImg){
					rawImg = $("#"+currentForm+" #"+id).attr("src"); 
					if(currentForm == "updateProductTemplate"){
						rawImg = $("#AppDealform1 #"+id).attr("src"); 
					}
					curremtCropid = "#"+id;
				}
				if(currentForm == "updateProductTemplate" && !rawImg){
					rawImg = $("#"+id).attr("src"); 
				}
				$('.upload-demo').addClass('ready');
				$('#cropImagePop').modal('show');
			};
			function UpdateCouponPR(PRID,value_type,name,termsandcondition,description,Address,category,offer,Images,code,target_selection,value,usage_limit,customer_selection,isSpecificCollectCheck,collectionIDs,isSpecificProductCheck,productIDs,startAt,enddateTime,CustomerIDs,allocation_method,entitled_quantity=null,prerequisite_quantity=null,prerequisite_p = null,prerequisite_c=null,entitled_p=null,entitled_c=null){
				$("#actionloader").css("display","inline-block");
				var target_type = "line_item";
				var updatedArray = { cid: {
							"id": PRID,
							"name": name,
							"desc1": description,
							"offer": offer,
							"images": Images,
							"code": code,
							"value_type": value_type,
						    "value": "-"+value.replace(".0.0",".0"),
							"starts_at": startAt,
							"ends_at":enddateTime,
							"category":category,
							"termsandcondition":termsandcondition,
						  }
						}
				updatedDataCoupons = updatedDataCoupons.filter(element => element.cid.id != PRID);
				updatedDataCoupons.push(updatedArray);
				var data = {
					  "price_rule": {
						"title": code,
						"target_type": target_type,
						"target_selection": target_selection,
						"allocation_method": allocation_method,
						"value_type": value_type,
						"value": "-"+value.replace(".0.0",".0"),
						"customer_selection": customer_selection,
						"entitled_collection_ids": collectionIDs,
						"entitled_product_ids": productIDs,
						"starts_at": startAt,
						"ends_at":enddateTime,
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
						"value": "-"+value.replace(".0.0",".0"),
						"customer_selection": customer_selection,
						"entitled_collection_ids": collectionIDs,
						"entitled_product_ids": productIDs,
						"starts_at": startAt,
						"ends_at":enddateTime,
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
					 //PostCoupon();
					 //DeleteCoupons_server();					 
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
					const DeleteCoupons_server = async () => {
					const response_ = await fetch('https://proxy.actv.05media.com/rest/private/sincommunityhubservice/deleteCoupon/'+PRID, {
							method: 'DELETE',
							headers: {
							'Content-Type': 'application/json',
							'Authorization':sessionStorage.getItem('_token')
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
								"businessId": sessionStorage.getItem('sinid'),
								"discalmer": null,
								"discalmer": termsandcondition,
								"place_id": googlePlaceID.place_id,
								"website": null,
								"location": {
									"latitude": googlePlaceID.geometry.location.lat,
									"longitude":googlePlaceID.geometry.location.lng
								},
								"isPromoted": false,
								"priority": null,
							}
						const response_ = await fetch('https://proxy.actv.05media.com/rest/private/sincommunityhubservice/addCoupon', {
							method: 'POST',
							body:  JSON.stringify(body),
							headers: {
							'Content-Type': 'application/json',
							'Authorization':sessionStorage.getItem('_token')
						}
						});
						 const responseCode = await response_.ok;
						 if(responseCode){
							 $("#actionloader").css("display","none");
							 $(".showMessage").html("Deal has been updated sucessfully.").delay(2000).fadeOut(500);
						 }
					}
			}
			function sortCoupons() {
				$(".sortDiv").toggle();
			}
			function sortByStartDate(){
				    var order = $(".start").attr("data-id");
					if(order == "asc"){
						$(".start").attr("data-id","desc");
						var result = $('.sortingDivs').sort(function (a, b) {
						  var contentA =new Date($(a).data('start'));
						  var contentB =new Date($(b).data('start'));
						  return (contentA > contentB) ? -1 : (contentA < contentB) ? 1 : 0;
					   });
					} else{
						$(".start").attr("data-id","asc");
						var result = $('.sortingDivs').sort(function (a, b) {
						  var contentA =new Date($(a).data('start'));
						  var contentB =new Date($(b).data('start'));
						  return (contentA < contentB) ? -1 : (contentA > contentB) ? 1 : 0;
					   });
					}
					
				   $('#loadercoupon').html(result);
				   $("#sortDiv").hide();
			}
			function sortByEndDate(){
					var order = $(".end").attr("data-id");
					if(order == "asc"){
						$(".end").attr("data-id","desc");
						var result = $('.sortingDivs').sort(function (a, b) {
						  var contentA =new Date($(a).data('end'));
						  var contentB =new Date($(b).data('end'));
						  return (contentA > contentB) ? -1 : (contentA < contentB) ? 1 : 0;
					   });
					} else{
						$(".end").attr("data-id","asc");
						var result = $('.sortingDivs').sort(function (a, b) {
						  var contentA =new Date($(a).data('end'));
						  var contentB =new Date($(b).data('end'));
						  return (contentA < contentB) ? -1 : (contentA > contentB) ? 1 : 0;
					   });
					}
					
				   $('#loadercoupon').html(result);
				   $("#sortDiv").hide();
			}
			function sortByStartDate(){
				    var order = $(".start").attr("data-id");
					if(order == "asc"){
						$(".start").attr("data-id","desc");
						var result = $('.sortingDivs').sort(function (a, b) {
						  var contentA =new Date($(a).data('start'));
						  var contentB =new Date($(b).data('start'));
						  return (contentA > contentB) ? -1 : (contentA < contentB) ? 1 : 0;
					   });
					} else{
						$(".start").attr("data-id","asc");
						var result = $('.sortingDivs').sort(function (a, b) {
						  var contentA =new Date($(a).data('start'));
						  var contentB =new Date($(b).data('start'));
						  return (contentA < contentB) ? -1 : (contentA > contentB) ? 1 : 0;
					   });
					}
					
				   $('#loadercoupon').html(result);
				   $("#sortDiv").hide();
			}
			function sortBytitle(order){
					if(order == "asc"){
						var result = $('.DealsortingDivs').sort(function (a, b) {
						  var contentA =$(a).data('title');
						  var contentB =$(b).data('title');
						  if(contentA < contentB) { return -1; }
						  if(contentA > contentB) { return 1; }
						  return 0;
					   });
					} else {
						var result = $('.DealsortingDivs').sort(function (a, b) {
						  var contentA =$(a).data('title');
						  var contentB =$(b).data('title');
						  if(contentA > contentB) { return -1; }
						  if(contentA < contentB) { return 1; }
						  return 0;
					   });
					}
					
				   $('#loadercoupon').html(result);
				   $("#sortDiv").hide();
			}
			function DeleteCoupons() {
				var ids = [];
				var discountid;
				var prid;
				$(".checkboxclicks").each(function() {
					if(this.checked){					
						ids.push($(this).attr("id"));
					}
				});
				if(ids){
				if(confirm("Are you sure to delete?")){
				ids.forEach(function(item,index){
				 prid = item;
				 const DeleteCoupons_server = async () => {
					const response_ = await fetch('https://proxy.actv.05media.com/rest/private/sincommunityhubservice/deleteCoupon/'+item, {
							method: 'DELETE',
							headers: {
							'Content-Type': 'application/json',
							'Authorization':sessionStorage.getItem('_token')
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
					$("#"+item).remove();
					ResetCoupons();
				});
				}
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
			function removeImage(id){
				$(this).remove();
				var data =$("#image"+id).attr("data-id");
				if(data != ""){
				   $("#"+data).parent().remove();
				   $("."+data).remove();
				}
				$("#image"+id).remove();
				$("."+id).remove();
				$("#"+id).parent().remove();
			};
			
			function ResetCoupons() {
				document.getElementById('entcname1').value  = "";
			$('#printdes').html("");
			document.getElementById('printoffer').value = "";
			document.getElementById('offer').value  = "";
			document.getElementById('entdesc').value  = "";
			document.getElementById('category').value = "";
			document.getElementById('tersconditons').value = "";
			document.getElementById('expiraydate2').value  = "";
			document.getElementById('output').src  = "";
			document.getElementById("output").style.display="none";
			$(".slider1").css("display","none");
			document.getElementById('coupondesc_c').value = "";
			document.getElementById('DiscountCodeTextField').value = ""
			document.getElementById('percentageValueField').value = ""
			$(".checkboxclicks").prop("checked", false);
			$(".ImageUploadDiv4").html("No Image Available");
			$(".previewImg").attr("src","");
			$(".previewImg").css("display","none");
			$("#previewimg").show()
			$(".Previewdesc").html("Offer description here*");
			$(".offerpreview").html("Your offer here *");
			percentageValueField;
			
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