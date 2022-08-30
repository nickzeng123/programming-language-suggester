
window.addEventListener("load", function() {
  let form = document.querySelector("form");
  let suggestion = document.querySelector("div#suggestion");
  
  //const question1 = document.querySelector("input[name='question1']:checked").value;
  //const question2 = document.querySelector("input[name='question2']:checked").value;
  //const question3 = document.querySelector("input[name='question3']:checked").value;
  //const question4 = document.querySelector("input[name='question4']:checked").value;
  //const question5 = document.querySelector("input[name='question5']:checked").value;

  form.addEventListener("submit", function(event) {
    const question1 = document.querySelector("input[name='question1']:checked").value;
    const question2 = document.querySelector("input[name='question2']:checked").value;
    const question3 = document.querySelector("input[name='question3']:checked").value;
    const question4 = document.querySelector("input[name='question4']:checked").value;
    const question5 = document.querySelector("input[name='question5']:checked").value;

    form.removeAttribute("class");
    event.preventDefault();
  })

  
  
}

