function draw(){
var num = document.getElementById("number").value;
var output = document.getElementById("show");
var i,j; 

  output.innerHTML = "";
  for( i = 1; i <= num; i++){
    for ( j = 0; j < i; j++){
      output.innerHTML += "*";
    }
    output.innerHTML +="<br>";
  }

}