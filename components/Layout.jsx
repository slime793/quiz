const React = require("react");
const Navbar = require("./Navbar");

function Layout({title, children}) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>{title}</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
          crossorigin="anonymous"
        />
        <script defer src="/script/reg.js" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <Navbar />
      <body>
      
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
