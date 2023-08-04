const React = require("react");

function QuestionCard({questions}) {
  return (
    <div
      class="card text-white bg-primary mb-3"
      style={{ maxWidth: "205rem"}}
    >
      <div class="card-body">
        <div class="card-header" style={{fontSize: "30px"}}>
          Points: <span className="points">0</span>
        </div>
        <h5 class="card-title">{questions[0].description}</h5>
        <div></div>
      </div>
    </div>
  );
}

module.exports = QuestionCard;
