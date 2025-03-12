import { useEffect, useState } from "react";
import ImageContent from "../components/ImageGridItem";
import SearchBar from "../components/SearchBar";
import { getImages, ImageShape } from "../api/image-api";

type SearchProps = {
  searchWord: string;
  setSearchWord: (word: string) => void;
};

function Search(props: SearchProps) {
  const [images, setImages] = useState<ImageShape[]>([]);

  useEffect(() => {
    const searchImages = async () => {
      const images = await getImages(props.searchWord);
      setImages(images);
    };
    searchImages();
  }, [props.searchWord]);

  return (
    <>
      <div>
        <SearchBar setSearchKey={props.setSearchWord} />
        <ImageContent images={images} />
      </div>
    </>
  );
}

export default Search;
