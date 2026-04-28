const continue1 = document.getElementById("continue1");
const continue2 = document.getElementById("continue2");
const sendBtn = document.getElementById("sendBtn");

/* STEP 1 */
document.getElementById("abuseType").addEventListener("change", () => {
  continue1.disabled = !document.getElementById("abuseType").value;
});

continue1.onclick = () => {
  document.getElementById("selectedType").innerText =
    document.getElementById("abuseType").value;

  step1.classList.remove("active");
  step2.classList.add("active");
};

/* STEP 2 VALIDATION */
function validateStep2() {
  const name = nameEl.value.trim();
  const email = emailEl.value.trim();
  const website = websiteEl.value.trim();
  const description = descriptionEl.value.trim();

  continue2.disabled = !(name && email && website && description);
}

const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const websiteEl = document.getElementById("website");
const descriptionEl = document.getElementById("description");

[nameEl, emailEl, websiteEl, descriptionEl].forEach(el =>
  el.addEventListener("input", validateStep2)
);

continue2.onclick = () => {
  step2.classList.remove("active");
  step3.classList.add("active");
};

function backStep1() {
  step2.classList.remove("active");
  step1.classList.add("active");
}

function backStep2() {
  step3.classList.remove("active");
  step2.classList.add("active");
}

/* STEP 3 VALIDATION */
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
