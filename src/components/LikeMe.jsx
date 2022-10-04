import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
const LikeMe = () => {
  const [count, setCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(isClicked=> !isClicked);
    setCount(count + 1);
  };
  return (
    <div className="likemeContainer">
      <button
        className={`like-button ${isClicked && "" }`}
        onClick={() => handleClick({})}
      >
        {count}
        <AiOutlineHeart
          style={{
            backgroundColor: isClicked ? "salmon" : "",
            color: !isClicked ? "blue" : "",
          }}
          size={50}
        />
      </button>
      {/* {isClicked && 
        
      } */}
      <AiOutlineHeart />
    </div>
  );
};

export default LikeMe;
