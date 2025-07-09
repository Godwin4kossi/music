import react from 'react'
import Hero from "./hero.tsx";
import Explore from "./explore.tsx"

import { useState } from "react";

import "./App.css";
import Nav from "./nav.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <div>
        <Hero />
        <Explore />
      </div>
    </>
  );
}

export default App;
