$(document).ready(function(){     // event for menu button
    $("#menuIcon").click(function(){
        $("#subMenu").toggleClass("hide");
    });
});


 $( "div.teamSkills" ).hide()
$("div.teamPics1").hover(function(event){ // event for skills info
	event.preventDefault() 
    $("div.teamPics1 div:first").show();
    $("div.teamPics1 div:last").css("visibility", "hidden");
    }, function(){
        $("div.teamPics1 div:first").hide();
        $("div.teamPics1 div:last").css("visibility", "visible");
    });

 $( "div.teamSkills" ).hide()
$("div.teamPics2").hover(function(event){ // event for skills info
	event.preventDefault() 
    $("div.teamPics2 div:first").show();
    $("div.teamPics2 div:last").css("visibility", "hidden");
    }, function(){
        $("div.teamPics2 div:first").hide();
        $("div.teamPics2 div:last").css("visibility", "visible");
    });

 $( "div.teamSkills" ).hide()
$("div.teamPics3").hover(function(event){ // event for skills info
	event.preventDefault() 
    $("div.teamPics3 div:first").show();
    $("div.teamPics3 div:last").css("visibility", "hidden");
    }, function(){
        $("div.teamPics3 div:first").hide();
        $("div.teamPics3 div:last").css("visibility", "visible");
    });


(function gallery(){ //events for client gallery

	var leftArrow = document.getElementById('leftArrow');
	var rightArrow = document.getElementById('rightArrow');
	initImgNumber = 1;
	maxImgNumber = 4;

	leftArrow.addEventListener('click', function moveBackward(){
		var image = document.getElementById('image')
		initImgNumber--;
		if(initImgNumber == 0){
			initImgNumber = maxImgNumber;
		}
		image.setAttribute('src', 'clients/clients' + initImgNumber+ '.jpg')
	})


	rightArrow.addEventListener('click', function moveForward(){
		var image = document.getElementById('image')
		initImgNumber++;
		if(initImgNumber > maxImgNumber){
			initImgNumber = 1;
		}
		image.setAttribute('src', 'clients/clients' + initImgNumber+ '.jpg')
	})

})()