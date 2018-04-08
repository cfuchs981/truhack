var arr = [];
var arr_index = 0;

jQuery(document).ready(function(){
  cardswap();
  jQuery(".no").click(function(){
    duplicate();
  });
  jQuery(".yes").click(function(){
    console.log("yes");
  });
})

function cardswap() {

  input = document.getElementById("sauce").innerHTML;
  arr = input.split("!");

  document.getElementById("class_number").innerHTML = arr[arr_index++] + ": CS " + arr[arr_index++];
  document.getElementById("capteach").innerHTML = "Dr. " + arr[arr_index++] + " · " + arr[arr_index++] + " Seats";
  document.getElementById("descrip").innerHTML = arr[arr_index++];
  document.getElementById("type").innerHTML = "TYPE (" + arr[arr_index++] + ") · " + arr[arr_index++] + " Credit(s)"
  if(arr_index === arr.length){
    arr_index = 0;
  }

}

function duplicate(){
  var original = jQuery('.tablehold');
  var clone = original.clone();
  clone[0].setAttribute("id", "clone");
  clone.css({
    "position": "absolute",
    "background-color": "#FDF7EB",
  	"width": "28%",
  	"padding-right": "30px",
  	"margin-right": "30px",
  	"border": "1px solid #CECAC1",
    "box-shadow": "3px 3px 1px #CECAC1",
    "text-align": "center",
    "padding": "20px"
  });
  original[0].style.visibility = 'hidden';
  //TODO change the original card text to next class info
  clone.prependTo(original);
  clone.hide("slide", {direction: "down"}, 300, function() {
    jQuery("#clone").remove();
  });
  cardswap();
  original[0].style.visibility = 'visible';
}
