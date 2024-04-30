
/* Function Defination :
The defines a function name `initialHere` that takes three parameters: `firstName`, `middleName`, and `lastName` */

// Write code to complete the initialHere function 👇
function initialHere(firstName, middleName, lastName) {
  /* Intitials Calcution*/ 
  let initials = firstName[0] + middleName[0] + lastName[0];
  //This line calculates the initials by taking the first character of each name part (first, middle, and last names) using the array-like syntax ([0]).
  
 
  // Store the each initial in a variable appending a period (e.g "S." for Susan) 
/* Full Name with Initials */
  let fullNameWithInitials = `${firstName} ${middleName} ${lastName} ${initials}.`
  //This line creates a string fullNameWithInitials by combining the first, middle, and last names with the calculated initials. It uses template literals (${}) to insert variables into the string.

  // Log the name to the console in the format "Susan B. Anthony, S.B.A."
  console.log(fullNameWithInitials);
}




// ⛔️ TEST FUNCTION CALLS - DON’T EDIT BELOW HERE ️️⛔️
initialHere("Susan", "Brownell", "Anthony"); // output: "Susan B. Anthony, S.B.A."
initialHere("Martin", "Luther", "King"); // output: "Martin L. King, M.L.K."
initialHere("Ruth", "Bader", "Ginsburg"); // output: "Ruth B. Ginsburg, R.B.G."
initialHere("John", "Fitzgerald", "Kennedy"); // output: "John F. Kennedy, J.F.K."
initialHere("Franklin", "Delano", "Roosevelt"); // output: "Franklin D. Roosevelt, F.D.R."

https://globaltechexperience.notion.site/LiveLab-Resources-JavaScript-Functions-with-AI-196383bff9fd40faaa8694d0dda4a4a5