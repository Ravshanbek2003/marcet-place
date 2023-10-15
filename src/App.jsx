// import { useState } from 'react'
import "./App.css";
import Header from "./components/Header/Header";
import Container from "../src/components/Container";
import DiscoverDigital from "./components/DiscoverDigital/DiscoverDigital";
import Trending from "./components/Trending/Trending";
import TopCreators from "./components/TopCreators/TopCreators";
import Browse from "./components/Browse/Browse";
import Discover from "./components/Discover/Discover";
import Magic from "./components/Magic/Magic";
import Works from "./components/Works/Works";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <Container>
        <DiscoverDigital />
        <Trending />
        <TopCreators />
        <Browse />
        <Discover />
      </Container>
      <Magic />
      <Container>
        <Works />
        <Join />
        <Footer />
      </Container>
    </>
  );
}

export default App;
