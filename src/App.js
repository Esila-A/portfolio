import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/header";
import Work from "./components/work";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";


function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <div
        className="app_background app_background--closest"
        style={{ backgroundPositionY: `${offsetY * 0.1}px` }}
      />
      <div
        className="app_background app_background--middle"
        style={{ backgroundPositionY: `${offsetY * 0.02}px` }}
      />
      <div
        className="app_background app_background--furthest"
        style={{ backgroundPositionY: `${offsetY * 0.1}px` }}
      />

      <div className="app_components">
        <Header />
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="work" element={<Work />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
