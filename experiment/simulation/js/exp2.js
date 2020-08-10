var flow = 500;
var dir = 0;
var rot = 0;
var init = -1;

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
  init = 0;
}

function calDye() {
  if (init == 0) {
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
}

function clickedValve() {
  if (init == 0) {
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
    document.getElementById("outlet").style.transform =
      "rotate(" + rot + "deg)";
  }
}

var gate = 1;
var inter;
var timeo;
function clickedgate() {
  if (init === 0) {
    clearTimeout(timeo);
    var h = document.getElementById("fillfinal");
    document.getElementById("gatelab").style.opacity = 0;
    if (gate == 1) {
      document.getElementById("gatebut").style.transform =
        "rotate(" + 270 + "deg)";
      gate = 0;

      document.getElementById("mot15").style.opacity = 0;
      document.getElementById("mot14").style.opacity = 0;

      document.getElementById("labFlow").innerText = "";

      timeo = setTimeout(function () {
        document.getElementById("labFlow").innerText =
          "h2-h1" + (5 * 7.8971 * flow) / 10000;
      }, 50000);

      i = 50;
      inter = setInterval(function () {
        document.getElementById("timer").innerText = "" + i;
        i--;
        {
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
      document.getElementById("gatebut").style.transform =
        "rotate(" + 0 + "deg)";
      document.getElementById("mot14").style.opacity = 1;
      document.getElementById("mot15").style.opacity = 1;
      h.style.top = 435;
      h.style.height = 5;
      gate = 1;
      clearInterval(inter);
    }
  }
}

function check1() {
  var el = document.getElementById("in1");
  if (flow == el.value) {
    document.getElementById("r2").style.visibility = "visible";
    
    el.style.background = "white";
  } else {el.style.background = "red";
         document.getElementById("r2").style.value = "wrong answer";}
}
function check2() {
  var el = document.getElementById("in2");
  if (flow == el.value) {
    document.getElementById("r3").style.visibility = "visible";
    
    el.style.background = "white";
  } else {el.style.background = "red";
         document.getElementById("r2").style.value = "wrong answer";}
}
function check3() {
  var el = document.getElementById("in3");
  if (flow == el.value) {
    // document.getElementById("r2").style.visibility = "visible";
    document.getElementById("verify").innerText =
      "Experiment Completed Successfully";
    el.style.background = "white";
  } else {el.style.background = "red";
         document.getElementById("r2").style.value = "wrong answer";}
}
