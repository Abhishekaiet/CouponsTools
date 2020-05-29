// Global Variables
var selectedCouponIds = [];
// coupons globle variable




// deals 
function getDeals(data) {

    document.getElementById("couponsimagedeal").innerHTML = '';
    for (var i = 0; i < data.deals.length; i++) {
        var dealsData = data.deals[i];
        // var colorbackgroudurl = couponsdeals[i].colorbackgroudurl;
        var imageurl = data.deals[i].image[0].imageUrl;
        var name = data.deals[i].name;
        var code = data.deals[i].code;
        var description = data.deals[i].description;
        var expiryDate = data.deals[i].expiryDate;
        var offer = data.deals[i].offer;
        var priority = data.deals[i].priority;
        var address = data.deals[i].address
        var img = data.deals[i].image;
        var imagelogo = data.deals[i].imagelogo
        var expiryDate = data.deals[i].expiryDate
        var dealsId = data.deals[i].id;


        var ul = document.getElementById("couponsimagedeal");
        var li = document.createElement('li');
        li.innerHTML = '<input type="hidden" name="dealIds" value="' + dealsId + '" /><div class="dealsleft" style="padding: 10px; width: 80%; left: 0px; height: 193px; border-radius: 21px; position: relative; margin-top: 10px;" id="bgcolorfordeal"><input type="checkbox" style="width:22px; height:25px; position: absolute; top: 17px; right: -2px; z-index: 1;"><div style="width: 100%; height: 100%; padding:0px; position: absolute; background: rgba(255, 0, 0,0.5); display:none; border-radius: 11px; z-index: 2; text-align:center;" class="highlightclk11"><h3 style="color:white; padding: 9px; color: white; margin-top: 39%; margin-left: 49px; border: 1px solid white; width: 61%;">SELECTED</h3></div><div style="width: 100%; height: 180px; position: absolute; top: 16px; margin-left: 4px;"><img src=' + imageurl + ' style="object-fit:cover; border-radius: 16px;" id="imagerightdeals"></div><div class="bottomdiv"><div class="deslnameleft"><p id="dealsnameleft1">' + name + '</p></div></div></div>';
        ul.appendChild(li);

        li.addEventListener('click', listgetsdeal);

        function listgetsdeal($event) {

            let _dealsId = $event.target.closest('li').querySelector('input[type="hidden"]').value;
            let dealsData = data.deals.find(x => x.id === _dealsId);
            var imageurl = dealsData.image[0].imageUrl;
            var name = dealsData.name;
            var code = dealsData.code;
            var description = dealsData.description;
            var expiryDate = dealsData.expiryDate;
            var offer = dealsData.offer;
            var priority = dealsData.priority;
            var address = dealsData.address
            var img = dealsData.image;
            var imagelogo = dealsData.imagelogo
            var expiryDate = dealsData.expiryDate
            var priority = dealsData.priority




            var listsearch1 = document.getElementById("listsearch1");
            listsearch1.style.display = "none";


            var deldeals222 = document.getElementById("deldeals222");
            deldeals222.style.display = "block";

            var myCarousel = document.getElementById("myCarousel");
            myCarousel.style.display = "block";

            var dlgetmodal = document.getElementById("dlgetmodal");
            dlgetmodal.style.cssText = "z-index: 4; width: 10%; height: 13%; position: absolute; right: -6px;";

            var editiconsdeals = document.getElementById("editiconsdeals");
            editiconsdeals.style.width = "100%";


            var unslctcoups1 = document.getElementById("unslctcoups1").value;


            // getitemlist121.push(index);

            // console.log(getitemlist121);

            // for (var h = 0; h < getitemlist121.length; h++) {
            //     var curItem = getitemlist121[h];
            //     var foundCount = 0;
            //     // search array for item  


            //     for (var i = 0; i < getitemlist121.length; i++) {
            //         if (getitemlist121[i] == getitemlist121[h])
            //             foundCount++;
            //     }


            //     if (foundCount > 1) {
            //         // remove repeated item from new array
            //         for (var j = 0; j < newArr.length; j++) {
            //             if (newArr[j] == curItem) {
            //                 newArr.splice(j, 1);
            //                 j = j - 1;

            //             }


            //         }

            //     }

            // }
            var str = newArr.toString();
            listthecheckmar121 = str.split();
            listchecbarray121 = JSON.parse("[" + listthecheckmar121 + "]");
            console.log(listchecbarray121);


            //zohankhankk

            var editshow = document.getElementById('bodysearch1');
            editshow.style.display = "none";



            document.getElementById('delcomname').value = name;
            document.getElementById('entcname3').value = name;
            document.getElementById('deloffer').value = offer;
            document.getElementById('delofferc').value = offer;
            // document.getElementById('delplaceid').value = placeid;
            document.getElementById('deldescription').value = description;
            document.getElementById('deldescriptnc').value = description;
            // document.getElementById('delcate').value = cateogry;
            document.getElementById('delexpirydate').value = expiryDate;
            // document.getElementById('delcondtions').value = discalmer;
            document.getElementById('deladdress').value = address;
            document.getElementById('delpriority').value = priority;

            // document.getElementById('delzipcode').value = zipcode;
            document.getElementById('delqrcode').value = code;
            // document.getElementById('imagedel').value = imageurl;
            // document.getElementById('delimagelink').value = imagelink;
            document.getElementById('imagelogodel').value = logoimage;
            document.getElementById('dellogo').src = imagelogo;
            document.getElementById('dlimageoutput').src = imageurl;
            // document.getElementById('colorbackgroudurl').value = colorbackgroudurl;

            mvdellogo

            deldataobjects = zipcode;
            console.log(zipcode)

            var deladdbtn = document.getElementById('deladdbtn');
            deladdbtn.style.visibility = "hidden";

            var deladdbtn2 = document.getElementById('deladdbtn2');
            deladdbtn2.style.display = "block";

            var backgroundurlimage = document.getElementById('backgroundurlimage');
            backgroundurlimage.src = colorbackgroudurl;

            var myCarouseldealsweb = document.getElementById('myCarouseldealsweb');
            myCarouseldealsweb.style.zIndex = "4";

            var myCarouseldealsweb = document.getElementById('myCarouseldealsweb');
            myCarouseldealsweb.style.display = "block";

            img.forEach(function(item, index) {


                console.log(item);

                var ul = document.getElementById("sliderlist");
                var div = document.createElement('div');
                div.className = "item";
                $("#myCarouseldealsweb .item").first().addClass("active");
                div.innerHTML = '<div style="width: 489px; height: 332px; background: white;" id="div"><img src=' + item.imageUrl + ' style="width:100%; height:100%;"></div>';
                ul.appendChild(div);

                var removeimg = document.getElementById("div");
                removeimg.remove();
            });

            // zipcode.forEach(function(item) {
            //     var option = document.createElement('option');

            //     var dataconent = Object.keys(item);
            //     option.value = Object.keys(item);
            //     option.innerHTML = Object.keys(item);
            //     delselector.appendChild(option);

            //     delselector.style.display = "block";





            // });


            var dlimageoutput = document.getElementById('dlimageoutput');
            dlimageoutput.style.zIndex = "0";

            var delllogo = document.getElementById('dellogo');
            delllogo.style.visibility = "inherit";
            delllogo.style.position = "absolute";

            selectedplace_get = place;

            starCountRef1 = firebase.database().ref("/deals_new/" + index);




            var deldateshow = document.getElementById('deldateshow');
            deldateshow.style.display = "block";

            document.getElementById('dateon1').innerHTML = ExpiryDate;
            var datedel = document.getElementById('dateon1');
            datedel.style.display = "block";

            var maincoupons_frame = document.getElementById('mainconainercup');
            maincoupons_frame.style.display = "none";



            var deal_frame = document.getElementById('maincondeal');
            deal_frame.style.display = "block";

            var deldate = document.getElementById('deldate');
            deldate.style.display = "none";





            var dealimage = document.getElementById('dlimageoutput');
            dealimage.style.zIndex = "0";

            var deal_frame = document.getElementById('confrm_dealbtn');
            deal_frame.style.display = "none";

            var deloutput = document.getElementById('deloutput');
            deloutput.style.visibility = "hidden";

            var deal_frame = document.getElementById('update_dealbtn');
            deal_frame.style.display = "block";

            var addnewonedel = document.getElementById('addnewonedel');
            addnewonedel.style.display = "block";

            var removedel = document.getElementById('removedel');
            removedel.style.display = "none";

            var confbtncou = document.getElementById('confim_copons');
            confbtncou.style.display = "none";



            document.getElementById('deldelete').addEventListener('click', function() {

                console.log(starCountRef1);


                var r = confirm("Are you Sure to delete this Deals");
                if (r == true) {

                    starCountRef1.remove()
                        .then(function() {

                            alert('Coupons Has Been Deleted');
                            window.location.href = "creatingcoupons.html";

                        })
                        .catch(function(error) {
                            console.log("Remove failed: " + error.message)
                        });

                } else {
                    return;
                }
                //										   
                //
                //										   						   				   

            });

        }


    }

}











