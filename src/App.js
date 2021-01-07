import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Home from "./components/Home";
import "./App.css";
import { firebaseAuth } from "./provider/AuthProvider";
import NewComp from "./components/NewComp";

function App() {
  const { token } = useContext(firebaseAuth);
  console.log(token);
  return (
    <>
      {/* switch allows switching which components render.  */}
      <Switch>
        {/* route allows you to render by url path */}

        <Route
          exact
          path="/"
          render={(rProps) => (token === null ? <Signin /> : <Home />)}
        />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </>
  );
}

export default App;
// ============================================================================================
// import "./App.css";
// import React, { useContext } from "react";
// import { firebaseAuth } from "./provider/AuthProvider";
// import { Route, Switch } from "react-router-dom";
// import Signup from "./components/Signup";
// import Signin from "./components/Signin";
// import Home from "./components/Home";
// function App() {
//   const { handleSignup } = useContext(firebaseAuth);

//   return (
//     <>
//       {/* switch allows switching which components render.  */}
//       <Switch>
//         {/* route allows you to render by url path */}
//         <Route exact path="/" component={Signup} />
//       </Switch>
//     </>
//   );
// }

// export default App;
