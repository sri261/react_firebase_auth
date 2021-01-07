import React, { useContext } from "react";
import { firebaseAuth } from "../provider/AuthProvider";
import NewComp from "./NewComp";

const Home = (props) => {
  const { handleSignout } = useContext(firebaseAuth);
  //   const { signout } = useContext(firebaseAuth);

  return (
    <div>
      Home, login successful!!!!!!
      <NewComp />
      <button onClick={handleSignout}>sign out </button>
      {/* <button onClick={signout}>sign out </button> */}
    </div>
  );
};

export default Home;
