jQuery(document).ready(function($){
	$('[data-toggle="tooltip"]').tooltip({ 
		trigger: "manual" , 
		html: true,
		placement: 'top'
	}).on("mouseenter", function () {
		var _this = this;
		$(this).tooltip("show");
		$(".tooltip").on("mouseleave", function () {
			$(_this).tooltip('hide');
		});
	}).on("mouseleave", function () {
		var _this = this;
		setTimeout(function () {
				if (!$(".tooltip:hover").length) {
					$(_this).tooltip("hide");
				}
		}, 300);
	});
});