var largeur=document.getElementById("path").offsetWidth;
var hauteur=document.getElementById("path").offsetHeight;

var coeff=629-hauteur

const flightPath = {
	curviness: 0.1,
	autoRotate: false,
	values: [
	{x: 0, y:hauteur/5.5}, 
	{x:-largeur/2, y:hauteur/5.5},
	{x:-largeur/2, y:hauteur+60},
	{x:-largeur, y:hauteur+60},
	{x:-largeur, y:hauteur+170}
	]
}

const tween = new TimelineLite();

tween.add(
	TweenLite.to('.curseur', 2, {
		bezier: flightPath,
		ease: Power1.easeInOut
	})
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
	triggerElement: '.chemin',
	duration: 900,


})
.setTween(tween)
.addTo(controller);
