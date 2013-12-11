$(document).ready(function () {
				if ($(window).width() < 850) {
					if ($(window).width() < 560) {
						$(".logo-img").css("display","none");
					} else {
						$(".logo-img").css("display","block");
					}
					 $(".oe_wrapper").css("display","none");
					 $(".oe_wrapper_mobile").css("display","block");
				}
				else {
					$(".logo-img").css("display","block");
					$(".oe_wrapper").css("display","block");
					$(".oe_wrapper_mobile").css("display","none");
				}
   });



window.onresize = function(event) {
		if ($(window).width() < 850) {
			if ($(window).width() < 560) {
				$(".logo-img").css("display","none");
			} else {
				$(".logo-img").css("display","block");
			}
			
			 $(".oe_wrapper").css("display","none");
			 $(".oe_wrapper_mobile").css("display","block");
		}
		else {
			$(".logo-img").css("display","block");
			$(".oe_wrapper").css("display","block");
			$(".oe_wrapper_mobile").css("display","none");
		}
	}