// end deals
function getcoupons(data) {
    document.getElementById("couponsimage").innerHTML = '';
    for (var index = 0; index < data.coupons.length; index++) {
        var coupndata = data.coupons[index];
        var imagelogo = data.coupons[index].imagelogo;
        var name = data.coupons[index].name;
        var description = data.coupons[index].description;
        var offer = data.coupons[index].offer;
        var imageurl = data.coupons[index].image[0].imageUrl;
        var address = data.coupons[index].address;
        var expiryDate = data.coupons[index].expiryDate;
        var discalmer = data.coupons[index].discalmer;
        var priority = data.coupons[index].priority;
        var code = data.coupons[index].code;
        const couponId = data.coupons[index].id;

        var ul = document.getElementById("couponsimage");
        var li = document.createElement('li');
        li.id = `couponHolder${index}`;
        li.innerHTML = '<input type="hidden" name="couponIds" value="' + couponId + '" /><div style="width: 89%; height: 103px; margin-top: 10px; padding:0px; position: relative;" id="cplframe"><div style="width: 100%; height: 123px; padding:0px; position: absolute; background: rgba(255, 0, 0,0.5); z-index: 2; display:none; text-align:center;" class="highlightclk"><h3 style="color:white; padding: 9px; color: white; margin-top: 11%; margin-left: 62px; border: 1px solid white; width: 61%;">SELECTED</h3></div><div style="width: 54px;height: 40px; position: absolute;left: 13px;top: 10px;" id="logodiv"><img src=' + imagelogo + ' style="width: 100%; height: 100%; object-fit: cover;" id="photosearchlist1"></div>' + '<div class="namedd"><p id="namedc">' + name + '</p></div><div class="desc"><p id="desccc">' + description + '</p></div><div class="offerdd"><p id="offerdc">' + offer + '</p></div><input class="checkk" type="checkbox" style="width:22px; height:25px; position: absolute; top: 8px; right: 3px; z-index: 1;" id="chkDeleteCoupons' + index + '" onclick="addCouponsToDelete(&quot;' + index + '&quot;)"><div class="rigtimage"><img src=' + imageurl + ' style="width: 100%; height: 100%; object-fit: cover;"></div></div>';
        ul.appendChild(li);

        function listgetcoupons($event) {
            let _couponId = $event.target.closest('li').querySelector('input[type="hidden"]').value;
            let couponsData = data.coupons.find(x => x.id === _couponId);
            var imagelogo = couponsData.imagelogo;
            var name = couponsData.name;
            var description = couponsData.description;
            var offer = couponsData.offer;
            var imageurl = couponsData.image[0].imageUrl;
            var address = couponsData.address;
            var expiryDate = couponsData.expiryDate;
            var discalmer = couponsData.discalmer;
            var priority = couponsData.priority;
            var code = couponsData.code;

            var entcname = document.getElementById("entcname");
            entcname.style.visibility = "visible";

            var delcouons2 = document.getElementById("delcouons2");
            delcouons2.style.display = "block";

            var createnewcouponsbtn = document.getElementById("createnewcouponsbtn");
            createnewcouponsbtn.style.display = "block";

            var createnewcouponsbtn22 = document.getElementById("createnewcouponsbtn22");
            createnewcouponsbtn22.style.display = "none";

            var unslctcoups = document.getElementById("unslctcoups").value;

            getitemlist.push(index);

            console.log(getitemlist);


            for (var h = 0; h < getitemlist.length; h++) {
                var curItem = getitemlist[h];
                var foundCount = 0;
                // search array for item  


                for (var i = 0; i < getitemlist.length; i++) {
                    if (getitemlist[i] == getitemlist[h])
                        foundCount++;
                }


                if (foundCount > 1) {
                    // remove repeated item from new array
                    for (var j = 0; j < newArr.length; j++) {
                        if (newArr[j] == curItem) {
                            newArr.splice(j, 1);
                            j = j - 1;

                        }


                    }

                }

            }
            var str = newArr.toString();
            listthecheckmar = str.split();
            listchecbarray = JSON.parse("[" + listthecheckmar + "]");
            console.log(listchecbarray);




            document.getElementById('entcname1').value = name;
            document.getElementById('entcname').value = name;
            document.getElementById('printdes').value = description;
            document.getElementById('printoffer').value = offer;
            document.getElementById('offer').value = offer;
            document.getElementById('entdesc').value = description;
            // document.getElementById('category').value = cateogry;
            document.getElementById('expiraydate').value = expiryDate;
            document.getElementById('tersconditons').value = discalmer;
            document.getElementById('address1').value = address;
            document.getElementById("priority").value = priority;

            //document.getElementById('zipcode').value = zipcode;
            document.getElementById('qrcode').value = code;
            // document.getElementById('zipcode').value = zipcode;
            // document.getElementById('editplaceid').value = placeid;
            document.getElementById('myImg').src = imagelogo;
            document.getElementById('elegetmapimagerightcup').src = imageurl;

            // document.getElementById('elegetmapimagerightcup').src = imageurl;

            // console.log(imagelogo);

            document.getElementById('imageurl11').value = imageurl[0];
            // document.getElementById('logourl11').value = imagelogo;


            // dataobjects = zipcode;

            //armankhan
            document.getElementById('addnewonebtton').style.display = "block";
            document.getElementById('addbtn').style.visibility = "hidden";



            var myImg2 = document.getElementById('myImg');
            myImg2.style.visibility = "visible";

            var selectlogotext = document.getElementById('selectlogotext');
            selectlogotext.style.visibility = "hidden";


            var myCarousel = document.getElementById('myCarousel');
            myCarousel.style.display = "block";

            var editshow = document.getElementById('elegetmapimagerightcup');
            editshow.style.display = "block";

            // imageurl.forEach(function(item, index) {

            //     console.log(item);


            //     var ul = document.getElementById("sliderlistcupwebmultimain");
            //     var div = document.createElement('div');
            //     div.className = "item";

            //     $("#myCarousel .item").first().addClass("active");
            //     div.innerHTML = '<div class="imgcarousel" style="width: 407px; height: 345px; background: white;"><img src=' + item + ' style="width:100%; height:100%;"></div>';
            //     ul.appendChild(div);

            // });


            //									   
            // zipcode.forEach(function(item) {
            //     var option = document.createElement('option');

            //     var dataconent = Object.keys(item);
            //     option.value = Object.keys(item);
            //     option.innerHTML = Object.keys(item);
            //     selector.appendChild(option);

            //     selector.style.display = "block";



            // });


            // document.getElementById('backgrondurl').value = backgroundurl;


            // var backur = document.getElementById('imagebackground');
            // backur.src = backgroundurl;


            // var setvalue = document.getElementById('priority').value = priority;
            // var setvalue1 = document.getElementById('trfl').value = isPromoted;

            //                                    



            // selectedplace_get = place;

            // starCountRef1 = firebase.database().ref("/coupons_new/" + index);


            // var editshow = document.getElementById('bodysearch1');
            // var editshow = document.getElementById('bodysearch1');
            // editshow.style.display = "none";

            // document.getElementById('dateon').innerHTML = ExpiryDate;

            // var datepcoupons = document.getElementById('datepicc');
            // datepcoupons.style.display = "block";

            // var fielddate = document.getElementById('expiraydate2');
            // fielddate.style.display = "none";


            // var cmraeditlogo = document.getElementById('cmraeditlogo');
            // cmraeditlogo.style.visibility = "visible";

            // var oncoupons = document.getElementById('dateon');
            // oncoupons.style.display = "block";




            // var coupons_frame = document.getElementById('mainconainercup');
            // coupons_frame.style.display = "block";

            // var updatebtn = document.getElementById('updatebtn');
            // updatebtn.style.display = "block";

            // var addnewbtn121 = document.getElementById('addnewbtn121');
            // addnewbtn121.style.display = "block";

            // var confbtncou = document.getElementById('confim_copons');
            // confbtncou.style.display = "none";

            // var cancelbtn = document.getElementById('cancelbtn');
            // cancelbtn.style.display = "none";


            // var deal_frame = document.getElementById('maincondeal');
            // deal_frame.style.display = "none";
            // //									   



            // var selectlogotext = document.getElementById('selectlogotext');
            // selectlogotext.style.display = "none";


            // document.getElementById('delete').addEventListener('click', function() {


            //     console.log(starCountRef1);

            //     var r = confirm("Are you Sure to delete this Deals");
            //     if (r == true) {

            //         starCountRef1.remove()

            //         .then(function() {

            //             alert('Data Has been Deleted');

            //             window.location.href = "creatingcoupons.html";

            //         })

            //         .catch(function(error) {
            //             console.log("Remove failed: " + error.message)
            //         });

            //     } else {
            //         return;
            //     }


            // });

        }

        li.addEventListener('click', listgetcoupons);
    }
}

