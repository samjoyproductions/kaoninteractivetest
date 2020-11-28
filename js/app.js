$(document).ready(function(){
	
	// handles transitions between screens
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
	});
	
	// handles open and close of menu on gov screen
	$("[data-js-govmenu]").on("touchend", function(event){
		var goal_action = $(this).data("js-govmenu");
		
		if (event.target.classList.contains("u_exploreMenu--preventClose")){
			return;
		} 
		if (goal_action === "toggleon"){
			$(".c_govControls").addClass('c_govControls--menuActive');
		}
		if (goal_action === "toggleoff"){
			$(".c_govControls").attr('class', 'c_govControls');
		}
	});

});
