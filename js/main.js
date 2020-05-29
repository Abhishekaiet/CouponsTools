



/*Being studio icon page*/

/*1st icon*/
function NewPic()
{
	
document.getElementById("image").src="img/Icons/opreator1.png";
	
}

function oldpic()
{

document.getElementById("image").src="img/operator_tool.png";
}
/*2nd icon*/
function NewPic2()
{
document.getElementById("image2").src="img/Icons/opreator2.png";
}

function oldpic2()
{

document.getElementById("image2").src="img/usernamangment.png";
}
/*3rd icon*/
function NewPic3()
{
document.getElementById("image3").src="img/Icons/opreator3.png";
}

function oldpic3()
{

document.getElementById("image3").src="img/contentmanage.png";
}
/*4th icon*/
function NewPic4()
{
document.getElementById("image4").src="img/Icons/opreator4.png";
}

function oldpic4()
{

document.getElementById("image4").src="img/funclub.png";
}
/*5th icon*/
function NewPic5()
{
document.getElementById("image5").src="img/Icons/opreator5.png";
}

function oldpic5()
{

document.getElementById("image5").src="img/create.png";
}

/*6th icon*/
function NewPic6()
{
document.getElementById("image6").src="img/Icons/opreator6.png";
}

function oldpic6()
{

document.getElementById("image6").src="img/groupicon.png";
}

/*7th icon*/
function NewPic7()
{
document.getElementById("image7").src="img/Icons/opreator7.png";
}

function oldpic7()
{

document.getElementById("image7").src="img/promotion.png";
}

/*8th icon*/
function NewPic8()
{
document.getElementById("image8").src="img/Icons/opreator8.png";

}

function oldpic8()
{

document.getElementById("image8").src="img/itv.png";


}


/*9th icon*/
function NewPic9()
{
document.getElementById("image9").src="img/Icons/cupons.png";

}

function oldpic9()
{

document.getElementById("image9").src="img/cupons.png";

}


/*End studio icon page*/



/*being Search Bar on top bar*/

$(function () {
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });
    
    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
    
    
    //Do not include! This prevents the form from submitting for DEMO purposes only!
    $('form').submit(function(event) {
        event.preventDefault();
        return false;
    })
});



/*End Search Bar on top bar*/


$(function () {
    $('a[href="#form"]').on('click', function(event) {
        event.preventDefault();
        $('#form').addClass('open');
        $('#form > form > input[type="search"]').focus();
    });
    
    $('#form, #form button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
    
    
    //Do not include! This prevents the form from submitting for DEMO purposes only!
    $('form').submit(function(event) {
        event.preventDefault();
        return false;
    })
});


/*Dropdown menu*/




/*Being Opreator Friend Popup List Chekbox*/

