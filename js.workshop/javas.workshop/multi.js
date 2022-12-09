let num = document.getElementById("number");
let btn = document.getElementById("btnbtn");
let output = document.getElementById("result");

btn.addEventListener("click", multi);

function multi(a)
{
  output.innerHTML = "";
  for(let i = 1; i <= 10; i++) 
  {
  output.innerHTML+= `${num.value} * ${i} = ${num.value * i} <br>`;
  }
  a.prevenetDefault();
}


