import React from "react";
import { Signup } from "./components/signup-alert-dialog";

function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li>Signin</li>
          <Signup />
        </ul>
      </nav>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
