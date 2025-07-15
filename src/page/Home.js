import React from "react";
import { useNavigate } from "react-router-dom";
import Post from "./Post";

function Home(props) {
  const navigate = useNavigate();

  function moveAbout() {
    navigate("/about");
  }

  return (
    <div>
      <Post/>
    </div>
  );
}

export default Home;