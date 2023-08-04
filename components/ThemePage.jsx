const React = require("react");
const Layout = require("./Layout");
const QuestionCard = require("./QuestionCard");

function Theme({title, questions}) {
  return (
    <Layout title={title}>
      <div>
        <QuestionCard questions={questions} />
        <form id = 'answer' data-theme={questions[0].theme_id}>
            <label for="exampleInputEmail1">Ваш ответ</label>
            <input
              name="userAnswer"
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Отвечай скорее..."
            />
            <button type="submit" class="btn btn-primary btn-lg btn-block">
              Отправить ответ
            </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = Theme;