// $(function() {
//     getcoupons()
// });

function businessDetails(business_id) {
    var request = new XMLHttpRequest()

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'https://proxy.actv.05media.com/rest/private/sincommunityhubservice/getBusiness/' + business_id + '', true)
    request.setRequestHeader("Authorization", 'bearer ' + localStorage.getItem('_token'));

    request.onload = function() {
        // Begin accessing JSON data here


        // var businessdetailsData = data.business;

        var data = JSON.parse(this.response)


        // for (var i = 0; i < option.length; i++) {
        //     var displayName = option[i].displayName;
        //     var el = document.createElement("option");
        //     el.textContent = displayName;
        //     el.value = option[i].businessId;
        //     select.appendChild(el);
        // }
        getcoupons(data)
        getDeals(data)
    }

    // Send request
    request.send();


}





// drop down get business list
// function dropDownList() {

//     var select = document.getElementById("selectName");

//     for (var i = 0; i < options.promotionBusiness.length; i++) {
//         var displayName = options.promotionBusiness[i].displayName;
//         var el = document.createElement("option");
//         el.textContent = displayName;
//         el.value = options.promotionBusiness[i].businessId;
//         select.appendChild(el);
//     }
// }


// $(function() {
//     dropDownList()
// });



function dropDownList() {

    var select = document.getElementById("selectName");



    var request = new XMLHttpRequest()

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'https://proxy.actv.05media.com/rest/private/sincommunityhubservice/getLandingPage?offset=0&limit=1', true)
    request.setRequestHeader("Authorization", 'bearer ' + localStorage.getItem('_token'));

    request.onload = function() {
        // Begin accessing JSON data here

        var data = JSON.parse(this.response)

        option = data.promotionBusiness;

        for (var i = 0; i < option.length; i++) {
            var displayName = option[i].displayName;
            var el = document.createElement("option");
            el.textContent = displayName;
            el.value = option[i].businessId;
            select.appendChild(el);
        }


    }

    // Send request
    request.send()
}

