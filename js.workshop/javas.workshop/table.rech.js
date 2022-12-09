function laTaille(){
    let tailles = Number(document.getElementById('taille').value);
    if(tailles == document.getElementById('taille').value){
      document.getElementById('taille').disabled = true;
    }
    if (tailles == 1) {
      document.getElementById('case').style.display = 'block';
      document.getElementById('cree').style.display = 'block';
    }
    if (tailles == 2) {
      document.getElementById('case').style.display = 'block';
      document.getElementById('case2').style.display = 'block';
      document.getElementById('cree').style.display = 'block';
    }
  
    if (tailles == 3) {
      document.getElementById('case').style.display = 'block';
      document.getElementById('case2').style.display = 'block';
      document.getElementById('case3').style.display = 'block';
      document.getElementById('cree').style.display = 'block';
    }
    if (tailles == 4) {
      document.getElementById('case').style.display = 'block';
      document.getElementById('case2').style.display = 'block';
      document.getElementById('case3').style.display = 'block';
      document.getElementById('case4').style.display = 'block';
      document.getElementById('cree').style.display = 'block';
    }
    if (tailles == 5) {
      document.getElementById('case').style.display = 'block';
      document.getElementById('case2').style.display = 'block';
      document.getElementById('case3').style.display = 'block';
      document.getElementById('case4').style.display = 'block';
      document.getElementById('case5').style.display = 'block';
      document.getElementById('cree').style.display = 'block';
    }
  }
  
  let table10 =[];
  function addNumber(){
    document.getElementById('cree').onclick=function(){
      let tailles = Number(document.getElementById('taille').value);
      let userAdd = document.getElementById('case').value;
      let userAdds = document.getElementById('case2').value;
      let userAdds2 = document.getElementById('case3').value;
      let userAdds3 = document.getElementById('case4').value;
      let userAdds4 = document.getElementById('case5').value;
      if(tailles == 1){
        table10.push(userAdd);
        document.getElementById('case').disabled = true;
        showUserInfo();
      }
     if(tailles == 2){
        table10.push(userAdd);
        table10.push(userAdds);
        document.getElementById('case').disabled = true;
        document.getElementById('case2').disabled = true;
        showUserInfo();
      }
      if(tailles == 3){
        table10.push(userAdd);
        table10.push(userAdds);
        table10.push(userAdds2);
        document.getElementById('case').disabled = true;
        document.getElementById('case2').disabled = true;
        document.getElementById('case3').disabled = true;
        showUserInfo();
      }
      if(tailles == 4){
        table10.push(userAdd);
        table10.push(userAdds);
        table10.push(userAdds2);
        table10.push(userAdds3);
        document.getElementById('case').disabled = true;
        document.getElementById('case2').disabled = true;
        document.getElementById('case3').disabled = true;
        document.getElementById('case4').disabled = true;
        showUserInfo();
      }
      if(tailles == 5){
        table10.push(userAdd);
        table10.push(userAdds);
        table10.push(userAdds2);
        table10.push(userAdds3);
        table10.push(userAdds4);
        document.getElementById('case').disabled = true;
        document.getElementById('case2').disabled = true;
        document.getElementById('case3').disabled = true;
        document.getElementById('case4').disabled = true;
        document.getElementById('case5').disabled = true;
        showUserInfo();
      }
    }
  }
  function showUserInfo(){
    let affiche = "";
    //tri ici
    function sort(table10){
      for(var i = 0; i < table10.length; i++){
        //stocker l'index de l'élément minimum
        var min = i; 
        for(var j = i+1; j < table10.length; j++){
          if(+table10[j] < +table10[min]){
           // mettre à jour l'index de l'élément minimum
           min = j; 
          }
        }
        var tmp = table10[i];
        table10[i] = table10[min];
        table10[min] = tmp;
      }
      document.getElementById('cree').setAttribute('disabled','')
  
      return table10;
    };
    sort(table10);
  
    for(let i=0;i<table10.length;i++){
      affiche +=`
        <table style="border-collapse:collapse;margin-top:20px;" border="2">
          <tr style="width:100px;height:fit-content;">
            <td style="font-size:20px;text-align:center;width:50px;height:50px;margin:0 0 0 10px;">${table10[i]}</td>
          </tr>
        </table>
      `;
    }
    document.getElementById('display').innerHTML = affiche;
    document.getElementById('display').style.display = 'flex';
    document.getElementById('display').style.textAlign = 'center';
  }
  
    
  
  function recherche(){
    document.getElementById('rech').onclick=function(){
      let mots=document.getElementById('rech1').value;
      let tab = Array;
      tab[0]= document.getElementById('case').value;
      tab[1]= document.getElementById('case2').value;
      tab[2]= document.getElementById('case3').value;
      tab[3]= document.getElementById('case4').value;
      tab[4]= document.getElementById('case5').value;
      if(mots == tab[0]){
        document.getElementById('display2').innerHTML="La valeur existe au tableau";
      }
      else if(mots == tab[1]){
        document.getElementById('display2').innerHTML="La valeur existe au tableau";
      }
      else if(mots == tab[2]){
        document.getElementById('display2').innerHTML="La valeur existe au tableau";
      }
      else if(mots == tab[3]){
        document.getElementById('display2').innerHTML="La valeur existe au tableau";
      }
      else if(mots == tab[4]){
        document.getElementById('display2').innerHTML="La valeur existe au tableau";
      }
      else{
        document.getElementById('display2').innerHTML="La valeur n'existe pas au tableau";
      }
    }
  }
