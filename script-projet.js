var after = document.getElementById('detectA');
var before = document.getElementById('detectB');
var Abefore = document.getElementById('arrowbefore');
var Aafter = document.getElementById('arrowafter');
var NomAfter =  document.getElementById('projetnavafter');
var NomBefore =  document.getElementById('projetnavbefore');

after.addEventListener("mouseover", function() {
    Aafter.style.opacity = '1';
    Aafter.style.fill = 'var(--accent)';
    NomAfter.style.display ='block';
    })
after.addEventListener("mouseleave", function() {
    Aafter.style.opacity = '0.2';
    NomAfter.style.display ='none';
    })    

before.addEventListener("mouseover", function() {
    Abefore.style.opacity = '1';
    Abefore.style.fill = 'var(--accent)';
    NomBefore.style.display ='block';
    })
before.addEventListener("mouseleave", function() {
    Abefore.style.opacity = '0.2';
    NomBefore.style.display ='none';
    })       

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
    }    