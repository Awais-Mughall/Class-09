// browser api

//once

/*setTimeout(() => {
  console.log("i will run after 5 sec once");
}, 5000);

//multiple time

setInterval(() => {
  console.log("I will repeat after 5 sec multiple times");
}, 5000);
*/

function calculatePercentage() {
  const obtMarksRef = document.querySelector("#obtMarks");
  const totalMarksRef = document.querySelector("#totalMarks");
  const resultDivRef
  
   = document.querySelector("#percentage");


  let obtMarks = Number(obtMarksRef.value);
  let totalMarks = Number(totalMarksRef.value);
  console.log(obtMarks);
  console.log(totalMarks);

  const percentage = (obtMarks / totalMarks) * 100;
  resultDivRef.innerHTML = percentage;


  ;
}
