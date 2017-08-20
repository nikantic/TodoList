// Check off specific To Dos by clicking
$("ul").on("click", ".checkButton", function() {
	if ($(this).parent().hasClass("completed")) {
		$(this).find(".checkIcon").removeClass("fa-check-square").addClass("fa-square-o");
		setTimeout(function(){
			$(this).parent().removeClass("completed");
			$(this).parent().insertBefore($('.completed:first'))
		}.bind(this), 200);
	} else if ($("li").hasClass("completed")) {
		//checking if any li has class .completed
		$(this).find(".checkIcon").removeClass("fa-square-o").addClass("fa-check-square");
		setTimeout(function(){
			$(this).parent().insertBefore($('.completed:first'));
			$(this).parent().addClass("completed");
		}.bind(this), 200);
	} else {
		$(this).find(".checkIcon").removeClass("fa-square-o").addClass("fa-check-square");
		setTimeout(function(){
			$(this).parent().addClass("completed");
			$(this).parent().appendTo($("ul"));
		}.bind(this), 200);
	}
});

// Click on X to delete To Dos
$("ul").on("click", ".removeButton", function(event) {
	$(this).parent().fadeOut(500, function() { 
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keyup(function() {
	if($(this).val() < 1) {
		$(".addButton").css({"opacity": 0, "pointer-events": "none"});
	} else {
		$(".addButton").css({"opacity": 1, "pointer-events": "all"});
	}
});

$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		// grab new todo text from input
		var todoText = $(this).val();
		if (todoText.length > 0) {
			$(this).val("");
			// create a new li and add to ul
			$("ul").prepend("<li><span class='checkButton'><i class='fa fa-square-o checkIcon' aria-hidden='true'></i></span><span class='removeButton'><i class='fa fa-remove' aria-hidden='true'></i></span> " + todoText + "</li>");
			$("li:first").addClass("blinkAnim");
		}		
	}
});

$(".addButton").click(function() {
	var todoText = $("input[type='text']").val();
	$("input[type='text']").val("");
	$("ul").prepend("<li><span class='checkButton'><i class='fa fa-square-o checkIcon' aria-hidden='true'></i></span><span class='removeButton'><i class='fa fa-remove' aria-hidden='true'></i></span> " + todoText + "</li>");
	$("li:first").addClass("blinkAnim");
	$(this).css({"opacity": 0, "pointer-events": "none"});
});
