import { useState } from "react";

const max = 200;
const min = 80;
const init_likes = Math.floor(Math.random() * (max - min) + min);

export const useCallToAction = () => {
  const [likes, setLikes] = useState(init_likes);
  let onClick = () => {
    setLikes((prev) => prev + 1);
  };

  return { onClick, likes };
};
