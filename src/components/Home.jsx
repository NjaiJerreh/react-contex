import { useContext } from "react";
import { UserContex } from "./Context/UserContex";
import LikeButton from "./LikeButton";

const Home = () => {
  const greets = useContext(UserContex);
  return (
    <div className="homecontainer">
      <div className="hometitle1">
        <h1>{greets}</h1>
        <h2>Welcome To Our Homepage</h2>
        <LikeButton />
      </div>
      <div className="hometitle2">
        <h1>{greets}</h1>
        <h2>Welcome To Our Homepage</h2>
        <LikeButton />
      </div>
      <div className="hometitle3">
        <h1>{greets}</h1>
        <h2>Welcome To Our Homepage</h2>
        <LikeButton />
      </div>
    </div>
  );
};

export default Home;
