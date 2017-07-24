$(document).ready(function() {

  var paper2 = Raphael("container2");

    var ball = paper2.circle(300, 100, 75);

    // ball.drag();

    ball.dblclick(function() {
      this.animate({
        cy: 550

      }, 3000, "ease-in-out");
    })


});