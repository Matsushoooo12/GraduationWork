import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const logOut = () => {
    signOut(auth).catch((err) => alert(err.message));
    navigate("/top");
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={logOut}>ログアウト</button>
    </div>
  );
};

export default Home;
