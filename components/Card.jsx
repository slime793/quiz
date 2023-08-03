const React = require("react");
function Card({theme}) {
  return (
    <div class="card text-white bg-primary mb-3" style={{maxWidth: "25rem"}}>
      <div class="card-header">{theme.name}</div>
      <div class="card-body">
        <h5 class="card-title">Primary card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
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
