import React from "react";
import Entry from "./Entry.jsx";
import emojipedias from "../emojipedia.js";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedias.map(function (emojipedia) {
          return (
            <Entry
              key={emojipedia.id}
              emoji={emojipedia.emoji}
              name={emojipedia.name}
              meaning={emojipedia.meaning}
            />
          );
        })}
      </dl>
    </div>
  );
}

export default App;
