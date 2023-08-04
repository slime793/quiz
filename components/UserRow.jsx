const React = require("react");

function UserRow({user}) {
  return (
    <ul class="list-group list-group-flush">
      <li class="list-group-item"></li>
      <li class="list-group-item">
        {user.name} ---------------->>> {user.points}
      </li>
    </ul>
  );
}

module.exports = UserRow;
