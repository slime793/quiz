const React = require("react");
const Layout = require("./Layout");

function Toplist({title, user}) {
  return (
    <Layout title={title} users={user}>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"></li>
        <li class="list-group-item">{user.name}</li>
        <li class="list-group-item">{user.points}</li>
        <li class="list-group-item">A fourth item</li>
        <li class="list-group-item">And a fifth one</li>
      </ul>
    </Layout>
  );
}

module.exports = Toplist;
