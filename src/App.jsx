import React from "react";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import KhHoroscope from "./components/KhHoroscope";
import { KhPredictionByDateOfBirth } from "./components/KhPredictionByDateOfBirth";

const App = () => {
  return (
    <div>
      <TopBar />
      <div className="max-w-screen-lg px-1 mx-auto py-3">
        <KhHoroscope />
        <KhPredictionByDateOfBirth />
      </div>
      <Footer />
    </div>
  );
};

export default App;
