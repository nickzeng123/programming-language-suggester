
window.addEventListener("load", function() {
  let form = document.querySelector("form");
  let suggestion = document.querySelector("div#suggestion");

  form.addEventListener("submit", function(event) {   
    let question1Input = document.querySelector("input[name='question1']:checked").value;
    let question2Input = document.querySelector("input[name='question2']:checked").value;
    let question3Input = document.querySelector("input[name='question3']:checked").value;
    let question4Input = document.querySelector("input[name='question4']:checked").value;
    let question5Input = document.querySelector("input[name='question5']:checked").value;

    let score;
    if (question1Input === "yes" || question2Input === "yes" || question3Input === "yes" || question4Input === "yes" || question5Input === "yes") {
      score = score + 10;
    }
    
    form.removeAttribute("class");  
    document.getElementById("output").innerText = result;
    event.preventDefault();
  });

});

