import React, { useState } from "react";
import { AiTwotoneLike } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes +1);
    } 
    // else {
    //   setLikes(likes + 1);
    // }
    setIsClicked(!isClicked);
    setIsActive((light) => !light);
  };

  return (
    <button
      className={`like-button ${isClicked && "like"}`}
      onClick={handleClick}
    >
      <span className="likes-counter">
        <AiTwotoneLike size={50} />
        {/* <div>
          </div> */}
        <AiOutlineHeart
          style={{
            backgroundColor: isActive ? "salmon" : "",
            color: isActive ? "white" : "",
          }}
          size={50}
        />

        {`Times${likes}`}
      </span>
    </button>
  );
};

export default LikeButton;
