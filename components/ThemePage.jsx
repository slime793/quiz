const React = require("react");
const Layout = require("./Layout");
const QuestionCard = require("./QuestionCard");

function Theme({title, questions}) {
  return (
    <Layout title={title}>
      <div>
        '
        <QuestionCard questions ={questions}/>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Ваш ответ</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Отвечай скорее..."
            />
            <button type="submit" class="btn btn-primary btn-lg btn-block">Отправить ответ</button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

module.exports = Theme;