$(function() {
    dropDownList()
});


// onclick change event
function clickonchange(value) {

    // document.getElementById("entcname").value = options[].displayName

    // var businessId = document.getElementById("selectName").value;
    var business_id = document.getElementById("selectName").value;
    // var businefilter = coupons.filter(function(item) {
    //     return item.businessId == business_id;
    // });

    // businesslistfilter = options.find(function(blistitem) {
    //     return blistitem.businessId == business_id;
    // })

    // businesfilterdeals = couponsdeals.filter(function(item) {
    //     return item.businessId == business_id;
    // });



    // getcoupons(businefilter)
    // filterBusinessList(businesslistfilter)
    // getDeals(businesfilterdeals)

    businessDetails(business_id)
}



// end onclick event

// drop down javascript code
$(document).ready(function() {
    $('.js-example-basic-single').select2({
        placeholder: "select customer/business here",
        // allowClear: true
        searchInputPlaceholder: 'My custom placeholder...'
    });

});














// reset function for createcoupons

function reset() {
    // document.getElementById("output1").src = "";
    document.getElementById("listsearch").value = "";
    document.getElementById("printdes").value = "";
    document.getElementById("printoffer").value = "";
    document.getElementById("address1").value = "";
    document.getElementById("qrcode").value = "";
    document.getElementById("expiraydate").value = "";
    document.getElementById("tersconditons").value = "";

    document.getElementById("multiple").value = "";

    document.getElementById("priority").selectedIndex = 0;
    document.getElementById('searchtype').selectedIndex = 0;
    document.getElementById("select").selectedIndex = 0;
    document.getElementById("trfl").selectedIndex = 0;


    document.getElementById('myImg').style.visibility = 'hidden';
    var selectlogotext = document.getElementById('selectlogotext');
    selectlogotext.style.display = "block";

    document.getElementById('elegetmapimagerightcup').style.visibility = 'hidden';
    var images_coupons = document.getElementById('images_coupons');
    images_coupons.style.display = "block";

    var zipaddednotification = document.getElementById('zipaddednotification');
    zipaddednotification.style.display = "none";
}


