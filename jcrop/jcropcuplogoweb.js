$(document).ready(function() {


    var crop_max_width = 444;
    var crop_max_height = 700;
    var jcrop_api;
    var canvas;
    var context;
    var image;
    var prefsize;
    var reader;
    var imgelinkswebdcup;
    //var colladdingweblogodea;
    let originalImage = null;

    var arraywburldatalogocup = [];

    function toDataUrl(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function() {
            var reader = new FileReader();
            reader.onloadend = function() {
                callback(reader.result);
            }
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    };




    document.getElementById('logocupwebcalls').addEventListener('click', function() {

        //		if (arrayweblinkposionlogo.length >= 2)
        //				 {
        //					 alert('Please choose only one');
        //					 return;
        //}
        //		
        //				if(Array.isArray(arrayweblinkposionlogo) && arrayweblinkposionlogo.length)
        //				{
        //					datacallingmainhop();
        //					
        //				}
        //		else
        //		{
        //			alert('Please choose a image');
        //					return;
        //		}
        //		
        //		function datacallingmainhop()
        //		{}


        var jcrpcupweblogo = document.getElementById('jcrpcupweblogo');
        jcrpcupweblogo.style.display = "block";

        //		console.log(arrayweblinkposionlogo);



        arrayweblinkposioncuplogo.forEach(function(item, index) {

            imgelinkswebdcup = item;

        });


        console.log(imgelinkswebdcup);

        toDataUrl(imgelinkswebdcup, function(myBase64) {

            // myBase64 is the base64 string
            // converting base64 to blob to file
            const url = myBase64;
            fetch(url)
                .then(res => res.blob())
                .then(blob => {
                    var file = new File([blob], "google.jpg", { type: "image/jpeg" });
                    console.log(file);

                    loadImagedl4(this);

                    function loadImagedl4(event) {

                        if (file) {

                            reader = new FileReader();
                            canvas = null;
                            reader.onload = function(e) {
                                image = new Image();
                                image.onload = validateImage;
                                image.src = e.target.result;
                                originalImage = image.src;
                            }
                            reader.readAsDataURL(file);
                            console.log(reader);

                        }
                    }


                    function validateImage() {
                        if (canvas != null) {
                            image = new Image();
                            image.onload = restartJcrop;
                            image.src = canvas.toDataURL('image/png');
                            console.log(image.src);
                        } else restartJcrop();
                    }

                    function restartJcrop() {
                        if (jcrop_api != null) {
                            jcrop_api.destroy();
                        }

                        $("#viewscupweblogo").empty();
                        $("#viewscupweblogo").append("<canvas id=\"canvas\">");
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

                    }

                    $("#jcrpcupweblogoapply").click(function(e) {
                        applyCrop();
                    });


                    $("#resetmodal1").click(function(e) {
                        //		alert('okok');
                        jcrop_api.destroy();
                        //		reader = "ddee.jpg";
                        //		var cropmodal = document.getElementById('cropmodal');
                        ////			
                        //			cropmodal.style.display="none";

                    });
                    //	


                    function dataURLtoBlob(dataURL) {
                        var BASE64_MARKER = ';base64,';
                        if (dataURL.indexOf(BASE64_MARKER) == -1) {
                            var parts = dataURL.split(',');
                            var contentType = parts[0].split(':')[1];
                            var raw = decodeURIComponent(parts[1]);

                            return new Blob([raw], {
                                type: contentType
                            });
                        }

                        var parts = dataURL.split(BASE64_MARKER);
                        var contentType = parts[0].split(':')[1];
                        var raw = window.atob(parts[1]);
                        var rawLength = raw.length;
                        var uInt8Array = new Uint8Array(rawLength);
                        for (var i = 0; i < rawLength; ++i) {
                            uInt8Array[i] = raw.charCodeAt(i);
                        }

                        return new Blob([uInt8Array], {

                            type: contentType
                        });
                    }


                    var formData;
                    var blob;
                    var image;




                    document.getElementById('submitwblogocup').addEventListener('click', function() {




                        image = new Image();
                        image.src = canvas.toDataURL('image/png');

                        formData = image.src;

                        console.log(image.src);
                        console.log(image);

                        blob = dataURLtoBlob(formData);

                        console.log(formData);

                        //			var dellogo = document.getElementById('dellogo');
                        //		        dellogo.src = image.src;
                        //			
                        //			var dellogo = document.getElementById('dellogo');
                        //										    dellogo.style.zIndex="3";
                        //			
                        //			var dellogo = document.getElementById('dellogo');
                        //										    dellogo.style.position="absolute";
                        //		
                        //			var dellogo = document.getElementById('dellogo');
                        //										    dellogo.style.visibility="visible";

                        document.getElementById('myImg').src = image.src;
                        //										document.getElementById('oferrdescdublicate').value = selectedlink;

                        var myimagelogo = document.getElementById('myImg');
                        myimagelogo.style.visibility = "visible";

                        var selectlogotext = document.getElementById('selectlogotext');
                        selectlogotext.style.display = "none";
                        //			
                        var jcrpcupweblogo = document.getElementById('jcrpcupweblogo');
                        jcrpcupweblogo.style.display = "none";
                        //			
                        //			closewebsearch

                        var closewebsearch = document.getElementById('closewebsearch');
                        closewebsearch.style.display = "none";

                        var closechosoptn = document.getElementById('close-chosoptn');
                        closechosoptn.style.display = "none";
                        //			

                        //				arrayweblink.push(formData);

                        arraywburldatalogocup.push(formData);




                        //			var i = arrayweblink.length;
                        //while (i--) {
                        //	for( var k = 0; k < selectedimage.length; k++){
                        //    if (i == selectedimage[k]) {
                        //        arrayweblink.splice(i, 1);
                        //    }
                        //	}
                        //}

                        //		selectedimage = [];


                        arraywburldatalogocup.forEach(function(item, index) {

                            //			colladdingweblogodea = item;

                            selectedlink = item;

                            console.log(selectedlink);

                        });


                        arraywburldatalogocup = [];


                    });


                    //

                    document.getElementById('resetcoupweblogo').addEventListener('click', resetcoupwebdialog);

                    function resetcoupwebdialog() {
                        var delresetimg = localStorage.getItem('originalImage');
                        image = new Image();
                        image.src = delresetimg;
                        restartJcrop();
                    }
                });
        });






    });
});