function search()
{
    {
    var str = document.getElementById('phrase').value;
    var index = str.indexOf(document.getElementById('word').value);
    if(index !== -1)
      {
        document.getElementById('result').innerHTML="il existe."
      } 
    else
      {
        document.getElementById('result').innerHTML="Error.";
      }
      }
}


function delt()
{
      {
    var str = document.getElementById('phrase').value;
    var index = document.getElementById('word').value;
    var ret = str.replace(index, '');
    document.getElementById('result').innerHTML=ret;
      }
}
    
