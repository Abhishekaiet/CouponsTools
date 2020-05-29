Deepakrawat{
						
							var imageobject;
	        imageobject = [];
						
		var imageobject1 = [];		
							
						
						//deepakrawat
						
						  for(var i = 0; i< arraylistfile.length; i++)
            {
                var imageFile = arraylistfile[i];
				
				console.log(imageFile);
				
				   uploadImageAsPromise(imageFile);
				
			}
									
		//Handle waiting to upload each file using promise
function uploadImageAsPromise (imageFile) {
    return new Promise(function (resolve, reject) {
		var storageRef = firebase.storage().ref("/dealimageupload/"+imageFile.name);
					
			//put request upload file to firebase storage
  storageRef.put(imageFile).then(function(url) {
	  
    console.log('image has been uploaded googli!');
	  
	 var urlPromise = storageRef.getDownloadURL();
	  
	  urlPromise.then(url => {
	  	 
						const dataurl = url;
		  
		  console.log("rep1");
		  
		   console.log(dataurl);
		  
		  imageobject.push(dataurl);
		  
		
		  });
	  });
		
		 });
	}
						
					 console.log(imageobject);	
						imageobject1.push({
			  imageUrl:imageobject
		  });
		
	var  thisRef1
		 thisRef1 = firebase.storage().ref("/dealimagelogo/"+logodel+uniqueId);
		
		 
		//put request upload file to firebase storage
  thisRef1.put(logodel).then(function(url1) {
	  
    console.log('logo has been uploaded google but!');
	  
	  
	 var urlPromise1 = thisRef1.getDownloadURL();
	  urlPromise1.then(url1 => {
	  	  console.log(url1);
		
		
		  
		placeid = selectedGooglePlace.place_id;
		address = selectedGooglePlace.formatted_address;
			
		  
		  
		var objToSubmit = {
			address:address,
			cateogry:selectedGooglePlace.types[0],
			code:delqrcode.value,
			imagelink:delimagelink.value,
			offer:deloffer.value,
			expiryDate:delexpirydate.value,
			description:deldescription.value,
			discalmer:delcondtions.value,
			imagelogo:url1,
			placeid:placeid,
		    colorbackgroudurl:colorbackgroudurl,
			zipcode:zipobjects,
			delimagelink:delimagelink,
			image:imageobject1,
			id:uniqueId,
			name:selectedGooglePlace.name,
			website:"google.com",
			place:selectedGooglePlace
			
			
			
		};
		
		
		
		firebase.database().ref('/deals_new/').once('value').then(function(snapshot) {
 
	
	var arr = snapshot.val();
	if(arr==null ||arr.length ==0){
		
//  firebase.database().ref('coupons_new/'+33333+'/' + selectedGooglePlace.place_id).set(JSON.parse(JSON.stringify(objToSubmit)));
  firebase.database().ref('deals_new/'+0).set(JSON.parse(JSON.stringify(objToSubmit)));
		alert('Successfully Added!');
		window.location.href = "creatingcoupons.html";
		
		  loader = document.getElementById("loader");
			loader.style.display = "none";	
			
	}
			
	else{
				

		firebase.database().ref('deals_new/'+ arr.length).set(JSON.parse(JSON.stringify(objToSubmit)));
		alert('Successfully Added!');
		window.location.href = "creatingcoupons.html";
			
		  loader = document.getElementById("loader");
			loader.style.display = "none";
		
			
	}	
//
			 	
		  
		  
		
							
				
		
		  	});
	  });
		
		
		
		
    });

		
		
						
						
					}



