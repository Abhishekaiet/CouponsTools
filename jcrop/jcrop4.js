$(function() {

    var crop_max_width4 = 444;
    var crop_max_height4 = 700;
    var jcrop_api4;
    var canvas4;
    var context4;
    var image4;
    var prefsize4;
    let originalImage = null;

    $("#dealogo").change(function() {

        loadImage4(this);

        var cropmodal4 = document.getElementById('cropmodal4');
        cropmodal4.style.display = "block";


    });

    function loadImage4(input) {
        if (input.files && input.files[0]) {
            var reader4 = new FileReader();
            canvas4 = null;
            reader4.onload = function(e) {
                image4 = new Image();
                image4.onload = validateImage4;
                image4.src = e.target.result;
                originalImage = image4.src;
            }
            reader4.readAsDataURL(input.files[0]);
            console.log(reader4);
        }
    }


    function validateImage4() {
        if (canvas4 != null) {
            image4 = new Image();
            image4.onload = restartJcrop;
            image4.src = canvas4.toDataURL('image/png');
        } else restartJcrop();
    }

    function restartJcrop() {
        if (jcrop_api4 != null) {
            jcrop_api4.destroy();
        }
        $("#views4").empty();
        $("#views4").append("<canvas id=\"canvas4\">");
        canvas4 = $("#canvas4")[0];
        context4 = canvas4.getContext("2d");
        canvas4.width = image4.width;
        canvas4.height = image4.height;
        context4.drawImage(image4, 0, 0);
        $("#canvas4").Jcrop({
            onSelect: selectcanvas,
            onRelease: clearcanvas,
            boxWidth: crop_max_width4,
            boxHeight: crop_max_height4

        }, function() {
            jcrop_api4 = this;
        });
        clearcanvas();
    }

    function clearcanvas() {

        prefsize = {
            x: 0,
            y: 0,
            w: canvas4.width,
            h: canvas4.height,
        };

    }

    function selectcanvas(coords) {
        prefsize4 = {
            x: Math.round(coords.x),
            y: Math.round(coords.y),
            w: Math.round(coords.w),
            h: Math.round(coords.h)
        };
    }



    function applyCrop() {

        canvas4.width = prefsize4.w;
        canvas4.height = prefsize4.h;
        context4.drawImage(image4, prefsize4.x, prefsize4.y, prefsize4.w, prefsize4.h, 0, 0, canvas4.width, canvas4.height);
        validateImage4();
        localStorage.setItem('originalImage', originalImage);
        var datacount = "okok";
        document.getElementById('cropgetimagecode3').value = datacount;

    }



    $("#cropbutton4").click(function(e) {
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

    //document.getElementById('resetdeallogo').addEventListener('click', resetDealdialog);

    function resetDealdialog() {
        var delresetimg = localStorage.getItem('originalImage');
        image4 = new Image();
        image4.src = delresetimg;
        restartJcrop();
    }
});