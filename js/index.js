var ans = "0";
var hist = "";
var arr = [];

$(document).ready(function() {
  
  update();
  
  
});

//RESET BUTTONS
$('#ac').click(function() {
  ans = "0";
  hist = "";
  update();
});

$('#ce').click(function() {
  ans = "0";
  update();
});

//NUMBER BUTTONS
$('#zero').click(function() {
  if(checkLength()) {
    if(!(ans == 0 && ans.length == 1)) {
      ans += '0';
      update();
    }
  }
});
$('#one').click(function() {
  if(checkLength()) {
    if(ans == 0 && ans.length == 1) {
      ans = '1';
    } else {
      ans += '1';
    }
    update();
  }
});
$('#two').click(function() {
  if(checkLength()) {
    if(ans == 0 && ans.length == 1) {
      ans = '2';
    } else {
      ans += '2';
    }
    update();
  }
});
$('#three').click(function() {
  if(checkLength()) {
    if(ans == 0 && ans.length == 1) {
      ans = '3';
    } else {
      ans += '3';
    }
    update();
  }
});
$('#four').click(function() {
  if(checkLength()) {
    if(ans == 0 && ans.length == 1) {
      ans = '4';
    } else {
      ans += '4';
    }
    update();
  }
});
$('#five').click(function() {
  if(checkLength()) {
    if(ans == 0 && ans.length == 1) {
      ans = '5';
    } else {
      ans += '5';
    }
    update();
  }
});
$('#six').click(function() {
  if(checkLength()) {
    if(ans == 0 && ans.length == 1) {
      ans = '6';
    } else {
      ans += '6';
    }
    update();
  }
});
$('#seven').click(function() {
  if(checkLength()) {
    if(ans == 0 && ans.length == 1) {
      ans = '7';
    } else {
      ans += '7';
    }
    update();
  }
});
$('#eight').click(function() {
  if(checkLength()) {
    if(ans == 0 && ans.length == 1) {
      ans = '8';
    } else {
      ans += '8';
    }
    update();
  }
});
$('#nine').click(function() {
  if(checkLength()) {
    if(ans == 0 && ans.length == 1) {
      ans = '9';
    } else {
      ans += '9';
    }
    update();
  }
});
$('#dot').click(function() {
  if(ans.indexOf('.') == -1) {
    ans += '.';
  }
  update();
});

//OPERATION BUTTONS
$('#plus').click(function() {
  if(checkLengthHist()) {
    hist += ans + '+';
    ans = "0";
  }
  update();
});
$('#minus').click(function() {
  if(checkLengthHist()) {
    hist += ans + '-';
    ans = "0";
  }
  update();
});
$('#mult').click(function() {
  if(checkLengthHist()) {
    hist += ans + '*';
    ans = "0";
  }
  update();
});
$('#divis').click(function() {
  if(checkLengthHist()) {
    hist += ans + '/';
    ans = "0";
  }
  update();
});

//EQUALS BUTTON
$('#equals').click(function() {
  if(hist != '') {
    hist += ans;
    ans = eval(hist);
    if(!Number.isInteger(ans)) {
      ans = ans.toFixed(2);
    }
    hist = "";
  }
  
  update();
});



function update() {
  $('#answer').text(ans);
  $('#history').text(hist);
}

function checkLength() {
  return ans.length < 9;
}

function checkLengthHist() {
  return hist.length < 22;
}