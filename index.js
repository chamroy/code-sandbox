import React from "react";
import ReactDom from "react-dom";

ReactDom.render(
  <div>
    <h1>My favorite Movies</h1>
    <ul>
      <li> Django Unchain</li>
      <li>Game of Thrones</li>
      <li> Trainspotting</li>
      <li>The Gray Man</li>
    </ul>
  </div>,
  document.getElementById("root")
);
