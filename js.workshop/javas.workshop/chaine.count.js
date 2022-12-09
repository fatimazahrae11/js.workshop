count = function(a) {
    
    console.log(a); 
    n = a.length;
    console.log(n); 
    var c = 0;
    for (i = 0; i < n; i++) {
        if ((a[i] == "a") || (a[i] == "e") || (a[i] == "i") || (a[i] == "o") || (a[i] == "u") || (a[i] == "y")) {
        console.log(a[i]); 
        c += 1;
    }
    }
    
    document.getElementById("TEXT").innerText = c;
    }