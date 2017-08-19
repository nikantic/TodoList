// Check off specific To Dos by clicking
$("ul").on("click", "li", function() {
	if ($(this).hasClass("completed")) {
		$(this).find(".checkIcon").removeClass("fa-check-square").addClass("fa-square-o");
		setTimeout(function(){
			$(this).removeClass("completed");
			$(this).insertBefore($('.completed:first'))
		}.bind(this), 200);
	} else if ($("li").hasClass("completed")) {
		//checking if any li has class .completed
		$(this).find(".checkIcon").removeClass("fa-square-o").addClass("fa-check-square");
		setTimeout(function(){
			$(this).insertBefore($('.completed:first'));
			$(this).addClass("completed");
		}.bind(this), 200);
	} else {
		$(this).find(".checkIcon").removeClass("fa-square-o").addClass("fa-check-square");
		setTimeout(function(){
			$(this).addClass("completed");
			$(this).appendTo($("ul"));
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

$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		// grab new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		// create a new li and add to ul
		$("ul").prepend("<li><span class='checkButton'><i class='fa fa-square-o checkIcon' aria-hidden='true'></i></span><span class='removeButton'><i class='fa fa-remove' aria-hidden='true'></i></span> " + todoText + "</li>")
	}
});

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle(); 
});
