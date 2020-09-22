function siCalculate(){
    var regex = /^[0-9\.]+$/;

    p = document.getElementById("sip").value;
    n = document.getElementById("sin").value;
    r = document.getElementById("sir").value;
    siresult = document.getElementById("siresult");

    if(p == "" || n == "" || r == ""){
        alert("Please enter all values!");
    }
    else{
        if(regex.test(p) && regex.test(r) && regex.test(n)){
            document.getElementById("pr").innerHTML=p;
            document.getElementById("rt").innerHTML=r;
            document.getElementById("ti").innerHTML=n;
                    
            siresult.innerHTML = "The Simple Interest is = " + (p*n*r/100).toFixed(3);
        }
        else{
            alert("Enter only numeric value")
        }   
    }  
}



function ciCalculate(){
    var regex = /^[0-9\.]+$/;
    
    p = document.getElementById("cip").value;
    n = document.getElementById("cin").value; // no. of compoundings per year
    t = document.getElementById("cit").value; // no. of years
    r = document.getElementById("cir").value;
    ciresult = document.getElementById("ciresult");

    if(p == "" || n == "" || r == "" || t == ""){
        alert("Please enter all values!");
    }
    else{
        if(regex.test(p) && regex.test(r) && regex.test(n) && regex.test(t)){
            // The equation is A = p * [[1 + (r/n)] ^ nt]
            A = (p* Math.pow((1 + (r/(n*100))), (n*t)));
    
            document.getElementById("cp").innerHTML=p;
            document.getElementById("cr").innerHTML=r;
            document.getElementById("cn").innerHTML=n;
            document.getElementById("ct").innerHTML=t;
            document.getElementById("ca").innerHTML=A.toFixed(2);
            document.getElementById("cp1").innerHTML=p;
            document.getElementById("cn1").innerHTML=n;
    
            // toFixed is used for rounding the amount with two decimal places.
            ciresult.innerHTML = "The total Amount is = " + A.toFixed(2);

            ciresult.innerHTML += "<br> The Compound interest is = " + (A.toFixed(2) - p).toFixed(2);
        }
        else{
            alert("Enter only numeric value")
        }   
    }
}

//SI code functions
function start(){
    document.getElementById("sidiv1").style.backgroundColor="cyan";
}
function siDiv2(){
    document.getElementById("sidiv2").style.backgroundColor="cyan";
    document.getElementById("sip").type="text";
}
function siDiv3(){
    document.getElementById("sidiv3").style.backgroundColor="cyan";
    document.getElementById("sir").type="text";
}
function siDiv4(){
    document.getElementById("sidiv4").style.backgroundColor="cyan";
    document.getElementById("sin").type="text";
}
function siDiv5(){
    document.getElementById("sidiv5").style.backgroundColor="cyan";
    document.getElementById("sibtn").style.display="block";
}

// CI code function
function start1(){
    document.getElementById("cidiv1").style.backgroundColor="cyan";
}
function ciDiv2(){
    document.getElementById("cidiv2").style.backgroundColor="cyan";
    document.getElementById("cip").type="text";
}
function ciDiv3(){
    document.getElementById("cidiv3").style.backgroundColor="cyan";
    document.getElementById("cir").type="text";
}
function ciDiv4(){
    document.getElementById("cidiv4").style.backgroundColor="cyan";
    document.getElementById("cit").type="text";
}
function ciDiv5(){
    document.getElementById("cidiv5").style.backgroundColor="cyan";
    document.getElementById("cin").type="text";
}
function ciDiv6(){
    document.getElementById("cidiv6").style.backgroundColor="cyan";
    document.getElementById("cibtn").style.display="block";
}