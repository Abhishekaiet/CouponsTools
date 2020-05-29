$(document).ready(function() {


    var crop_max_width = 700;
    var crop_max_height = 700;
    var jcrop_api;
    var canvas;
    var context;
    var image;
    var prefsize;
    var reader;
    var imgelinkswebdealls;


    document.getElementById('cropdealsright').addEventListener('click', function() {

        console.log(filesforcroplocal)

        loadImagedl4(this);

        function loadImagedl4(event) {

            if (filesforcroplocal) {

                reader = new FileReader();
                canvas = null;
                reader.onload = function(e) {
                    image = new Image();
                    image.onload = validateImage;
                    image.src = e.target.result;
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

            $("#viewswebdeal4").empty();
            $("#viewswebdeal4").append("<canvas id=\"canvas\">");
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

        }

        $("#cropbuttondelweb4").click(function(e) {
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

        document.getElementById('submitcroppdelsweb4').addEventListener('click', function() {

            image = new Image();
            image.src = canvas.toDataURL('image/png');

            formData = image.src;

            blob = dataURLtoBlob(formData);

            arraylistfile.push(blob);

            console.log(arraylistfile);

            var i = arraylistfile.length;
            while (i--) {
                for (var k = 0; k < arraylistposremoving.length; k++) {
                    if (i == arraylistposremoving[k]) {
                        arraylistfile.splice(i, 1);
                    }
                }
            }

            console.log(arraylistfile);

            arraylistposremoving = [];

            arraylistfile.forEach(function(item, index) {

                if (item) {

                    reader = new FileReader();
                    canvas = null;
                    reader.onload = function(e) {
                        image = new Image();
                        //      image.onload = validateImage;
                        image.src = e.target.result;

                        var ul = document.getElementById("sliderlist");
                        var div = document.createElement('div');
                        div.className = "item";
                        div.innerHTML = '<div style="width: 580px; height: 332px; background: white;"><img src=' + e.target.result + ' style="width:100%; height:100%;"></div>';
                        ul.appendChild(div);
                    }
                    reader.readAsDataURL(item);
                    console.log(reader);

                }

            });



        });

    });
});