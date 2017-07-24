$(document).ready(function() {

  var paper = Raphael("container");


  //   var sky = paper.rect(1, 1, 600, 600).attr({
  //     stroke: "none",
  //     fill: "90-#bfe1ec-#93A7F9"
  //     });

  //   var grass = paper.rect(0, 550, 600, 50).attr({
  //     stroke: "none",
  //     fill: "green"
  //   });

  //   var barn = paper.rect(350, 450, 200, 150).attr({
  //     fill: "#cb2424",
  //     stroke: " #b62020"
  //   });

  //   var moo;
  //   barn.click(function(){
  //     moo = paper.text(270, 500, '"Moo!"').attr({
  //       "font-family": "Georgia",
  //       "font-size": 20
  //     })
  //   })

  //   var barnBoardsAttrs = {
  //     "stroke-width": "5px",
  //     stroke: "white"
  //   }
  //   var barnBoards = (
  //     paper.rect(380, 500, 140, 100).attr(barnBoardsAttrs),
  //     paper.path("M 380 500 L 520 600").attr(barnBoardsAttrs),
  //     paper.path("M 380 600 L 520 500").attr(barnBoardsAttrs));

  //   var barnRoof =
  //     paper.path("M 340 450 L 400 400 500 400 560 450z").attr({
  //       stroke: "none",
  //       fill: "#701900"
  //     });

  //   var sun = paper.circle(100, 100, 50).attr({
  //     stroke: "none",
  //     fill: "#FFFFBF"
  //   });

  //   var rays;
  //   sun.click(function(){
  //     rays = sun.glow({
  //       width: 30,
  //       color: "white"
  //     });
  //   });



  // var dayScene = paper.set(sun, rays, sky, grass, barn, barnBoards, barnRoof, moo);
  //     dayScene.attr({
  //       cursor: "pointer"
  //     });

  //   var moon = paper.circle(100, 700, 50).attr({
  //     stroke: "none",
  //     fill: "45-#CACACC-#FDFCFF"
  //   })
    

  //   var nightSky = paper.rect(1, 601, 600, 600).attr({
  //     stroke: "none",
  //     fill: "90-#2A1B70-#0B071F"
  //     });


  // dayScene.dblclick(function () {
  //   sun.animate({
  //     cy: 700
  //   }, 2000, "ease-in");
  //   rays.hide(2000);
  //   moo.hide();

  //   moon.animate({
  //     cy: 100
  //   }, 2000, "ease-out");

  //   sky.animate({
  //     fill: "90-#2A1B70-#0B071F"
  //   }, 1000);

    
  // });

// ************************************************************

    var field = paper.rect(1, 1, 600, 600).attr({
      stroke: "none",
      fill: "white"
    });


    var ball = paper.circle(300, 100, 50).attr({
      stroke: "black",
      fill: "green"
    });

    var ball2 = paper.circle(150, 100, 35).attr({
      stroke: "black",
      fill: "red"
    })

    ball.click(function() {
      ball.animate({
        cy: 550
      }, 2500, "bounce");
      ball2.animate({
        cx: 36
      }, 2000, "bounce");
    })

    ball2.click(function() {
      ball.animate({
        cx: 700
      }, 2000, "backIn");
      ball2.animate({
        cy: 700
      }, 2000, "backIn");
    })



    field.dblclick(function() {
      ball.animate({
        cx: 300
      }, 1500, "elastic");
      ball2.animate({
        cy: 300
      }, 1500, "elastic");
    })

});
