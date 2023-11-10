window.onload = function(){
    //get and store canvas & context
      var canvas = document.getElementById("sky");
      var ctx    = canvas.getContext("2d");
      var h     = window.innerHeight;
      var w     = window.innerWidth;
    //set dims to window
      canvas.height = h;
      canvas.width  = w;
    // Generate snowflakes 
      var mf = 100; // max flakes
      var flakes = [];
     // loop through the empty flakes 
      for(var i = 0; i < mf; i++){
        
        flakes.push({
          x: Math.random()*w,
          y: Math.random()*h,
          r: Math.random()*1+2, //min of 2px and max 7px
          d: Math.random() + 2  // density of flakes
          })
      }
      //draw flakes 
      function drawFlakes(){
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = "white";
        ctx.beginPath();
        for(var i = 0; i < mf; i++){
           var f = flakes[i];
          ctx.moveTo(f.x, f.y);
          ctx.arc(f.x, f.y, f.r, 0, Math.PI*2, true);
        }
        ctx.fill();
        moveFlakes();
      }
     //animate the flakes
      var angle = 0;
      function moveFlakes(){
        angle += 0.01;
        for(var i = 0; i < mf; i++){
          //store the current flake
          var f = flakes[i];
          //Upadte Y and X coordinate of each snow
          f.y += Math.pow(f.d, 2) + 1;
          f.x += Math.sin(angle) * 2;
          //if the snow reach to the bottom send it to the top again
          if(f.y > h){
            flakes[i] = {x: Math.random()*w, y: 0, r: f.r, d: f.d};
            }
          }
        }
      setInterval(drawFlakes, 25);
      }