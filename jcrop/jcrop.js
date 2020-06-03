jQuery(function($) {

    var crop_max_width = 444;
    var crop_max_height = 700;
    var jcrop_api;
    var canvas;
    var context;
    var image;
    var prefsize;
    var reader;
    let originalImage = null;

    //	$("#filelogo").change(function() {
    //	
    ////  loadImage(this);
    //		
    //	var cropmodalcallingimage = document.getElementById('cropmodalcallingimage');
    //cropmodalcallingimage.style.display = "block";
    //	
    //	
    //});


    $("#filelogo").change(function() {

        loadImage(this);
        var jcropmodal = document.getElementById('cropmodal');
        jcropmodal.style.display = "block";



    });
    //	

    function loadImage(event) {
        if (event.files && event.files[0]) {
            reader = new FileReader();
            canvas = null;
            reader.onload = function(e) {
                image = new Image();
                image.onload = validateImage;
                image.src = e.target.result;
                originalImage = image.src;
            }
            reader.readAsDataURL(event.files[0]);
            console.log(reader);
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
    //
    function validateImage() {
        if (canvas != null) {
            image = new Image();
            image.onload = restartJcrop;
            image.src = canvas.toDataURL('image/png');
            console.log(image.src);
        } else restartJcrop();
    }
    //




    function restartJcrop() {

        if (jcrop_api != null) {
            jcrop_api.destroy();
        }

        $("#views").empty();
        $("#views").append("<canvas id=\"canvas\">");
        canvas = $("#canvas")[0];
        context = canvas.getContext("2d");
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0);

        $("#canvas").Jcrop({
            onSelect: selectcanvas,
            onRelease: clearcanvas,
            boxWidth: crop_max_width,
            boxHeight: crop_max_height

        }, function() {
            jcrop_api = this;
        });
        clearcanvas();
    }

    //	document.getElementById('resetmodal1').addEventListener('click', function (){
    //	
    //		if (jcrop_api != null) {
    //    jcrop_api.destroy();
    //  }
    //		var cropmodal = document.getElementById('cropmodal');
    //			
    //			cropmodal.style.display="none";
    //		
    //		
    //		});

    function clearcanvas() {

        prefsize = {
            x: 0,
            y: 0,
            w: canvas.width,
            h: canvas.height,
        };

    }


    function selectcanvas(coords) {
        prefsize = {
            x: Math.round(coords.x),
            y: Math.round(coords.y),
            w: Math.round(coords.w),
            h: Math.round(coords.h)
        };
    }



    function applyCrop() {

        canvas.width = prefsize.w;
        canvas.height = prefsize.h;
        context.drawImage(image, prefsize.x, prefsize.y, prefsize.w, prefsize.h, 0, 0, canvas.width, canvas.height);
        validateImage();
        localStorage.setItem('originalImage', originalImage);

        var demodata = "okok";


        document.getElementById('cropgetimagecode1').value = demodata;
    }

    $("#cropbutton").click(function(e) {
        applyCrop();
    });


    $("#resetmodal1").click(function(e) {
        //		alert('okok');
        jcrop_api.destroy();
        //		reader = "ddee.jpg";
        var cropmodal = document.getElementById('cropmodal');
        //			
        cropmodal.style.display = "none";

    });
    //	

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

    //document.getElementById('resetCoupLogo').addEventListener('click', resetCoupLogodialog);

    function resetCoupLogodialog() {
        var coupresetimg = localStorage.getItem('originalImage');
        image = new Image();
        image.src = coupresetimg;
        restartJcrop();
    }


});