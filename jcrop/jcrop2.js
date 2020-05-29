$(document).ready(function() {

    var crop_max_width2
    crop_max_width2 = 444;
    var crop_max_height2
    crop_max_height2 = 700;
    var jcrop_api2;
    var canvas2;
    var context2;
    var image2;
    var prefsize2;
    var reader2;
    var colladding2;
    let originalImage = null;



    var arryblobimagemul2 = [];


    document.getElementById('cropmultiimglocalmain').addEventListener('click', function() {

        console.log(filesforcropcuplocal);
        var callfun = true;


        loadImagedl4(this);

        function loadImagedl4(event) {

            var cropmodalweburldeals2 = document.getElementById('cropmodalweburldeals2');
            cropmodalweburldeals2.style.display = "block";

            if (filesforcropcuplocal) {

                reader2 = new FileReader();
                canvas2 = null;
                reader2.onload = function(e) {
                    image2 = new Image();
                    image2.onload = validateImage;
                    image2.src = e.target.result;
                    originalImage = image2.src;
                }
                reader2.readAsDataURL(filesforcropcuplocal);
                console.log(reader2);
            }
        }

        function validateImage() {
            if (canvas2 != null) {
                image2 = new Image();
                image2.onload = restartJcrop;
                image2.src = canvas2.toDataURL('image/png');
                // console.log(image2.src);
            } else restartJcrop();
        }

        function restartJcrop() {
            if (jcrop_api2 != null) {
                jcrop_api2.destroy();
            }

            $("#viewsdeals2").empty();
            $("#viewsdeals2").append("<canvas id=\"canvas2\">");
            canvas2 = $("#canvas2")[0];
            context2 = canvas2.getContext("2d");
            canvas2.width = image2.width;
            canvas2.height = image2.height;
            context2.drawImage(image2, 0, 0);

            $("#canvas2").Jcrop({
                onSelect: selectcanvas,
                onRelease: clearcanvas,
                boxWidth: crop_max_width2,
                boxHeight: crop_max_height2

            }, function() {
                jcrop_api2 = this;
            });
            clearcanvas();
        }


        function clearcanvas() {

            prefsize2 = {
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

            validateImage();
            localStorage.setItem('originalImage', originalImage);
            var datacountt = "okok";
            document.getElementById('cropgetimagecode404').value = datacountt;
        }





        $("#cropbutton2").click(function(e) {
            applyCrop();

        });


        $("#resetmodal1").click(function(e) {
            //		alert('okok');
            jcrop_api2.destroy();
            //		reader = "ddee.jpg";
            var cropmodal = document.getElementById('cropmodal');
            //			
            cropmodal.style.display = "none";

        });


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
        var bloblocal;
        var image2;


        document.getElementById('submitcropp2').addEventListener('click', function() {

            //			var cropgetimagecode404 = document.getElementById('cropgetimagecode404').value;
            //			
            //			if(cropgetimagecode404=="")
            //				{
            //					alert("Please Crop the image");
            //				}
            //			else
            //				{}


            var cropmodalweburldeals2 = document.getElementById('cropmodalweburldeals2');
            cropmodalweburldeals2.style.display = "none";


            image2 = new Image();
            image2.src = canvas2.toDataURL('image/png');

            formData = image2.src;

            console.log(formData);

            bloblocal = dataURLtoBlob(formData);

            function blobToFile(theBlob, fileName) {

                theBlob.lastModifiedDate = new Date();
                theBlob.name = fileName;
                return theBlob;

            }
            var uniqueId = Math.random().toString(36).substring(2) +
                (new Date()).getTime().toString(36);

            var myFile;
            myFile = blobToFile(bloblocal, uniqueId);

            console.log(myFile);

            arryblobimagemul2.push(myFile);


            var i = arraylistcupmultiimg.length;
            while (i--) {
                for (var k = 0; k < arraylistposcupremovingmulti.length; k++) {
                    if (i == arraylistposcupremovingmulti[k]) {
                        arraylistcupmultiimg.splice(i, 1);
                    }
                }
            }


            arraylistposcupremovingmulti = [];

            console.log(arraylistposcupremovingmulti);

            console.log(arryblobimagemul2);



            arryblobimagemul2.forEach(function(item, index) {

                colladding2 = item;



            });

            if (callfun) {
                dolcall();
            }


            arryblobimagemul2 = [];

            return;


        });





        function dolcall() {
            callfun = false;

            arraylistcupmultiimg.push(colladding2);

            console.log(arraylistcupmultiimg);

            //		return;
        }


        document.getElementById('resetLocCoupon').addEventListener('click', resetCoupdialog);

        function resetCoupdialog() {
            var coupresetimg = localStorage.getItem('originalImage');
            image2 = new Image();
            image2.src = coupresetimg;
            restartJcrop();
        }

    });



});


// JavaScript Document