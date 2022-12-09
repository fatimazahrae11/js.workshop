document.getElementById('valider').onclick=function(){
    let inp="";
      let input=document.getElementById('enter').value ;
      if(input<=10){
        for (let i = 0; i <input;i++) {
          inp=inp+"<input id=en"+i+">"
          document.getElementById('validation').innerHTML=inp
        }
      }
      else{
        document.getElementById('validation').innerHTML="Valeur entre 1 et 10"
      }
    }

