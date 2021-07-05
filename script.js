(() => {
    let $ = c.getContext("2d"),
        w = (c.width = window.innerWidth),
        h = (c.height = window.innerHeight),
        pi2 = Math.PI * 2,
        random = t => Math.random() * t,
        binRandom = t => Math.random() < t;
    
    let arr = new Array(200 /* amount */).fill().map(p=>{
        return {
            p: {x: random(w), y: random(h) }, //position
            v: { //velocity
                x: binRandom(0.1)? random(1) : random(-1),
                y: binRandom(0.1)? random(1) : random(-1)
            },
            s: random(1)+0.2, //size
            o: random(0.5)+.3 //opacity
        }
    })
    
    function draw(){
      $.fillStyle="#fff";
      $.fillRect(0,0,w,h);
      
      arr.forEach(p=>{
        p.p.x+=p.v.x;
        p.p.y+=p.v.y;
        if(p.p.x > w || p.p.x < 0) p.v.x *=-1;
        if(p.p.y > h || p.p.y < 0) p.v.y *=-1;
        $.beginPath();
        $.arc(p.p.x,p.p.y,p.s,0,pi2);
        $.closePath();
        $.fillStyle = "rgba(0, 0, 0,"+p.o+")";
        $.fill();
      })
      
      requestAnimationFrame(draw);
    }
    draw(); 
  
  })();