// delete function for createcoupons

function addCouponsToDelete(couponId) {
    let selectCheckbox = document.getElementById(`chkDeleteCoupons${couponId}`);
    if (selectCheckbox.checked) {
        if (selectedCouponIds.indexOf(couponId) < 0) selectedCouponIds.push(couponId);
    } else {
        if (selectedCouponIds.indexOf(couponId) > -1) {
            selectedCouponIds.splice(selectedCouponIds.indexOf(couponId), 1);
        }
    }
}

function deleteCoupon() {
    let _confirm = confirm("Are you Sure to delete selected Coupons");
    if (!_confirm) return;

    selectedCouponIds.forEach(couponId => {
        firebase.database().ref("coupons_new/" + couponId).remove();
        if (document.getElementById(`couponHolder${couponId}`)) document.getElementById(`couponHolder${couponId}`).remove();
    })
}



// coopon code function same two coupons match db

function matchCouponsCode() {


    document.getElementById("confim_copons").disabled = false;
    var textvalue = document.getElementById("qrcode").value;



    firebase.database().ref('/coupons_new/').once('value', function(snapshot) {
        var found = false;

        snapshot.forEach(element => {
            var dbvalue = element.val();
            if (dbvalue.code == textvalue) {
                found = true;

            }
        });

        if (found) {

            alert('Coupon code already exist')
            document.getElementById("confim_copons").disabled = true;
        }



    });
}



