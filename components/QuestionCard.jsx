const React = require("react");

function QuestionCard({questions}) {

    return (
        <div class="card text-white bg-primary mb-3" style={{maxWidth: "25rem"}}>
        <div class="card-body">
          <h5 class="card-title">{questions[0].description}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div>
          </div>
        </div>
      </div>
    );
  }
  
  module.exports = QuestionCard;