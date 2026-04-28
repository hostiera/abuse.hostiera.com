const dropdown = document.getElementById("dropdown");
const selected = dropdown.querySelector(".dropdown-selected");
const list = dropdown.querySelector(".dropdown-list");
const items = dropdown.querySelectorAll(".item");

const continue1 = document.getElementById("continue1");

let selectedValue = "";

/* DROPDOWN */
selected.onclick = () => {
  list.style.display = list.style.display === "block" ? "none" : "block";
};

items.forEach(item => {
  item.onclick = () => {
    selected.innerText = item.innerText;
    selectedValue = item.innerText;
    list.style.display = "none";
    continue1.disabled = false;
  };
});

/* STEP SWITCH */
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");

continue1.onclick = () => {
  document.getElementById("selectedType").innerText = selectedValue;
  step1.classList.remove("active");
  step2.classList.add("active");
};

/* STEP 2 */
const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const websiteEl = document.getElementById("website");
const descriptionEl = document.getElementById("description");
const continue2 = document.getElementById("continue2");

function validate2() {
  continue2.disabled = !(nameEl.value && emailEl.value && websiteEl.value && descriptionEl.value);
}

[nameEl, emailEl, websiteEl, descriptionEl].forEach(el =>
  el.addEventListener("input", validate2)
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

window.backStep1 = backStep1;
window.backStep2 = backStep2;

/* STEP 3 */
const sendBtn = document.getElementById("sendBtn");

function validate3() {
  const c = document.getElementById("copyright").value;
  const i = document.getElementById("infringing").value;
  const s = document.getElementById("signature").value;
  const agree = document.getElementById("agree").checked;
  const radio = document.querySelector('input[name="owner"]:checked');

  sendBtn.disabled = !(c && i && s && agree && radio);
}

document.addEventListener("input", validate3);
document.addEventListener("change", validate3);
