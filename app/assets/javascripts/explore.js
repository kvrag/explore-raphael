$(document).ready(function() {

  var paper = Raphael("container");


    var sky = paper.rect(1, 1, 600, 600).attr({
      stroke: "none",
      fill: "90-#bfe1ec-#93A7F9"
      });

    var grass = paper.rect(0, 550, 600, 50).attr({
      stroke: "none",
      fill: "green"
    });

    var barn = paper.rect(350, 450, 200, 150).attr({
      fill: "#cb2424",
      stroke: " #b62020"
    });

    var barnBoardsAttrs = {
      "stroke-width": "5px",
      stroke: "white"
    }
    var barnBoards = (
      paper.rect(380, 500, 140, 100).attr(barnBoardsAttrs),
      paper.path("M 380 500 L 520 600").attr(barnBoardsAttrs),
      paper.path("M 380 600 L 520 500").attr(barnBoardsAttrs));

    var barnRoof =
      paper.path("M 340 450 L 400 400 500 400 560 450z").attr({
        stroke: "none",
        fill: "#701900"
      });

    var sun = paper.circle(100, 100, 50).attr({
      stroke: "none",
      fill: "#FFFFBF"
    })

    var rays = sun.glow({
          width: 30,
          color: "white"
        });


  var dayScene = paper.set(sun, rays, sky, grass, barn, barnBoards, barnRoof);
      dayScene.attr({
        cursor: "pointer"
      });

    var moon = paper.circle(100, 700, 50).attr({
      stroke: "none",
      fill: "45-#CACACC-#FDFCFF"
    })
    

    var nightSky = paper.rect(1, 601, 600, 600).attr({
      stroke: "none",
      fill: "90-#2A1B70-#0B071F"
      });


  dayScene.click(function () {
    sun.animate({
      cy: 700
    }, 2000, "ease-in");
    rays.hide(2000);

    moon.animate({
      cy: 100
    }, 2000, "ease-out");

    sky.animate({
      fill: "90-#2A1B70-#0B071F"
    }, 1000);

    
  });


});
