function handleSuggestion(event) {
  event.preventDefault();
  let questionInput1 = document.querySelector("input[name='question1Input']:checked").value;
  let questionInput2 = document.querySelector("input[name='question2Input']:checked").value;
  let questionInput3 = document.querySelector("input[name='question3Input']:checked").value;
  let questionInput4 = document.querySelector("input[name='question4Input']:checked").value;
  let questionInput5 = document.querySelector("input[name='question5Input']:checked").value;
<<<<<<< HEAD
  
  // change values to 0 and 1 and use parseInt, add all answers = result
=======
>>>>>>> 8e8f7d9df499464a910c9e3385f419a82ae8a4bf
  
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
    result = "JavaScript";
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
  let resetBtn = document.querySelector("button#reset");

  form.addEventListener("submit", handleSuggestion);

  form.addEventListener("submit", function() {
    resetBtn.removeAttribute("class");
  });

  resetBtn.addEventListener("click", function() {
    suggestion.setAttribute("class", "hidden");
<<<<<<< HEAD
    document.getElementById("question1Input").value = false; 
    document.getElementById("question2Input").value = false;
    document.getElementById("question3Input").value = false;
    document.getElementById("question4Input").value = false;
    document.getElementById("question5Input").value = false;
  })
});

// set 

=======
    document.getElementById("question1Input").value = null;
    document.getElementById("question2Input").value = null;
    document.getElementById("question3Input").value = null;
    document.getElementById("question4Input").value = null;
    document.getElementById("question5Input").value = null;
  })
});

>>>>>>> 8e8f7d9df499464a910c9e3385f419a82ae8a4bf




