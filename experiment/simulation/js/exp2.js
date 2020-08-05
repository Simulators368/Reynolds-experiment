var flow = 500;
var dir = 0;
var rot = 0;

function clickedMot() {
  document.getElementById("motlab").style.opacity = 0;
  document.getElementById("motbut").style.transform = "rotate(" + 270 + "deg)";
  document.getElementById("mot1").style.opacity = 1;
  j = 1;
  var startint = setInterval(function () {
    if (j < 16) {
      document.getElementById("mot" + j).style.opacity = 1;
      j++;
    } else {
      document.getElementById("inlab").style.opacity = 1;
      clearInterval(startint);
    }
  }, 100);
}

function calDye() {
  document.getElementById("lin").style.opacity = 1;
  document.getElementById("inlab").style.opacity = 0;
  document.getElementById("inlet").style.transform = "rotate(" + 270 + "deg)";
  document.getElementById("outlab").style.opacity = 1;

  setInterval(function () {
    if (flow < 2000)
      document.getElementById("lin").style.backgroundImage =
        "url('images/laminar.svg')";
    else if (flow < 4000)
      document.getElementById("lin").style.backgroundImage =
        "url('images/wave.gif')";
    else
      document.getElementById("lin").style.backgroundImage =
        "url('images/turb.svg')";
  }, 1000);
}

function clickedValve() {
  document.getElementById("outlab").style.opacity = 0;
  if (flow < 5500 && dir == 0) {
    flow = flow + 1000;
    rot = rot + 90;
  } else if (flow > 500 && dir == 1) {
    flow = flow - 1000;
    rot = rot - 90;
  } else if (dir == 1) {
    dir = 0;
    flow = flow + 1000;
    rot = rot + 90;
  } else if (dir == 0) {
    dir = 1;
    flow = flow - 1000;
    rot = rot - 90;
  }
  console.log(flow);
  document.getElementById("gatelab").style.opacity = 1;
  document.getElementById("outlet").style.transform = "rotate(" + rot + "deg)";
}

var gate = 1;
function clickedgate() {
  document.getElementById("gatelab").style.opacity = 0;
  if (gate == 1) {
    document.getElementById("gatebut").style.transform =
      "rotate(" + 270 + "deg)";
    gate = 0;

    document.getElementById("mot15").style.opacity = 0;
    document.getElementById("mot14").style.opacity = 0;

    document.getElementById("labFlow").innerText = "";

    setTimeout(function () {
      document.getElementById("labFlow").innerText =
        "final height: " + (5 * 7.8971 * flow) / 10000;
    }, 50000);

    i = 50;
    var inter = setInterval(function () {
      document.getElementById("timer").innerText = "" + i;
      i--;
      {
        var h = document.getElementById("fillfinal");
        var height = 100 - i * 2;
        h.style.top = 435 - height;
        h.style.height = height;
      }

      if (i == 0) {
        i = 50;
        document.getElementById("timer").innerText = "";
        clearInterval(inter);
      }
    }, 1000);
  } else {
    document.getElementById("gatebut").style.transform = "rotate(" + 0 + "deg)";
    document.getElementById("mot14").style.opacity = 1;
    document.getElementById("mot15").style.opacity = 1;
    gate = 1;
  }
}
