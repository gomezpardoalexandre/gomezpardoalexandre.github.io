        var fenetre = {};

		var index = 0;
		var drapeau = true;
		fenetre = window;
		if (fenetre.addEventListener) {
			// IE9, Chrome, Safari, Opera
			fenetre.addEventListener("mousewheel", MouseWheelHandler, false);
			// Firefox
			fenetre.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
		} else {
			// IE 6/7/8
			fenetre.attachEvent("onmousewheel", MouseWheelHandler);
		}
		var dureeAnim = 100;
		var deltaRalentissement = 1000;
		function jeSuisPret(event) {
			setTimeout(function() {
				drapeau = true;
			}, dureeAnim);
		}
		function MouseWheelHandler(e) {
			// cross-browser wheel delta
			var e = window.event || e;
			var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
			if (delta > 0 && drapeau) {
				// scroll up code
				if (index > 0) {
					drapeau = false;
					$("html, body").animate(
						{
							scrollTop: $("#" + sections[--index]).offset().top
						},
						{
							duration:
								index === 0
									? dureeAnim + deltaRalentissement
									: dureeAnim,
							done: jeSuisPret(e),
							queue: false
						}
					);
				}
			} else if (drapeau) {
				// scroll down code
				if (index < sections.length - 1) {
					drapeau = false;
					$("html, body").animate(
						{
							scrollTop: $("#" + sections[++index]).offset().top
						},
						{
							duration:
								index === sections.length - 1
									? dureeAnim + deltaRalentissement
									: dureeAnim,
							done: jeSuisPret(e),
							queue: false
						}
					);
				}
			}
			return false;
		}