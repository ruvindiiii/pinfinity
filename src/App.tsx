import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ImageContent from "./ImageContent";
import Home from "./LogIn";
import SearchBar from "./SearchBar";

export type ImageShape = {
  url: string;
  id: number;
};

function App(props) {
  const [images, setImages] = useState<ImageShape[]>([]);

  useEffect(() => {
    const GetData = async () => {
      let url = `https://api.pexels.com/v1/search?query=${props.searchWord}&per_page=80`;
      let response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization:
            "vEnvq0c4WmWsdTZouQQ2WYfSgbmU88wD8KrbxZ31zNAAo0mGY4m7SEYi",
        },
      });
      let result = await response.json();
      console.log(result);
      let imageArr = result.photos.map((resObj: any) => {
        return {
          url: resObj.src.medium,
          id: resObj.id,
        };
      });
      setImages(imageArr);
    };

    GetData();
  }, [props.searchWord]);

  return (
    <>
      <div>
        <SearchBar setSearchKey={props.setSearchWord} />
        <ImageContent content={images} />
      </div>
    </>
  );
}

export default App;
