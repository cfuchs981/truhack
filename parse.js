var arr = [];
var arr_index = 0;

window.onload = function () {
  cardswap();
}

function cardswap() {

  input = document.getElementById("sauce").innerHTML;
  arr = input.split("!");

  document.getElementById("class_number").innerHTML = arr[arr_index++] + ": CS " + arr[arr_index++];
  document.getElementById("capteach").innerHTML = "Dr. " + arr[arr_index++] + " · " + arr[arr_index++] + " Seats";
  document.getElementById("descrip").innerHTML = arr[arr_index++];
  document.getElementById("type").innerHTML = "TYPE (" + arr[arr_index++] + ") · " + arr[arr_index++] + " Credit(s)"

}
