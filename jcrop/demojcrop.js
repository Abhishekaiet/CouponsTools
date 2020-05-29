
$(function(){

var crop_max_width2 = 700;
var crop_max_height2 = 700;
var jcrop_api2;
var canvas2;
var context2;
var image2;
var prefsize2;

$("#files").change(function() {
	
  loadImage2(this);
	var jcropmodal = document.getElementById('cropmodal2');
jcropmodal.style.display = "block";
	
});

function loadImage2(input) {
  if (input.files && input.files[0]) {
    var reader2 = new FileReader();
    canvas2 = null;
    reader2.onload = function(e) {
      image2 = new Image();
      image2.onload = validateImage2;
      image2.src = e.target.result;
    }
    reader2.readAsDataURL(input.files[0]);
  }
}

//function dataURLtoBlob(dataURL) {
//  var BASE64_MARKER = ';base64,';
//  if (dataURL.indexOf(BASE64_MARKER) == -1) {
//    var parts = dataURL.split(',');
//    var contentType = parts[0].split(':')[1];
//    var raw = decodeURIComponent(parts[1]);
//
//    return new Blob([raw], {
//      type: contentType
//    });
//  }
//	
//  var parts = dataURL.split(BASE64_MARKER);
//  var contentType = parts[0].split(':')[1];
//  var raw = window.atob(parts[1]);
//  var rawLength = raw.length;
//  var uInt8Array = new Uint8Array(rawLength);
//  for (var i = 0; i < rawLength; ++i) {
//    uInt8Array[i] = raw.charCodeAt(i);
//  }
//
//  return new Blob([uInt8Array], {
//    type: contentType
//  });
//}

function validateImage2() {
  if (canvas2 != null) {
    image2 = new Image();
    image2.onload = restartJcrop;
    image2.src = canvas2.toDataURL('image/png');
	  console.log(image2.src);
  } else restartJcrop();
}

function restartJcrop() {
  if (jcrop_api2 != null) {
    jcrop_api2.destroy();
  }
  $("#views2").empty();
  $("#views2").append("<canvas id=\"canvas\">");
  canvas2 = $("#canvas")[0];
  context2 = canvas2.getContext("2d");
  canvas2.width = image2.width;
  canvas2.height = image2.height;
  context2.drawImage(image2, 0, 0);
  $("#canvas").Jcrop({
    onSelect: selectcanvas,
    onRelease: clearcanvas,
    boxWidth: crop_max_width2,
    boxHeight: crop_max_height2
	  
  }, function() {
    jcrop_api2= this;
  });
  clearcanvas();
}

function clearcanvas() {
	
  prefsize = {
    x: 0,
    y: 0,
    w: canvas2.width,
    h: canvas2.height,
  };
	
}

function selectcanvas(coords) {
  prefsize2 = {
    x: Math.round(coords.x),
    y: Math.round(coords.y),
    w: Math.round(coords.w),
    h: Math.round(coords.h)
  };
}

function applyCrop() {
  canvas2.width = prefsize2.w;
  canvas2.height = prefsize2.h;
  context2.drawImage(image2, prefsize2.x, prefsize2.y, prefsize2.w, prefsize2.h, 0, 0, canvas2.width, canvas2.height);
  validateImage2();
}

$("#cropbutton2").click(function(e) {
  applyCrop();
});

	

//	document.getElementById('submitcropp').addEventListener('click',function(){
//		
//		
//	formData = new FormData();
//	
//  var blob = dataURLtoBlob(canvas.toDataURL('image/png'));
//		
//		console.log(blob);
//		
//		console.log(formData);
//		
//		
//		
//		
//	});
		
	

  });

	