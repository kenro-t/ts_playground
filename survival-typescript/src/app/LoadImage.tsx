"use client";

import { useState, useEffect } from "react";

type Image = {
  url: string;
};

const LoadImage = ({url}:Image) => {
  const [imageUrl, setImageUrl] = useState(url);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImage().then((newImage) => {
      setImageUrl(newImage.url);
      setLoading(false);
    });
  }, []);

  const handleClick = async () => {
    setLoading(true);
    const newImage = await fetchImage();
    setImageUrl(newImage.url)
    setLoading(false);
  };

  return (
    <div>
      <button onClick={handleClick}>ほかのにゃんこもみる</button>
      {loading ? "読込中" : <img src={imageUrl} />}
    </div>
  );
};

const fetchImage = async (): Promise<Image> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const images = await res.json();
  console.log(images);
  return images[0];
};

export default LoadImage;
