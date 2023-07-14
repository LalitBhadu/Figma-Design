import React from "react";
import Navbar from "./Navbar";
import Layout from "./Layout";
import Service from "./Service";
import Clients from "./Clients";
import Doubts from "./Doubts";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Layout />
      <Service />
      <Clients />
      <Doubts />
      <Footer />
    </>
  );
}

export default Home;
