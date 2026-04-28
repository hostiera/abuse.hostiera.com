function goStep2() {
  const type = document.getElementById("abuseType").value;
  const error = document.getElementById("typeError");

  if (!type) {
    error.style.display = "block";
    return;
  }

  error.style.display = "none";
  document.getElementById("selectedType").innerText = type;

  document.getElementById("step1").classList.remove("active");
  document.getElementById("step2").classList.add("active");
}

function backStep1() {
  document.getElementById("step2").classList.remove("active");
  document.getElementById("step1").classList.add("active");
}

function goStep3() {
  document.getElementById("step2").classList.remove("active");
  document.getElementById("step3").classList.add("active");
}

function backStep2() {
  document.getElementById("step3").classList.remove("active");
  document.getElementById("step2").classList.add("active");
}
