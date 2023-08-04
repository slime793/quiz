const formReg = document.querySelector("#form-reg");

formReg.addEventListener("submit", async e => {
  e.preventDefault();
  const {name, password} = e.target;
  console.log(name.value, password.value);
  const res = await fetch("/auth/register", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: name.value,
      password: password.value,
    }),
  });
  const data = await res.json();
  console.log(data);
  if (data.message !== "ok") {
    window.location.assign('/')
  }
});
