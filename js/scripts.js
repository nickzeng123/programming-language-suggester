
window.addEventListener("load", function() {
  let form = document.querySelector("form");
  let suggestion = document.querySelector("div#suggestion");

  form.addEventListener("submit", function(event) {   
    let questionInput = document.querySelector("input[name='question1']:checked").value;
  
    let answerArray = [];
    let score;
    if (question1Input === "yes" || question2Input === "yes" || question3Input === "yes"|| question4Input === "yes" || question5Input === "yes") {
      answerArray.push("yes");
    }

    let result;
    if (score >= 40) {
      result = "Javascript";
    } else if (score >= 20) {
      result = "Python";
    } else {
      result = "HTML";
    }

    document.querySelector("span#output").innerText = result;
    form.removeAttribute("class");  
    event.preventDefault();
  });

});