// reset  function for dealcoupons


var cancelbtn = document.getElementById('cancelbtnDeal');
cancelbtn.style.display = "none";

function resetDeal() {

    document.getElementById("deladdress").value = ""
    document.getElementById("delofferc").value = ""
    document.getElementById("deldescriptnc").value = ""
    document.getElementById("delqrcode").value = ""
    document.getElementById("delcondtions").value = ""
    document.getElementById("delexpirydate").value = ""
    document.getElementById("delmultiple").value = ""
    document.getElementById("listsearch1").value = ""

    // document.getElementById("multiple").value = "";

    document.getElementById("delpriority").selectedIndex = 0;
    document.getElementById("selectdel").selectedIndex = 0;
    document.getElementById("dltrfl").selectedIndex = 0;

    document.getElementById('dlimageoutput').style.visibility = 'hidden';
    var dlgetmodal = document.getElementById('dlgetmodal');
    dlgetmodal.style.display = "block";

    document.getElementById('deloutput').style.visibility = 'hidden';
    var mvdellogo = document.getElementById('mvdellogo');
    mvdellogo.style.display = "block";

    // var zipaddednotification = document.getElementById('zipaddednotification');
    // zipaddednotification.style.display = "none";


}



// deal code function same two coupons match db

function matchDealcouponscode() {

    document.getElementById("confrm_dealbtn").disabled = false;
    var dealTextvalue = document.getElementById("delqrcode").value;

    firebase.database().ref('/deals_new/').once('value', function(snapshot) {
        var found = false;

        snapshot.forEach(element => {
            var dbdealvalue = element.val();
            if (dbdealvalue.code == dealTextvalue) {
                found = true;

            }
        });

        if (found) {

            alert('Coupon code already exist')
            document.getElementById("confrm_dealbtn").disabled = true;
        }



    });
}


function selectAllCoupons() {

    var checkboxes = document.querySelectorAll('#couponsimage input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = true;
    }
    let inputs = document.getElementsByName('couponIds');
    for (var i = 0, len = inputs.length; i < len; i++) {
        selectedCouponIds.push(inputs[i].value);
    }
}

//  All select deal

function selectAllDeals() {
    var chechboxes = document.querySelectorAll('#couponsimagedeal input[type="checkbox"]');
    for (var i = 0; i < chechboxes.length; i++) {
        chechboxes[i].checked = true;
    }

}

// End All select deal




function zoomin() {

    var GFG = document.getElementById("canvas");
    var currWidth = GFG.clientWidth;
    GFG.style.width = (currWidth + 40) + "px";
    var currHeight = GFG.clientHeight;
    GFG.style.height = (currHeight + 40) + "px";
}


