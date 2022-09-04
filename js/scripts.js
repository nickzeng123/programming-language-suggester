function handleSuggestion(event) {
  event.preventDefault();
  const questionInput1 = document.querySelector("input[name='question1Input']:checked").value;
  const questionInput2 = document.querySelector("input[name='question2Input']:checked").value;
  const questionInput3 = document.querySelector("input[name='question3Input']:checked").value;
  const questionInput4 = document.querySelector("input[name='question4Input']:checked").value;
  const questionInput5 = document.querySelector("input[name='question5Input']:checked").value;
  
  let score;
  if (questionInput1 === "yes" || questionInput3 === "yes") {
    score = 1;
  } else if (questionInput2 === "yes" || questionInput4 === "yes") {
    score = 2;
  } else if (questionInput5 === "yes") {
    score = 3;
  }

  let result;
  if (score === 1) {
    result = "Python";
  } else if (score === 2) {
    result = "Javascript";
  } else if (score === 3) {
    result = "Swift";
  } else {
    result = "HTML";
  }
  document.querySelector("span#output").innerText = result;   
   suggestion.removeAttribute("class");
}

form.addEventListener("submit", function() {
  resetBtn.removeAttribute("class");
});

window.addEventListener("load", function() {
  let form = document.querySelector("form#survey");
  let suggestion = document.querySelector("div#suggestion");
  let resetBtn = document.querySelector("button#reset");
  form.addEventListener("submit", handleSuggestion);
});

resetBtn.addEventListener("click", function() {
  document.querySelector("questionInput1").value = null;
  document.querySelector("questionInput2").value = null;
  document.querySelector("questionInput3").value = null;
  document.querySelector("questionInput4").value = null;
  document.querySelector("questionInput5").value = null;
})



