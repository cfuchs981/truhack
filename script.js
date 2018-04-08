
     var arr = [];
var arr_index = 0;
var letter = "";
var credits = 0;

jQuery(document).ready(function(){
  cardswap();
  jQuery(".no").click(function(){
    duplicate();
    swipeDown();
  });
  jQuery(".yes").click(function(){
    append_subtract();
    duplicate();
    swipeRight();
  });
})

//TODO use the credit fields to get lower and upper credit bounds
/*function sortByCredits(){
  //TODO figure out a better way for long term sorting...different types of sorting per person
  arr_index++;
  if (arr[arr_index].getCredits() === amount) //courseList[arr_index])
  {
    //display the card
  }
  else{ // dont display it}
}*/

function cardswap() {

  input = document.getElementById("sauce").innerHTML;
  arr = input.split("!");
  document.getElementById("class_number").innerHTML = arr[arr_index++] + ": CS " + arr[arr_index++];
  document.getElementById("capteach").innerHTML = "Dr. " + arr[arr_index++] + " · " + arr[arr_index++] + " Seats";
  document.getElementById("descrip").innerHTML = arr[arr_index++];
  letter = arr[arr_index++];
  credits = arr[arr_index++];
  document.getElementById("type").innerHTML = "TYPE (" + letter + ") · " + credits + " Credit(s)"
  if(arr_index == arr.length -1){
    arr_index = 0;
  }

}

function append_subtract() {
  var num = document.getElementById(letter.toString()).innerHTML;
  num -= credits;
  if(num < 0) num = 0
  else{
    document.getElementById(letter.toString()).innerHTML = num;
    document.getElementById("wew").innerHTML += document.getElementById("class_number").innerHTML + " " + document.getElementById("capteach").innerHTML + "\n";
  };

}

function swipeDown(){
  jQuery("#clone").hide("slide", {direction: "down"}, 300, function() {
    jQuery("#clone").remove();
  });
  jQuery(".tablehold")[0].style.visibility = 'visible';
}

function swipeRight(){
  //TODO make this go right AND scale down to slurp into the schedule table
  //jQuery("#clone").style.transform = "scale(20deg)";
  jQuery("#clone").hide("slide", {direction: "right"}, 300, function() {
    jQuery("#clone").remove();
  });
  jQuery(".tablehold")[0].style.visibility = 'visible';
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
  cardswap();
  clone.prependTo(original);
}