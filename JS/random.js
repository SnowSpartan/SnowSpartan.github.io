function myFunction() {
    document.getElementById("responce").innerHTML = document.getElementById("namebox").value;
  }

  
  function colorchange() {
    const colorwords = document.getElementById("colors");
    colorwords.style.color = "orange";
  }

  function numbersgen() {
    let x = document.getElementById("myDIV");
    const gen = Math.floor((Math.random() * 10) + 1);
    document.getElementById("numbers").innerHTML = gen;
    
    if (gen >= 5) {
    document.getElementById("numbersbox").value = "You got a High number =" + gen;
    x.style.display = "block";

  } else {
    document.getElementById("numbersbox").value = "You got a Low number =" + gen;
    x.style.display = "none";
  }

  }

  