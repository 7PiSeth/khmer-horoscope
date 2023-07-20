import React from "react";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Container from "./components/Container";
import { HoroscopeByDateOfBirth } from "./components/HoroscopeByDateOfBirth";

const App = () => {
  return (
    <div>
      <TopBar />
      <div className="max-w-screen-lg px-1 mx-auto sm:py-7 py-3">
        {/* <Container /> */}
        <HoroscopeByDateOfBirth />
      </div>
      <Footer />
    </div>
  );
};

export default App;
