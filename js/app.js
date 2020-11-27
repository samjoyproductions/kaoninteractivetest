$(document).ready(function(){
	
	$("[data-js-page]").on("touchend", function(){

		var goal_page = $(this).data("js-page");
		if (goal_page === "med" || goal_page === "gov") {
			$(".o_backgroundImages").addClass(`o_backgroundImages--${goal_page}Active`);
			$(".o_controls").addClass(`o_controls--${goal_page}Active`);
		}
		if (goal_page === "entry") {
			$(".o_backgroundImages").attr('class', 'o_backgroundImages');
			$(".o_controls").attr('class', 'o_controls');
		}
	})

});
