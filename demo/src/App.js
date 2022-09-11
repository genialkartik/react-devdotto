import React from "react";
import DevDotTo from "react-devdotto";

function App() {
  return (
    <div className="App">
      <DevDotTo
        username="genialkartik"
        coverimage={true}
        darkMode={false}
        hideTags={false}
        numberOfPosts={5}
      />
    </div>
  );
}

export default App;
