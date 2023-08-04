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
    console.log(data.answer.answer);
    if (data.message === "true") {
      const card = document.querySelector(".card-title");
      const cardAnswer = document.querySelector(".card-answer");
      card.innerHTML = data.answer.description;
      const points = document.querySelector(".points");
      counterPoints += +data.answer.points;
      points.innerHTML = counterPoints;
      card.innerHTML = data.answer.description;
      cardAnswer.innerHTML = `Правильно!`;
      counter++;
    }
    if (data.message === "false") {
      counter++;
      const card = document.querySelector(".card-title");
      const cardAnswer = document.querySelector(".card-answer");

      card.innerHTML = data.answer.description;
      cardAnswer.innerHTML = `Правильный ответ: ${data.viewAns.answer}`;
    }
    if (data.message === "end") {
      console.log("Вопросы кончились");
      window.location.assign("/");
    }

    formAnswer.reset();
  });
}
