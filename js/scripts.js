
window.addEventListener("load", function() {
  let form = document.querySelector("form");
  let suggestion = document.querySelector("div#suggestion");

  form.addEventListener("submit", function(event) {   
    const questionInputs = document.querySelectorAll("input[name='question']:checked").value;
    const questionInputsArray = Array.from(questionInputs);

    let score;
    questionInputsArray.forEach(function(element) {
      if (element === "yes") {
        score = score + 10;
      };
    })

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

