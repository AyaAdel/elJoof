import React, { useEffect, useState } from "react";

import Header from "../Components/Header/index";
import Search from "../Components/Search/Search";

function Home() {
  const [displaySearch, setDisplaySearch] = useState<boolean>(false);
  const [displayContent, setDisplayContent] = useState<boolean>(false);
  const [displaySplash, setDisplaySplach] = useState<boolean>(true);

  const callbaskSearch = (callback: any) => {
    setDisplaySearch(callback);
  };

  useEffect(() => {
    setTimeout(() => {
      setDisplaySplach(false);
    }, 3000);

    setTimeout(() => {
      setDisplayContent(true);
    }, 3000);
  }, []);

  return (
    <div>
      {displaySplash && (
        <div className="image-vision-wrapper">
          <div className="entrance-background">
            <div className="image-vision">
              <img src="images/logo.png" alt="Logo" />
            </div>
          </div>
        </div>
      )}
      {displayContent && (
        <>
          <Header handleSearch={callbaskSearch} />
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=17y--WIYiSD0jE3-HTtI8jQNtDz4&hl=en"
              style={{ width: "100%", height: "100%" }}
            ></iframe>
          </div>
          {displaySearch && <Search />}
        </>
      )}
    </div>
  );
}

export default Home;
