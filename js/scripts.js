function handleSuggestion(event) {
  event.preventDefault();
  const questionInput1 = document.querySelector("input[name='question1']:checked").value;
  const questionInput2 = document.querySelector("input[name='question2']:checked").value;
  const questionInput3 = document.querySelector("input[name='question3']:checked").value;
  const questionInput4 = document.querySelector("input[name='question4']:checked").value;
  const questionInput5 = document.querySelector("input[name='question5']:checked").value;
  
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

window.addEventListener("load", function() {
  let form = document.querySelector("form#survey");
  let suggestion = document.querySelector("div#suggestion");
  form.addEventListener("submit", handleSuggestion);
});


