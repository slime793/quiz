const React = require("react");
const Navbar = require("./Navbar");

function Layout({title, children}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
          crossOrigin="anonymous"
        />
        <script defer src="/answer.js" />
        <script defer src="/reg.js" />
        <link rel="stylesheet" href="/style.css" />
      </head>
      <Navbar />
      <body className="img"
      
      >
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
