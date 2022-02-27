
        const $bigBall = document.querySelector(".cursor__ball--big");
        const $smallBall = document.querySelector(".cursor__ball--small");
        const $hoverables = document.querySelectorAll(".hoverable");

        // Listeners
        document.body.addEventListener("mousemove", onMouseMove);
        for (let i = 0; i < $hoverables.length; i++) {
        $hoverables[i].addEventListener("mouseenter", onMouseHover);
        $hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
        }

        // Move the cursor
        function onMouseMove(e) {
        TweenMax.to($bigBall, 0.4, {
            x: e.clientX - 15,
            y: e.clientY - 15
        });
        TweenMax.to($smallBall, 0.1, {
            x: e.clientX - 5,
            y: e.clientY - 7
        });
        }

        // Hover an element
        function onMouseHover() {
        TweenMax.to($bigBall, 0.3, {
            scale: 4
        });
        }
        function onMouseHoverOut() {
        TweenMax.to($bigBall, 0.3, {
            scale: 1
        });
        }

     /* const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
        console.log(prefersDarkScheme.matches);
            if (prefersDarkScheme.matches == true) {
              
                document.documentElement.style.cssText = "--base: #2E1E08; --accent: #FFF7EB; --background: #1F1201";
            } else {
                document.documentElement.style.cssText = "--base: #FBDC33";
                document.documentElement.style.cssText = "--accent: #296E5D";
            }
        */
            var trig2 =  document.getElementById('trigger2'); 
            var reveal2 = document.getElementById('reveal2');
    
            trig2.addEventListener('mouseover', function(){
                reveal2.style.display = "flex";
            }, false);
            reveal2.addEventListener('mouseover', function(){
                reveal2.style.display = "flex";
            }, false);
            trig2.addEventListener('mouseleave', function(){
                reveal2.style.display = "none";
            }, false);