// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCFgW7VCEKkko_t42HBjXBL0guNmJgl-94",
    authDomain: "mycommunity-a734d.firebaseapp.com",
    databaseURL: "https://mycommunity-a734d.firebaseio.com",
    projectId: "mycommunity-a734d",
    storageBucket: "mycommunity-a734d.appspot.com",
    messagingSenderId: "885464413077"
  };
  firebase.initializeApp(config);
	
	var head1 = document.getElementById('head1');
	
	var arrayfirebse;
	var f1 = firebase.database().ref().child("coupons/array/");
    f1.on('value', function(snapshot) {
  
		
	 arrayfirebse = snapshot.val();
	console.log(snapshot.val());
		
});
	
	var couponsref = firebase.database().ref().child("coupons/");
	// Create a root reference
	var url;
	
	var thisRef = firebase.storage().ref('/imageslog/');
	
	function submitdata()
	{
		
		
		var compnayname = document.getElementById('entcname').value;
		var offerdesc = document.getElementById('entdesc').value;
		var offer = document.getElementById('offer').value;
		var zipcode = document.getElementById('zipcode').value;
		var placeid = document.getElementById('placeid').value;
		var expiraydate = document.getElementById('expiraydate').value;
		var terscondtion = document.getElementById('tersconditons').value;
		var couponscode = document.getElementById('couponscode').value;
		var linkpest = document.getElementById('linkpest').value;
		
		
		var file = document.getElementById("files").files[0];
		//get request to get URL for uploaded file
  
	thisRef.getDownloadURL().then(function(url) {
  
		
	
				
					
					
	

		
	  var imageurl = url;
	 console.log(imageurl);
		
		console.log(file);
		
		var array = [];
		
		var object1 = {
	
	compnayname: compnayname,
	offerdesc: offerdesc, 
	offer:offer,
	urlimage:imageurl,
	zipcode:zipcode,
	placeid:placeid,
	expiraydate:expiraydate,
	terscondtion:terscondtion,
	couponscode:couponscode,
	linkpest:linkpest	
	
	
	
};
		
	 arrayfirebse.push(object1);
		
		
		
	 writeUserData(arrayfirebse);
		console.log(arrayfirebse);
		
		
		//put request upload file to firebase storage
  thisRef.put(file).then(function(url) {
    console.log('logo has been uploaded!');
});
});	
		
	}
	
	
	function writeUserData(array) {	
       couponsref.set({
	  
                array
  });
}
	
	// JavaScript Document