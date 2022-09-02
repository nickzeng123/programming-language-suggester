
window.addEventListener("load", function() {
  let form = document.querySelector("form");
  let suggestion = document.querySelector("div#suggestion");

  form.addEventListener("submit", function(event) {   
    const questionInput1 = document.querySelectorAll("input[name='question1']:checked").value;
    const questionInput2 = document.querySelectorAll("input[name='question2']:checked").value;
    const questionInput3 = document.querySelectorAll("input[name='question3']:checked").value;
    const questionInput4 = document.querySelectorAll("input[name='question4']:checked").value;
    const questionInput5 = document.querySelectorAll("input[name='question5']:checked").value;
    
    let score;
    questionInputsArray.forEach(function(element) {
      if (questionInput1 === "yes" || questionInput3 === "yes") {
        score = 15;} else if (questionInput2 === "yes" || questionInput4 === "yes") {
          score = 25;
        } else if (questionInput5 === "yes") {
          score = 35;
        }
    })

    let result;
    if (score >= 40) {
      result = "Javascript";
    } else if (score >= 20) {
      result = "Python";
    } else {
      result = "HTML";
    }

    document.querySelector("span#output").innerText = "html";
    suggesion.removeAttribute("class");  
    event.preventDefault();
  });

// });

