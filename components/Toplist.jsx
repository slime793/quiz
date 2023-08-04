const React = require("react");
const Layout = require("./Layout");
const UserRow = require("./UserRow");

function Toplist({title, users}) {
  return (
    <Layout title={title}>
      <div>
        {users.map(user => (
          <UserRow user={user} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = Toplist;
