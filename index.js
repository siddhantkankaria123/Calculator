var result = document.getElementById("result");
var final = document.getElementById("resulttwo");
var last_no = 0;
var operator = 0;
var dotoperator = 0;
var list_show = document.getElementById("list-id");
var history = document.getElementById("history");
var ul_list = document.getElementById("myList");
var his = 0;
var temp = new Array();

function display(number) {
  result.value += number;
  operator = 0;
  if (last_no == 0) {
    final.value = eval(result.value);
  }
}
function operatordisplay(opr) {
  if (operator == 0) {
    result.value += opr;
    operator = 1;
    dotoperator = 0;
  }
}

function dotdisplay(d_opr) {
  if (dotoperator == 0) {
    result.value += d_opr;
    dotoperator = 1;
  }
}

function calculate() {
  if (temp.length >= 5) {
    for (var j = 0; j < temp.length; j++) {
      temp[j] = temp[j + 1];
    }
    var final_number = result.value;
    var final_result = eval(final_number);
    final.value = final_result;
    temp[4] = result.value;
  } else {
    var final_number = result.value;
    var final_result = eval(final_number);
    final.value = final_result;
    temp.push(result.value);
  }

  //   result.value = final_result;
}

function clr() {
  result.value = "";
  final.value = "";
  dotoperator = 0;
}

function dlt() {
  result.value = result.value.slice(0, -1);
  final.value = result.value;
  dotoperator = 0;
}
function historyy() {
  var lengtth = temp.length;
  console.log(lengtth);

  while (ul_list.firstChild) {
    ul_list.firstChild.remove();
  }

  if (his == 0) {
    result.value = temp[lengtth - 1];
    final.value = eval(result.value);
    list_show.style.display = "block";
    his = 1;

    for (var i = 0; i < lengtth; i++) {
      var listItem = document.createElement("li");
      listItem.textContent = temp[i];
      ul_list.appendChild(listItem);
    }
  } else {
    list_show.style.display = "none";
    his = 0;
  }
}