function zoomout() {
    var GFG = document.getElementById("canvas");
    var currWidth = GFG.clientWidth;
    GFG.style.width = (currWidth - 40) + "px";
    var currHeight = GFG.clientHeight;
    GFG.style.height = (currHeight - 40) + "px";
}





function zoomincupnlogoweb() {

    var GFG = document.getElementById("canvas");
    var currWidth = GFG.clientWidth;
    GFG.style.width = (currWidth + 40) + "px";
    var currHeight = GFG.clientHeight;
    GFG.style.height = (currHeight + 40) + "px";
}


function zoomoutcupnlogoweb() {
    var GFG = document.getElementById("canvas");
    var currWidth = GFG.clientWidth;
    GFG.style.width = (currWidth - 40) + "px";
    var currHeight = GFG.clientHeight;
    GFG.style.height = (currHeight - 40) + "px";
}


function zoomincupnlocal() {

    var GFG = document.getElementById("canvas2");
    var currWidth = GFG.clientWidth;
    GFG.style.width = (currWidth + 40) + "px";
    var currHeight = GFG.clientHeight;
    GFG.style.height = (currHeight + 40) + "px";
}


function zoomoutcupnlocal() {
    var GFG = document.getElementById("canvas2");
    var currWidth = GFG.clientWidth;
    GFG.style.width = (currWidth - 40) + "px";
    var currHeight = GFG.clientHeight;
    GFG.style.height = (currHeight - 40) + "px";
}


function zoomincupnweb() {

    var GFG = document.getElementById("canvas");
    var currWidth = GFG.clientWidth;
    GFG.style.width = (currWidth + 40) + "px";
    var currHeight = GFG.clientHeight;
    GFG.style.height = (currHeight + 40) + "px";
}


function zoomoutcupnweb() {
    var GFG = document.getElementById("canvas");
    var currWidth = GFG.clientWidth;
    GFG.style.width = (currWidth - 40) + "px";
    var currHeight = GFG.clientHeight;
    GFG.style.height = (currHeight - 40) + "px";
}


// End coupons zoomin and zoomout


// Deals zoomin and zoomout

function zoominDealLogo() {

    var GFG = document.getElementById("canvas4");
    var currWidth = GFG.clientWidth;
    GFG.style.width = (currWidth + 40) + "px";
    var currHeight = GFG.clientHeight;
    GFG.style.height = (currHeight + 40) + "px";

}


function zoomoutDealLogo() {
    var GFG = document.getElementById("canvas4");
    var currWidth = GFG.clientWidth;
    GFG.style.width = (currWidth - 40) + "px";
    var currHeight = GFG.clientHeight;
    GFG.style.height = (currHeight - 40) + "px";
}



function zoominDealLogoweb() {

    var GFG = document.getElementById("canvas");
    var currWidth = GFG.clientWidth;
    GFG.style.width = (currWidth + 40) + "px";
    var currHeight = GFG.clientHeight;
    GFG.style.height = (currHeight + 40) + "px";
}


function zoomoutDealLogoweb() {
    var GFG = document.getElementById("canvas");
    var currWidth = GFG.clientWidth;
    GFG.style.width = (currWidth - 40) + "px";
    var currHeight = GFG.clientHeight;
    GFG.style.height = (currHeight - 40) + "px";
}


function zoominDealLocal() {

    var GFG = document.getElementById("canvas");
    var currWidth = GFG.clientWidth;
    GFG.style.width = (currWidth + 40) + "px";
    var currHeight = GFG.clientHeight;
    GFG.style.height = (currHeight + 40) + "px";
}


function zoomoutDealLocal() {
    var GFG = document.getElementById("canvas");
    var currWidth = GFG.clientWidth;
    GFG.style.width = (currWidth - 40) + "px";
    var currHeight = GFG.clientHeight;
    GFG.style.height = (currHeight - 40) + "px";
}


function zoominDealweb() {

    var GFG = document.getElementById("canvas");
    var currWidth = GFG.clientWidth;
    GFG.style.width = (currWidth + 40) + "px";
    var currHeight = GFG.clientHeight;
    GFG.style.height = (currHeight + 40) + "px";
}


function zoomoutDealweb() {
    var GFG = document.getElementById("canvas");
    var currWidth = GFG.clientWidth;
    GFG.style.width = (currWidth - 40) + "px";
    var currHeight = GFG.clientHeight;
    GFG.style.height = (currHeight - 40) + "px";
}