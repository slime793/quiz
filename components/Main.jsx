const React = require("react");
const Card = require("./Card");
const Layout = require("./Layout");

function Main({title, themes}) {
  return (
    <Layout title={title}>
      <div>
        {themes.map(theme =>(<Card theme={theme}/>))}
      </div>
    </Layout>
  );
}

module.exports = Main;
