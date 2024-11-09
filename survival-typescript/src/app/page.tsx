import { NextPage } from "next";

import LoadImage from "./LoadImage";

const IndexPage: NextPage = async () => {
  type Image = {
    url: string;
  };
  const fetchInitialImage = async (): Promise<Image> => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const images = await res.json();
    console.log("serverSideLoaded")
    console.log(images);
    return images[0];
  };

  const image =  await fetchInitialImage()

  return (
    <div>
      <LoadImage url={image.url} />
    </div>
  );
};
export default IndexPage;
