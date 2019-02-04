
$(".videoWrapper").hide();
$(".delete").hide();


$(function(){

	$(".navbar-burger").click(function() {
			$(".navbar-burger").toggleClass("is-active");
			$(".navbar-menu").toggleClass("is-active");
	});
	
	$("#city").mouseover(function(){
		$("#city").toggleClass("is-inverted has-text-warning");
		$("#city").text("Bronx");	
	});

	$("#city").mouseout(function(){
		$("#city").toggleClass("is-inverted has-text-warning");
		$("#city").text("New York");
	});

	$("#city").click(function(){
		$(".delete").delay(1200).fadeIn(1000);
		$(".videoWrapper").show("fast");

		$('iframe').attr("src", "https://www.youtube.com/embed/B6aeZuUF6Us?autoplay=1");
		$(".videoWrapper,iframe").animate({
			position: "fixed",
			bottom: "10px",
			right: "10px",
			width: "420px",
			height: "250px"

		},"fast");
		$("html,body").animate({
			height: "80%",

		});


		
	});

	$(".delete").click(function(){
		$('iframe').delay(1000).attr("src", "https://www.youtube.com/embed/B6aeZuUF6Us")
		$(".videoWrapper").fadeOut(1000);
		$(".videoWrapper,iframe").animate({
			bottom: "0%",
			right: "0%",
			width: "0",
			height: "0"

		},"slow");
		
		$("html,body").animate({
			maxHeight: "100%;"

		});
	});

	$("#devPower").mouseover(function(){
		$("#py").animate({ value: 75 }, 1000);
		$("#html").animate({ value: 54 }, 1000);	
		$("#css").animate({ value: 50 }, 1000);	
		$("#js").animate({ value: 59 }, 1000);	
		$("#sql").animate({ value: 59 }, 1000);	
		$("#php").animate({ value: 43 }, 1000);	
		$("#jq").animate({ value: 44 }, 1000);	
		$("#react").animate({ value: 23 }, 1000);	
		$("#angular").animate({ value: 57 }, 1000);	
		$("#bulma").animate({ value: 77 }, 1000);	

	});

	$("#devSpecial").mouseover(function(){
		$("#uxui").animate({ value: 55 }, 1000);
		$("#fe").animate({ value: 62 }, 1000);	
		$("#be").animate({ value: 57 }, 1000);	
		$("#pm").animate({ value: 37 }, 1000);	
		$("#dom").animate({ value: 45 }, 1000);	
		$("#st").animate({ value: 55 }, 1000);
		$("#ts").animate({ value: 87 }, 1000);	
		$("#graf").animate({ value: 37 }, 1000);	
		$("#ld").animate({ value: 44 }, 1000);	
		$("#rs").animate({ value: 100 }, 1000);	
		

	});

	$("#proj1").mouseover(function(){
		$("#proj1").attr('src', 'assets/proj1.gif');
	});

	$("#proj1").mouseout(function(){
		$("#proj1").attr('src', 'assets/projimg.png');
	});

	$("#proj2").mouseover(function(){
		$("#proj2").attr('src', 'assets/proj2.gif');
	});

	$("#proj2").mouseout(function(){
		$("#proj2").attr('src', 'assets/proj2img.png');
	});

	$("#proj3").mouseover(function(){
		$("#proj3").attr('src', 'assets/proj3.gif');
	});

	$("#proj3").mouseout(function(){
		$("#proj3").attr('src', 'assets/proj3img.png');
	});

	$("#proj4").mouseover(function(){
		$("#proj4").attr('src', 'assets/proj4.gif');
	});

	$("#proj4").mouseout(function(){
		$("#proj4").attr('src', 'assets/proj4img.png');
	});

	$("#contactSubmit").click(function(){
		var name = document.getElementById("fieldName").value;
		var subject = document.getElementById("fieldSubject").value;
		var body = document.getElementById("fieldBody").value;

		console.log(body);
		$("#contactSubmit").attr('href', `mailto:corey.cushnie@gmail.com?subject=${name}:%20${subject}&body=${body}`);
	});

	$("#contactReset").click(function(){
		
		document.getElementById("fieldSubject").value = "";
		document.getElementById("fieldBody").value = "";

	
	});

});