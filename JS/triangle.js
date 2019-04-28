function myFunction() {

  // Validate form for entry
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Fields must be filled out");
    return false;
  }

  // Get input 
  var L1 = parseInt(document.getElementById("L1").value);
  var L2 = parseInt(document.getElementById("L2").value);
  var L3 = parseInt(document.getElementById("L3").value);

  // Add the input to an array
  var array = [L1, L2, L3];

  // Variable to store string for output
  var text;

  // condition for lengths to be greater than 0
  if (L1 <= 0 || L2 <= 0 || L3 <= 0) {
    text = " not a triangle. A triangle must have a length greater than 0."
  }

  //condition for not a triangle
  else if (
    (L1 + L2 <= L3 && L2 + L1 <= L3) ||
    (L1 + L3 <= L2 && L3 + L1 <= L2) ||
    (L2 + L3 <= L1 && L3 + L2 <= L1)
  ) {
    text = " Not a Triangle";
  }

  //condition for equilateral
  else if (
    L1 === L2 && L2 === L3 && L3 === L1
  ) {
    text = " an Equilateral.";
  }


  alert("The values you entered are:" + " [" + array.join() + "] " + " This is" + text);
}