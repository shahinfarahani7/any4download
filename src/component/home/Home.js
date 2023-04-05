import SearchBar from "../../component/searchbar/SearchBar";
import Supported from "../../component/platforms/Platforms";

import ActionAreaCard from "../../component/pastelink/NewPasteLink";
import Why from "../../component/why/Why";
import "./HomeStyle.css";

import Properties from "../properties/Propertieeeeeee";

function Home() {
  return (
    <>
      <div className="background">
        <SearchBar />
        <ActionAreaCard />
      </div>
      <Properties />
      <Why />
      <Supported />
    </>
  );
}

export default Home;
