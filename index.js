function task1() {
  var out = "";
  for (var i = 1; i <= 7; i++) {
    for (var k = 1; k <= 7; k++) {
      out += "* ";
    }
    out += "\n";
  }
  return out;
}

function task2() {
  var out = "";

  for (var i = 1; i <= 7; i++) {
    out += "* ";
    for (var k = 1; k < 7 - 1; k++) {
      if (i < 7 && i != 1) {
        out += "  ";
      } else {
        out += "* ";
      }
    }
    out += "* \n";
  }
  return out;
}

function task3() {
  var out = "";
  for (var i = 0; i < 7; i++) {
    out += "* ";
    for (var k = 6; k >= 1; k--) {
      if (i == 0 || k == i + 1) {
        out += "* ";
      } else {
        out += "  ";
      }
    }
    out += "\n";
  }
  return out;
}

function task4() {
  var out = "";
  for (var i = 0; i < 7; i++) {
    out += "* ";
    for (var k = 0; k <= 5; k++) {
      if (i == 6 || k == i - 1) {
        out += "* ";
      } else {
        out += "  ";
      }
    }
    out += "\n";
  }
  return out;
}

function task5() {
  var out = "";
  for (var i = 0; i < 7; i++) {
    for (var k = 6; k > 0; k--) {
      if (i == 6 || k == i) {
        out += "* ";
      } else {
        out += "  ";
      }
    }
    out += "* ";
    out += "\n";
  }
  return out;
}

function task6() {
  var out = "";
  for (var i = 0; i < 7; i++) {
    for (var k = 0; k < 6; k++) {
      if (k == i || i == 0) {
        out += "* ";
      } else {
        out += "  ";
      }
    }
    out += "* ";
    out += "\n";
  }
  return out;
}

function task7() {
  var out = "";
  for (var i = 0; i < 7; i++) {
    for (var k = 0; k < 7; k++) {
      if (i == k || k == 6 - i) {
        out += "* ";
      } else {
        out += "  ";
      }
    }
    out += "\n";
  }
  return out;
}

function task8() {
  var out = "";
  for (var i = 1; i < 5; i++) {
    for (var k = 0; k < 7; k++) {
      if (i == 1 || i == k + 1 || k == 7 - i) {
        out += "* ";
      } else {
        out += "  ";
      }
    }

    out += "\n";
  }
  return out;
}

function task9() {
  var out = "";
  for (var i = 1; i < 5; i++) {
    for (var k = 0; k < 7; k++) {
      if (i == 4 || k == 4 - i || i == k - 2) {
        out += "* ";
      } else {
        out += "  ";
      }
    }

    out += "\n";
  }
  return out;
}


console.log(task9())