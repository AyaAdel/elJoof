import React, { useState } from "react";

import Header from "../Components/Header/index";
import Search from "../Components/Search/Search";

function App() {
  const [displaySearch, setDisplaySearch] = useState<boolean>(false);

  const callbaskSearch = (callback: any) => {
    setDisplaySearch(callback);
  };

  return (
    <div>
      <Header handleSearch={callbaskSearch} />
      <div>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=17y--WIYiSD0jE3-HTtI8jQNtDz4&hl=en"
          style={{ width: "100%", height: "1000px" }}
        ></iframe>
      </div>
      {!displaySearch && <Search />}
    </div>
  );
}

export default App;
