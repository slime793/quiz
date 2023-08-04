const React = require("react");
function Card({theme}) {
  return (
    <div class="card text-white bg-primary mb-3" style={{maxWidth: "25rem"}}>
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
