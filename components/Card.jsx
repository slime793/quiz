const React = require("react");
function Card({theme}) {
  return (
    <div
      class="card text-white bg-primary mb-3"
      style={{display: "flex", maxWidth: "20rem"}}
    >
      <img
        src = {`${theme.cover}`}
        class="card-img-top"
        alt="#"
      ></img>
      <div class="card-header">{theme.name}</div>
      <div class="card-body">
        <h5 class="card-title">{theme.description}</h5>
        <div>
          <a href={`/${theme.id}`} class="btn btn-warning">
            Погнали!
          </a>
        </div>
      </div>
    </div>
  );
}

module.exports = Card;
