var button = document.getElementById("btn-calculate");
var recalculate = document.querySelector("#bmi-recalculate");

button.addEventListener("click", function (event) {
  var height = document.getElementById("height");
  height = Number(height.value);
  height = height / 100;

  var weight = document.getElementById("weight");
  weight = Number(weight.value);

  var age = document.getElementById("age");
  age = Number(age.value);

  if (age == "" || age == 0 || isNaN(age)) {
    alert("please input your age properly!!");
    return false;
  }

  if (height == "" || height == 0 || isNaN(height)) {
    alert("please input your height properly!!");
    return false;
  }

  if (weight == "" || weight == 0 || isNaN(weight)) {
    alert("please input your weight properly!!");
    return false;
  }

  var totalbmi = weight / (height * height);
  totalbmi = totalbmi.toFixed(2);

  var bmioutput = document.querySelector("#bmioutput");
  bmioutput.innerHTML = totalbmi;

  var comment = document.querySelector("#bmi-comment");

  if (totalbmi < 18.5) {
    comment.innerHTML = "You are <u>UnderWeight</u>";
  }
  if (totalbmi >= 18.5 && totalbmi < 25) {
    comment.innerHTML = "You are <u>Healthy</u>";
  }

  if (totalbmi >= 25 && totalbmi < 30) {
    comment.innerHTML = "You are <u>OverWeight</u>";
  }

  if (totalbmi > 30) {
    comment.innerHTML = "You are <u>Obese</u>";
  }

  var modalback = document.querySelector(".modal-background");
  modalback.classList.add("active");
  var modal = document.querySelector(".modal");
  modal.classList.add("active");
});

recalculate.addEventListener("click", function (event) {
  var modalback = document.querySelector(".modal-background");
  modalback.classList.remove("active");

  var modal = document.querySelector(".modal");
  modal.classList.remove("active");

  var bmiform = document.getElementById("bmi-form").reset();
});
