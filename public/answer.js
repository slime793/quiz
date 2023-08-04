const formAnswer = document.querySelector("#answer");

let counter = 0;

if (formAnswer) {
  formAnswer.addEventListener("submit", async e => {
    e.preventDefault();
    const {theme} = formAnswer.dataset;
    const {userAnswer} = e.target;
    console.log(e);

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
    if (data.message === "Ответ не верный!") {
      console.log('Ответ не верный!')
      const card = document.querySelector(".card-text");
      card.innerHTML = data.description;
    }
    counter++;
    console.log(counter);
    const card = document.querySelector(".card-text");
    card.innerHTML = data.description;
    formAnswer.reset();
  });
}
