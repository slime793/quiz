const formAnswer = document.querySelector("#answer");

let counter = 0;

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
    if (!data.message) {
      let html =data.answer.description
      console.log(data.message, '<<<<<<<<<<<<<');
      const card = document.querySelector(".card-title");
      console.log(card);
      card.innerHTML = html;
    }
    counter++;
    const card = document.querySelector(".card-title");
    card.innerHTML = data.description;
    formAnswer.reset();
  });
}
