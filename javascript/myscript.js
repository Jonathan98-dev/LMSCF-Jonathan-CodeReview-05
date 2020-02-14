$(document).ready(function() {

// for getting movies in html

    console.log(movies.length)


    for(i=0; i< movies.length; i++)
    {
    	$("#movieContainer").append("<div class = 'moviebg text-light col-sm-12 col-md-5 d-lg-flex h-50 m-3'><img class  ='align-self-center m-3 border border-light rounded' src='"+movies[i].image+"' alt='movie'><div class = 'align-self-center'><div class = 'h3'>"+movies[i].name+"</div><div class = 'h6 font-weight-light my-3'>"+movies[i].desc+"</div><div class = 'd-flex'><div class='btn-group h-50 align-self-center pr-3' role='group' aria-label='Basic example'><button id = 'dislikebtn"+[i]+"' type='button' class='dislikebuttonpush btn btn-danger bg-danger'><img src='img/like.png' alt='like' class = 'w-75'></button><button id = 'likebtn"+[i]+"' type='button' class='likebuttonpush btn btn-success buttonbg '><img src='img/like.png' alt='movie' class = 'w-75 rotate'></button></div><span id ='counter"+[i]+"' class='bg-success h1 px-4 py-2 rounded-circle'>0</span></div></div></div>')")

    	console.log("")
    }

  
//for like and dislike buttons

	//template

    $("#likebt").on("click", function(){
    	console.log("click")
    	var counter = Number($("#likecounter").html())
    	counter++;
    	console.log(counter)
    	$("#likecounter").html(counter)

    	if(counter < 1)
    	{
    		$("#likecounter").removeClass("bg-success").addClass("bg-danger")
    	}else
    	{
    		$("#likecounter").removeClass("bg-danger").addClass("bg-success")
    	}
    })

    $("#dislikebt").on("click", function(){
    	console.log("click")
    	var counterdis = Number($("#likecounter").html())
    	counterdis--;
    	console.log(counterdis)
    	$("#likecounter").html(counterdis)

    	if(counterdis < 1)
    	{
    		$("#likecounter").removeClass("bg-success").addClass("bg-danger")
    	}else
    	{
    		$("#likecounter").removeClass("bg-danger").addClass("bg-success")
    	}
    })





    // real

	 
    //for dislikes
    $(".dislikebuttonpush").on("click", function()
    	{
    	console.log("dislike")

    	switch($(this).attr("id"))
    	{	

    		//for more dislike buttons

    		// case "dislikebtn###":
    		// 	console.log("disbtn###")

		    // 	var dislike### = Number($("#counter###").html())
		    // 	dislike##--;
		    	
		    // 	$("#counter###").html(dislike###)

		    // 	if(dislike###< 1)
		    // 	{
		    // 		$("#counter###").removeClass("bg-success").addClass("bg-danger")
		    // 	}else
		    // 	{
		    // 		$("#counter###").removeClass("bg-danger").addClass("bg-success")
		    // 	}

    		// break;


    		case "dislikebtn0":
    			console.log("disbtn0")

		    	var dislike0 = Number($("#counter0").html())
		    	dislike0--;
		    	
		    	$("#counter0").html(dislike0)

		    	if(dislike0 < 1)
		    	{
		    		$("#counter0").removeClass("bg-success").addClass("bg-danger")
		    	}else
		    	{
		    		$("#counter0").removeClass("bg-danger").addClass("bg-success")
		    	}

    		break;


    		case "dislikebtn1":
    			console.log("disbtn1")

		    	var dislike1 = Number($("#counter1").html())
		    	dislike1--;
		    	
		    	$("#counter1").html(dislike1)

		    	if(dislike1< 1)
		    	{
		    		$("#counter1").removeClass("bg-success").addClass("bg-danger")
		    	}else
		    	{
		    		$("#counter1").removeClass("bg-danger").addClass("bg-success")
		    	}

    		break;

    		case "dislikebtn2":
    			console.log("disbtn2")

		    	var dislike2 = Number($("#counter2").html())
		    	dislike2--;
		    	
		    	$("#counter2").html(dislike2)

		    	if(dislike2< 1)
		    	{
		    		$("#counter2").removeClass("bg-success").addClass("bg-danger")
		    	}else
		    	{
		    		$("#counter2").removeClass("bg-danger").addClass("bg-success")
		    	}

    		break;

    		case "dislikebtn3":
    			console.log("disbtn3")

		    	var dislike3 = Number($("#counter3").html())
		    	dislike3--;
		    	
		    	$("#counter3").html(dislike3)

		    	if(dislike3< 1)
		    	{
		    		$("#counter3").removeClass("bg-success").addClass("bg-danger")
		    	}else
		    	{
		    		$("#counter3").removeClass("bg-danger").addClass("bg-success")
		    	}

    		break;

    		case "dislikebtn4":
    			console.log("disbtn4")

		    	var dislike4 = Number($("#counter4").html())
		    	dislike4--;
		    	
		    	$("#counter4").html(dislike4)

		    	if(dislike4< 1)
		    	{
		    		$("#counter4").removeClass("bg-success").addClass("bg-danger")
		    	}else
		    	{
		    		$("#counter4").removeClass("bg-danger").addClass("bg-success")
		    	}

    		break;

    		case "dislikebtn5":
    			console.log("disbtn5")

		    	var dislike5 = Number($("#counter5").html())
		    	dislike5--;
		    	
		    	$("#counter5").html(dislike5)

		    	if(dislike5< 1)
		    	{
		    		$("#counter5").removeClass("bg-success").addClass("bg-danger")
		    	}else
		    	{
		    		$("#counter5").removeClass("bg-danger").addClass("bg-success")
		    	}

    		break;

    		case "dislikebtn6":
    			console.log("disbtn6")

		    	var dislike6 = Number($("#counter6").html())
		    	dislike6--;
		    	
		    	$("#counter6").html(dislike6)

		    	if(dislike6< 1)
		    	{
		    		$("#counter6").removeClass("bg-success").addClass("bg-danger")
		    	}else
		    	{
		    		$("#counter6").removeClass("bg-danger").addClass("bg-success")
		    	}

    		break;
    	}



		})

    







    //for likes

   	$(".likebuttonpush").on("click", function()
    	{
    	console.log("like")

    	switch($(this).attr("id"))
    	{
    		//for more like buttons

    		// case "likebtn???":
    		// 	console.log("likebtn???")

		    // 	var like??? = Number($("#counter???").html())
		    // 	like???++;
		    	
		    // 	$("#counter???").html(like???)

		    // 	if(like??? < 1)
		    // 	{
		    // 		$("#counter???").removeClass("bg-success").addClass("bg-danger")
		    // 	}else
		    // 	{
		    // 		$("#counter???").removeClass("bg-danger").addClass("bg-success")
		    // 	}

    		// break;


    		case "likebtn0":
    			console.log("likebtn0")

		    	var like0 = Number($("#counter0").html())
		    	like0++;
		    	
		    	$("#counter0").html(like0)

		    	if(like0 < 1)
		    	{
		    		$("#counter0").removeClass("bg-success").addClass("bg-danger")
		    	}else
		    	{
		    		$("#counter0").removeClass("bg-danger").addClass("bg-success")
		    	}

    		break;

    		case "likebtn1":
    			console.log("likebtn1")

		    	var like1 = Number($("#counter1").html())
		    	like1++;
		    	
		    	$("#counter1").html(like1)

		    	if(like1 < 1)
		    	{
		    		$("#counter1").removeClass("bg-success").addClass("bg-danger")
		    	}else
		    	{
		    		$("#counter1").removeClass("bg-danger").addClass("bg-success")
		    	}

    		break;

    		case "likebtn2":
    			console.log("likebtn2")

		    	var like2 = Number($("#counter2").html())
		    	like2++;
		    	
		    	$("#counter2").html(like2)

		    	if(like2 < 1)
		    	{
		    		$("#counter2").removeClass("bg-success").addClass("bg-danger")
		    	}else
		    	{
		    		$("#counter2").removeClass("bg-danger").addClass("bg-success")
		    	}

    		break;

    		case "likebtn3":
    			console.log("likebtn3")

		    	var like3 = Number($("#counter3").html())
		    	like3++;
		    	
		    	$("#counter3").html(like3)

		    	if(like3 < 1)
		    	{
		    		$("#counter3").removeClass("bg-success").addClass("bg-danger")
		    	}else
		    	{
		    		$("#counter3").removeClass("bg-danger").addClass("bg-success")
		    	}

    		break;

    		case "likebtn4":
    			console.log("likebtn4")

		    	var like4 = Number($("#counter4").html())
		    	like4++;
		    	
		    	$("#counter4").html(like4)

		    	if(like4 < 1)
		    	{
		    		$("#counter4").removeClass("bg-success").addClass("bg-danger")
		    	}else
		    	{
		    		$("#counter4").removeClass("bg-danger").addClass("bg-success")
		    	}

    		break;

    		case "likebtn5":
    			console.log("likebtn5")

		    	var like5 = Number($("#counter5").html())
		    	like5++;
		    	
		    	$("#counter5").html(like5)

		    	if(like5 < 1)
		    	{
		    		$("#counter5").removeClass("bg-success").addClass("bg-danger")
		    	}else
		    	{
		    		$("#counter5").removeClass("bg-danger").addClass("bg-success")
		    	}

    		break;

    		case "likebtn6":
    			console.log("likebtn6")

		    	var like6 = Number($("#counter6").html())
		    	like6++;
		    	
		    	$("#counter6").html(like6)

		    	if(like6 < 1)
		    	{
		    		$("#counter6").removeClass("bg-success").addClass("bg-danger")
		    	}else
		    	{
		    		$("#counter6").removeClass("bg-danger").addClass("bg-success")
		    	}

    		break;
    	}



		})


});