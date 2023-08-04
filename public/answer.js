const formAnswer = document.querySelector("#answer");

let counter = 0;
let counterPoints = 0;

if (formAnswer) {
  formAnswer.addEventListener("submit", async e => {
    e.preventDefault();
    const {theme} = formAnswer.dataset;
    const {userAnswer} = e.target;

    const res = await fetch(`/${theme}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        userAnswer: userAnswer.value,
        counter: counter,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data.message === "true") {
      counter++;
      const card = document.querySelector(".card-title");
      card.innerHTML = data.answer.description;
      const points = document.querySelector(".points");
      counterPoints += +data.answer.points;
      points.innerHTML = counterPoints;
    }
    if (data.message === "false") {
      counter++;
      const card = document.querySelector(".card-title");
      card.innerHTML = data.answer.description;
    }
    if (data.message === "end") {
      console.log("Вопросы кончились");
      window.location.assign("/");
    }

    formAnswer.reset();
  });
}
