
	$(".glyphicon-home").hover(function(){
		$(".glyphicon-home").text(" Home");
		
	})


	$(".solardesc").hide();
	$(".forexdesc").hide();
	$(".caesardesc").hide();
	$(".spotdesc").hide();
	$(".guestdesc").hide();


	$(".solarProjectLink").hover(function(){
		$(".solardesc").show("fast");
		$(".forexdesc").hide();
		$(".caesardesc").hide();
		$(".spotdesc").hide();
		$(".guestdesc").hide();
		
		});

	$(".forexProjectLink").hover(function(){
		$(".solardesc").hide("slow");
		$(".forexdesc").show("fast");
		$(".caesardesc").hide();
		$(".spotdesc").hide();
		$(".guestdesc").hide();
		
		});

	$(".caesarProjectLink").hover(function(){
		$(".solardesc").hide();
		$(".forexdesc").hide("slow");
		$(".caesardesc").show("fast");
		$(".spotdesc").hide();
		$(".guestdesc").hide();
		
		});

	$(".spotProjectLink").hover(function(){
		$(".solardesc").hide();
		$(".forexdesc").hide();
		$(".caesardesc").hide("slow");
		$(".spotdesc").show("fast");
		$(".guestdesc").hide();
		
		});

	$(".guestProjectLink").hover(function(){
		$(".solardesc").hide();
		$(".forexdesc").hide();
		$(".caesardesc").hide();
		$(".spotdesc").hide("slow");
		$(".guestdesc").show("fast");
		
		});



