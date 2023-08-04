const React = require("react");
const Layout = require("./Layout");

function Main({title, user}) {
  return (
    <Layout title={title} user={user}>
      <div className="buttons">
        <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-primary" type="button">
            1 вопрос
          </button>
          <button class="btn btn-primary" type="button">
            2 вопрос
          </button>
          <button class="btn btn-primary" type="button">
            3 вопросс
          </button>
        </div>
      </div>

      <div className="img">
        <img
          src="https://www.dictionary.com/e/wp-content/uploads/2022/10/20221011_WOTD_Quiz_teal_1000x700.png"
          alt="фон"
        />
      </div>
    </Layout>
  );
}

module.exports = Main;
