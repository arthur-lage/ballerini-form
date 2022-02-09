const nameField = document.querySelector("#name");
const ageField = document.querySelector("#age");
const skillsField = document.querySelector("#skills");
const form = document.querySelector("#form");
const results = document.querySelector(".registered");

let resultsArray = [];

window.addEventListener("load", () => {
  if (JSON.parse(localStorage.getItem("extra-challenge:data")).length > 0) {
    resultsArray = JSON.parse(localStorage.getItem("extra-challenge:data"));
  } else {
    resultsArray = [];
  }

  showData();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameField.value;
  const age = ageField.value;
  const skills = skillsField.value;

  if(!(name.length > 0 && Number(age) > 0 && skills.length > 0)) return

  results.innerHTML = "";

  resultsArray.push({ name, age, skills });

  localStorage.setItem("extra-challenge:data", JSON.stringify(resultsArray))

  showData();
});

function showData() {
  resultsArray.forEach((data) => {
    const newResult = `
        <div class="user">
            <p class="user-info">
            <span>
                <span class="name">Nome</span>
                <span class="colon">:</span>
                <span class="name-text">${data.name}</span>
            </span>

            <br />

            <span>
                <span class="age">Idade</span>
                <span class="colon">:</span>
                <span class="age-text">${data.age}</span>
            </span>

            <br />

            <span>
                <span class="skills">Skills</span>
                <span class="colon">:</span>
                <span class="skills-text">${data.skills}</span>
            </span>
            </p>
        </div>
    `;
    results.innerHTML += newResult;
  });
}
