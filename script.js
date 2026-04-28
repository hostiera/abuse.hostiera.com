const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");

const continue1 = document.getElementById("continue1");
const continue2 = document.getElementById("continue2");
const sendBtn = document.getElementById("sendBtn");

/* STEP 1 */
const abuseType = document.getElementById("abuseType");

abuseType.addEventListener("change", () => {
  continue1.disabled = !abuseType.value;
});

continue1.addEventListener("click", () => {
  if (!abuseType.value) return;

  document.getElementById("selectedType").innerText = abuseType.value;

  step1.classList.remove("active");
  step2.classList.add("active");
});

/* STEP 2 */
const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const websiteEl = document.getElementById("website");
const descriptionEl = document.getElementById("description");
const emailError = document.getElementById("emailError");

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateStep2() {
  const name = nameEl.value.trim();
  const email = emailEl.value.trim();
  const website = websiteEl.value.trim();
  const description = descriptionEl.value.trim();

  // email validation
  if (email && !isValidEmail(email)) {
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }

  continue2.disabled = !(name && isValidEmail(email) && website && description);
}

[nameEl, emailEl, websiteEl, descriptionEl].forEach(el =>
  el.addEventListener("input", validateStep2)
);

continue2.addEventListener("click", () => {
  step2.classList.remove("active");
  step3.classList.add("active");
});

/* BACK BUTTONS */
function backStep1() {
  step2.classList.remove("active");
  step1.classList.add("active");
}

function backStep2() {
  step3.classList.remove("active");
  step2.classList.add("active");
}

window.backStep1 = backStep1;
window.backStep2 = backStep2;

/* STEP 3 */
function validateStep3() {
  const c = document.getElementById("copyright").value.trim();
  const i = document.getElementById("infringing").value.trim();
  const s = document.getElementById("signature").value.trim();
  const agree = document.getElementById("agree").checked;
  const radio = document.querySelector('input[name="owner"]:checked');

  sendBtn.disabled = !(c && i && s && agree && radio);
}

document.addEventListener("input", validateStep3);
document.addEventListener("change", validateStep3);
