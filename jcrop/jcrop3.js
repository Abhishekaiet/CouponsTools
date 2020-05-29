$(document).ready(function() {

    var crop_max_width
    crop_max_width = 444;
    var crop_max_height
    crop_max_height = 700;
    var jcrop_api;
    var canvas;
    var context;
    var image;
    var prefsize;
    var reader;
    var imgelinkswebdealls;
    var colladding;
    let originalImage = null;


    var arryblobimage = [];


    document.getElementById('getimgloclinmodule').addEventListener('click', function() {

        console.log(filesforcroplocal);
        var callfun = true;


        loadImagedl4(this);

        function loadImagedl4(event) {

            var cropmodal3 = document.getElementById('cropmodal3');
            cropmodal3.style.display = "block";

            if (filesforcroplocal) {

                reader = new FileReader();
                canvas = null;
                reader.onload = function(e) {
                    image = new Image();
                    image.onload = validateImage;
                    image.src = e.target.result;
                    originalImage = image.src;

                }
                reader.readAsDataURL(filesforcroplocal);
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

            $("#views3").empty();
            $("#views3").append("<canvas id=\"canvas\">");
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

            var datacountt = "okok";

            document.getElementById('cropgetimagecode404').value = datacountt;


        }

        $("#applycropping3").click(function(e) {
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
        var image;


        document.getElementById('sbmtlcl4dealright').addEventListener('click', function() {

            var cropgetimagecode404 = document.getElementById('cropgetimagecode404').value;

            if (cropgetimagecode404 == "") {
                alert("Please Crop the image");
            } else {

                var cropmodal3 = document.getElementById('cropmodal3');
                cropmodal3.style.display = "none";


                image = new Image();
                image.src = canvas.toDataURL('image/png');

                formData = image.src;

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

                arryblobimage.push(myFile);


                var i = arraylistfile.length;
                while (i--) {
                    for (var k = 0; k < arraylistposremoving.length; k++) {
                        if (i == arraylistposremoving[k]) {
                            arraylistfile.splice(i, 1);
                        }
                    }
                }
                arraylistposremoving = [];

                console.log(arraylistposremoving);

                console.log(arryblobimage);



                arryblobimage.forEach(function(item, index) {

                    colladding = item;



                });

                if (callfun) {
                    dolcall();
                }


                arryblobimage = [];

                return;






            }

        });





        function dolcall() {
            callfun = false;

            arraylistfile.push(colladding);

            console.log(arraylistfile);

            //		return;
        }


        document.getElementById('resetdeallocal').addEventListener('click', resetDeallocaldialog);

        function resetDeallocaldialog() {
            var delresetimg = localStorage.getItem('originalImage');
            image = new Image();
            image.src = delresetimg;
            restartJcrop();
        }

    });

});