function delsubmit()
	
	{
	
		var und = "undefined";
		
		var uniqueId = Math.random().toString(36).substring(2) 
               + (new Date()).getTime().toString(36);
		
		var deloffer = document.getElementById('deloffer');
		var deldescription = document.getElementById('deldescription');
		var delexpirydate = document.getElementById('delexpirydate');
		var delcondtions = document.getElementById('delcondtions');
		var delmultiple = document.getElementById('delmultiple').value;
		var delqrcode = document.getElementById('delqrcode');
		var delimagelink = document.getElementById('delimagelink');
		var rimgeurlmpapibb = document.getElementById('rimgeurlmpapi').value;
		var rimgeurlmpapi1 = document.getElementById('rimgeurlmpapi1').value;
		var colorbackgroudurl = document.getElementById('colorbackgroudurl').value;
		
//		var logodel = document.getElementById('dealogo').files[0];
//		var dealimage = document.getElementById('dlimage').files[0];
	
		if (und === rimgeurlmpapi1) {
		
var res = rimgeurlmpapibb.substr(70);
var newStr = res.slice(0, -69);
		
		rimgeurlmpapi = "https://maps.googleapis.com/maps/api/place/photo?photoreference="+newStr+"&sensor=false&maxheight=500&maxwidth=500&key=AIzaSyCM641AP5CCKjh30Z1_p8tEj-PccFZdx50";
		
			
		}
		
		else
		{
			
		    rimgeurlmpapi =  rimgeurlmpapi1;
			
		}
		
		var logodel = blob4;
		var dealimage = arraylistfile;
		
//	 var str = delzipcode.split(",");
		
//		console.log(str);
		
		
		
		if (zipobjects === undefined || zipobjects.length == 0) {
   
		
		var deladdbtn = document.getElementById('deladdbtn');
		deladdbtn.style.border="3px solid red";
		
		if (delmultiple=="")
			{
				var delmultiple = document.getElementById('delmultiple');
		    delmultiple.style.border="3px solid red";
				
			}
		
//		
		
			alert('Press The add multiple zipcode OR Fill zipcode text field');
			return;
		
		
}
	
		if (delmultiple!="")
			{	
	
	
		if (ddeeplace=="")
			{
				alert('Please choose a place for new zipcode');
				return;	
				
			}
				
				var deladdbtn = document.getElementById('deladdbtn');
		    deladdbtn.style.border="3px solid red";
				
			alert('Press The add multiple zipcode');
				return;		
				
				
			}
		
			
		if( $('#deloffer').val().length === 0 ) {
			
			var deloffer = document.getElementById('deloffer');
			    deloffer.style.border="4px solid red";
			
        alert('Please select offer');
			return;
		}

		
		if( $('#deldescription').val().length === 0 ) {
			var deldescription = document.getElementById('deldescription');
			    deldescription.style.border="4px solid red";
        alert('Please select description');
			return;
		}
		
		if( $('#delexpirydate').val().length === 0 ) {
			var delexpirydate = document.getElementById('delexpirydate');
			    delexpirydate.style.border="4px solid red";
        alert('please select expiry date');
			return;
		}
		
		
//		if( $('#delzipcode').val().length === 0 ) {
//			var delzipcode = document.getElementById('delzipcode');
//			    delzipcode.style.border="4px solid red";
//        alert('please select zipcode');
//			return;
//		}
		
		if( $('#delqrcode').val().length === 0 ) {
			var delqrcode = document.getElementById('delqrcode');
			    delqrcode.style.border="4px solid red";
        alert('please select qurcode');
			return;
		}
		
		
		
		if(selectedlink3==null)
			{
				
				if(logodel==null)//	from computer logo modal
					{	
						
						alert('Please select an image');
					}
				
				else if(dealimage==null)//	from computer image modal
					
					{
						
						if(selectedlink4==null)// from web for image modal
							{
//															
//	 for(var i =0; i<str.length; i++)
//		 {
//			 
////			 console.log(str[i]);
//					
//			 const delzipcode = str[i];
					
								
						 loader = document.getElementById("loader");
			loader.style.display = "block";	
								
								 var thisRef;
			 thisRef = firebase.storage().ref("/dealimageupload/"+dealogo+uniqueId);
							//put request upload file to firebase storage
  thisRef.put(logodel).then(function(url) {
	  
    console.log('image has been uploaded!');
	  
	 var urlPromise = thisRef.getDownloadURL();
	  urlPromise.then(url => {
	  	  console.log(url);	
								
								
			 var imageobject = [];
		  imageobject.push({
			  imageUrl:rimgeurlmpapi
		  });
			
			
			placeid = selectedGooglePlace.place_id;
		address = selectedGooglePlace.formatted_address;
		  
					
					var objToSubmit = {
			address:address,
			cateogry:selectedGooglePlace.types[0],
			code:delqrcode.value,
			imagelink:delimagelink.value,
			offer:deloffer.value,
			expiryDate:delexpirydate.value,
			description:deldescription.value,
			placeid:placeid,
			colorbackgroudurl:colorbackgroudurl,
			discalmer:delcondtions.value,
			imagelogo:url,
			zipcode:zipobjects,
			delimagelink:delimagelink,
			image:imageobject,
			id:uniqueId,
			name:selectedGooglePlace.name,
			website:"google.com",
			place:selectedGooglePlace
			
			
			
		};
		
		
		
		firebase.database().ref('/deals_new/').once('value').then(function(snapshot) {
 
	
	var arr = snapshot.val();
	if(arr==null ||arr.length ==0){
		
	
//  firebase.database().ref('coupons_new/'+33333+'/' + selectedGooglePlace.place_id).set(JSON.parse(JSON.stringify(objToSubmit)));
  firebase.database().ref('deals_new/'+0).set(JSON.parse(JSON.stringify(objToSubmit)));
		alert('Successfully Added!');
		window.location.href = "creatingcoupons.html";
		
		  loader = document.getElementById("loader");
			loader.style.display = "none";
		
			
	}
	else{
				

		firebase.database().ref('deals_new/' + arr.length).set(JSON.parse(JSON.stringify(objToSubmit)));
		alert('Successfully Added!');
		window.location.href = "creatingcoupons.html";
			
		  loader = document.getElementById("loader");
			loader.style.display = "none";
		
			
	}	

			  });
	  });
  });
//		 }
								
							}
						
						else
							{ // this is for uploading computer from computer logo and image from web.
							
//								 for(var i =0; i<str.length; i++)
//		 {Getimageweb
			 
//			 console.log(str[i]);
					
//			 const delzipcode = str[i];	
								
								alert('shahrukh1');
								
						 loader = document.getElementById("loader");
			loader.style.display = "block";	
								
								 var thisRef;
			 thisRef = firebase.storage().ref("/dealimageupload/"+dealogo+uniqueId);
							//put request upload file to firebase storage
  thisRef.put(logodel).then(function(url) {
	  
    console.log('image has been uploaded!');
	  


	 var urlPromise = thisRef.getDownloadURL();
	  urlPromise.then(url => {
	  	  console.log(url);	
								
								
			 var imageobject = [];
		  imageobject.push({
			  imageUrl:arrayweblink
		  });
				
			
			
			placeid = selectedGooglePlace.place_id;
		address = selectedGooglePlace.formatted_address;
		  
					
					var objToSubmit = {
			address:address,
			cateogry:selectedGooglePlace.types[0],
			code:delqrcode.value,
			imagelink:delimagelink.value,
			offer:deloffer.value,
			expiryDate:delexpirydate.value,
			description:deldescription.value,
			placeid:placeid,
			discalmer:delcondtions.value,
			imagelogo:url,
			colorbackgroudurl:colorbackgroudurl,
			zipcode:zipobjects,
			delimagelink:delimagelink,
			image:imageobject,
			id:uniqueId,
			name:selectedGooglePlace.name,
			website:"google.com",
			place:selectedGooglePlace
			
			
			
		};
		
		
		
		firebase.database().ref('/deals_new/').once('value').then(function(snapshot) {
 
	
	var arr = snapshot.val();
	if(arr==null ||arr.length ==0){
		
	
//  firebase.database().ref('coupons_new/'+33333+'/' + selectedGooglePlace.place_id).set(JSON.parse(JSON.stringify(objToSubmit)));
  firebase.database().ref('deals_new/'+0).set(JSON.parse(JSON.stringify(objToSubmit)));
		alert('Successfully Added!');
		window.location.href = "creatingcoupons.html";
		
		  loader = document.getElementById("loader");
			loader.style.display = "none";
		
			
	}
	else{
				

		firebase.database().ref('deals_new/' + arr.length).set(JSON.parse(JSON.stringify(objToSubmit)));
		alert('Successfully Added!');
		window.location.href = "creatingcoupons.html";
			
		  loader = document.getElementById("loader");
			loader.style.display = "none";
		
			
	}	

			  });
	  });
  });
//		 }
								
							}
						
						
					}
				else
					{
						
							var imageobject;
	        imageobject = [];
						
		var imageobject1 = [];		
							
						
						//deepakrawat
						
						  for(var i = 0; i< arraylistfile.length; i++)
            {
                var imageFile = arraylistfile[i];
				
				console.log(imageFile);
				
				   uploadImageAsPromise(imageFile);
				
			}
									
		//Handle waiting to upload each file using promise
function uploadImageAsPromise (imageFile) {
    return new Promise(function (resolve, reject) {
		var storageRef = firebase.storage().ref("/dealimageupload/"+imageFile.name);
					
			//put request upload file to firebase storage
  storageRef.put(imageFile).then(function(url) {
	  
    console.log('image has been uploaded googli!');
	  
	 var urlPromise = storageRef.getDownloadURL();
	  
	  urlPromise.then(url => {
	  	 
						const dataurl = url;
		  
		  console.log("rep1");
		  
		   console.log(dataurl);
		  
		  imageobject.push(dataurl);
		  
		
		  });
	  });
		
		 });
	}
						
					 console.log(imageobject);	
						imageobject1.push({
			  imageUrl:imageobject
		  });
		
	var  thisRef1
		 thisRef1 = firebase.storage().ref("/dealimagelogo/"+logodel+uniqueId);
		
		 
		//put request upload file to firebase storage
  thisRef1.put(logodel).then(function(url1) {
	  
    console.log('logo has been uploaded google but!');
	  
	  
	 var urlPromise1 = thisRef1.getDownloadURL();
	  urlPromise1.then(url1 => {
	  	  console.log(url1);
		
		
		  
		placeid = selectedGooglePlace.place_id;
		address = selectedGooglePlace.formatted_address;
			
		  
		  
		var objToSubmit = {
			address:address,
			cateogry:selectedGooglePlace.types[0],
			code:delqrcode.value,
			imagelink:delimagelink.value,
			offer:deloffer.value,
			expiryDate:delexpirydate.value,
			description:deldescription.value,
			discalmer:delcondtions.value,
			imagelogo:url1,
			placeid:placeid,
		    colorbackgroudurl:colorbackgroudurl,
			zipcode:zipobjects,
			delimagelink:delimagelink,
			image:imageobject1,
			id:uniqueId,
			name:selectedGooglePlace.name,
			website:"google.com",
			place:selectedGooglePlace
			
			
			
		};
		
		
		
		firebase.database().ref('/deals_new/').once('value').then(function(snapshot) {
 
	
	var arr = snapshot.val();
	if(arr==null ||arr.length ==0){
		
//  firebase.database().ref('coupons_new/'+33333+'/' + selectedGooglePlace.place_id).set(JSON.parse(JSON.stringify(objToSubmit)));
  firebase.database().ref('deals_new/'+0).set(JSON.parse(JSON.stringify(objToSubmit)));
		alert('Successfully Added!');
		window.location.href = "creatingcoupons.html";
		
		  loader = document.getElementById("loader");
			loader.style.display = "none";	
			
	}
			
	else{
				

		firebase.database().ref('deals_new/'+ arr.length).set(JSON.parse(JSON.stringify(objToSubmit)));
		alert('Successfully Added!');
		window.location.href = "creatingcoupons.html";
			
		  loader = document.getElementById("loader");
			loader.style.display = "none";
		
			
	}	
//
			 	
		  
		  
		
							
				
		
		  	});
	  });
		
		
		
		
    });

		
		
						
						
					}
				
				
//				alert('Please fill get the image');	
				
			}
		
		else if(selectedlink4==null)
			
			{
				
				if(dealimage==null)
				{
					
//					 for(var i =0; i<str.length; i++)
//		 {
//			 
////			 console.log(str[i]);
//					
//			 const delzipcode = str[i];
						 loader = document.getElementById("loader");
			loader.style.display = "block";	
						
					
					 var imageobject = [];
		  imageobject.push({
			  imageUrl:rimgeurlmpapi
		  });
//				
			
			
			placeid = selectedGooglePlace.place_id;
		address = selectedGooglePlace.formatted_address;
		  
					
					var objToSubmit = {
			address:address,
			cateogry:selectedGooglePlace.types[0],
			code:delqrcode.value,
			imagelink:delimagelink.value,
			offer:deloffer.value,
			expiryDate:delexpirydate.value,
			description:deldescription.value,
			discalmer:delcondtions.value,
			imagelogo:selectedlink3,
			colorbackgroudurl:colorbackgroudurl,
		    placeid:placeid,
			zipcode:zipobjects,
			delimagelink:delimagelink,
			image:imageobject,
			id:uniqueId,
			name:selectedGooglePlace.name,
			website:"google.com",
			place:selectedGooglePlace
			
			
			
		};
		
		
		
		firebase.database().ref('/deals_new/').once('value').then(function(snapshot) {
 
	
	var arr = snapshot.val();
	if(arr==null ||arr.length ==0){
		
	
//  firebase.database().ref('coupons_new/'+33333+'/' + selectedGooglePlace.place_id).set(JSON.parse(JSON.stringify(objToSubmit)));
  firebase.database().ref('deals_new/'+0).set(JSON.parse(JSON.stringify(objToSubmit)));
		alert('Successfully Added!');
		window.location.href = "creatingcoupons.html";
		
		  loader = document.getElementById("loader");
			loader.style.display = "none";
		
			
	}
	else{
				

		firebase.database().ref('deals_new/'+ arr.length).set(JSON.parse(JSON.stringify(objToSubmit)));
		alert('Successfully Added!');
		window.location.href = "creatingcoupons.html";
			
		  loader = document.getElementById("loader");
			loader.style.display = "none";
		
			
	}	

			  });
//		 }
				}
				
				else
					{
//						 for(var i =0; i<str.length; i++)
//		 {
//			 
////			 console.log(str[i]);
//					
//			 const delzipcode = str[i];
						
							
						 loader = document.getElementById("loader");
			loader.style.display = "block";	
						
						 var dellthisRef;
			 dellthisRef = firebase.storage().ref("/dealimageupload/"+dlimage+uniqueId);
							//put request upload file to firebase storage
						
  dellthisRef.put(dealimage).then(function(urldel) {
	  
    console.log('image has been uploaded!');
	  
	 var urlPromise = dellthisRef.getDownloadURL();
	  urlPromise.then(urldel => {
	  	  console.log(urldel);	
								
								
			 var imageobject = [];
		  imageobject.push({
			  imageUrl:urldel
		  });
//				
			
			
			placeid = selectedGooglePlace.place_id;
		address = selectedGooglePlace.formatted_address;
		  
					
					var objToSubmit = {
			address:address,
			cateogry:selectedGooglePlace.types[0],
			code:delqrcode.value,
			imagelink:delimagelink.value,
			offer:deloffer.value,
			expiryDate:delexpirydate.value,
			description:deldescription.value,
			discalmer:delcondtions.value,
			imagelogo:selectedlink3,
		    placeid:placeid,
			zipcode:zipobjects,
			colorbackgroudurl:colorbackgroudurl,
			delimagelink:zipobjects,
			image:imageobject,
			id:uniqueId,
			name:selectedGooglePlace.name,
			website:"google.com",
			place:selectedGooglePlace
			
			
			
		};
		
		
		
		firebase.database().ref('/deals_new/').once('value').then(function(snapshot) {
 
	
	var arr = snapshot.val();
	if(arr==null ||arr.length ==0){
		
	
//  firebase.database().ref('coupons_new/'+33333+'/' + selectedGooglePlace.place_id).set(JSON.parse(JSON.stringify(objToSubmit)));
  firebase.database().ref('deals_new/'+0).set(JSON.parse(JSON.stringify(objToSubmit)));
		alert('Successfully Added!');
		window.location.href = "creatingcoupons.html";
		
		  loader = document.getElementById("loader");
			loader.style.display = "none";
		
			
	}
	else{
				

		firebase.database().ref('deals_new/'+ arr.length).set(JSON.parse(JSON.stringify(objToSubmit)));
		alert('Successfully Added!');
		window.location.href = "creatingcoupons.html";
			
		  loader = document.getElementById("loader");
			loader.style.display = "none";
		
			
	}	

			  });
	  });
  });
//		 }
//						
						
					}
				
				
				
//				alert('plaase fill get the image ');
			}
		
		else
			{
				
//				 for(var i =0; i<str.length; i++)
//		 {
//			 
////			 console.log(str[i]);
//					
//			 const delzipcode = str[i];
				
				
			 
				 loader = document.getElementById("loader");
			loader.style.display = "block";	
		
			 var imageobject = [];
		  imageobject.push({
			  imageUrl:arrayweblink
		  });
				
			
			
			placeid = selectedGooglePlace.place_id;
		address = selectedGooglePlace.formatted_address;
		  
					
					var objToSubmit = {
			address:address,
			cateogry:selectedGooglePlace.types[0],
			code:delqrcode.value,
			imagelink:delimagelink.value,
			offer:deloffer.value,
			expiryDate:delexpirydate.value,
			description:deldescription.value,
			discalmer:delcondtions.value,
			imagelogo:selectedlink3,
			colorbackgroudurl:colorbackgroudurl,
			zipcode:zipobjects,
			placeid:placeid,
			delimagelink:delimagelink,
			image:imageobject,
			id:uniqueId,
			name:selectedGooglePlace.name,
			website:"google.com",
			place:selectedGooglePlace
			
		};
		
		
		
		firebase.database().ref('/deals_new/').once('value').then(function(snapshot) {
 
	
	var arr = snapshot.val();
	if(arr==null ||arr.length ==0){
		
	
//  firebase.database().ref('coupons_new/'+33333+'/' + selectedGooglePlace.place_id).set(JSON.parse(JSON.stringify(objToSubmit)));
  firebase.database().ref('deals_new/'+0).set(JSON.parse(JSON.stringify(objToSubmit)));
		alert('Successfully Added!');
		window.location.href = "creatingcoupons.html";
		
		  loader = document.getElementById("loader");
			loader.style.display = "none";
		
			
	}
	else{
				

		firebase.database().ref('deals_new/'+ arr.length).set(JSON.parse(JSON.stringify(objToSubmit)));
		alert('Successfully Added!');
		window.location.href = "creatingcoupons.html";
			
		  loader = document.getElementById("loader");
			loader.style.display = "none";
		
			
	}	

			  });	
//		console.log(objToSubmit);
			
//		 }
} //		This is else for slectedlink3-4
	
		
		
	}//	This is delsubmit funciton end 700	