$(function() {

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

    var dayText = paper.text(200, 350, "It is day.").attr({
      "font-family": "Georgia",
      "font-size": 20
    });

  var sunShine = paper.set(sun, rays);

  var dayScene = paper.set(sunShine, sky, grass, barn, barnBoards, barnRoof, dayText);
      dayScene.attr({
        cursor: "pointer"
      });



  dayScene.click(function() {
    sunShine.animate({
      cy: 700
    }, 2000)
  });
});
