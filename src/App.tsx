import React from "react";
import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import Homes from "./components/Homes/Homes";
import Realtors from "./components/Realtors/Realtors";
import Story from "./components/Story/Story";
import Features from "./components/Features/Features";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <div className={classes.Container}>
      <Header />
      <Sidebar />
      <Realtors />
      <Features />
      <Story />
      <Homes />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
