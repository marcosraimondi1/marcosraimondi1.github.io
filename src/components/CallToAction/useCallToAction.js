import { useState } from "react";

export const useCallToAction = () => {
  const max = 200;
  const min = 80;
  const [likes, setLikes] = useState(
    Math.floor(Math.random() * (max - min) + min)
  );
  let onClick = () => {
    setLikes((prev) => prev + 1);
  };

  return { onClick, likes };
};
