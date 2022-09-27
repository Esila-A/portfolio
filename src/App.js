import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/header";
import Work from "./components/work";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";


function App() {

  // SCROLL PARALLAX //
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  const [centerX, setCenterX] = useState(0);
  const [centerY, setCenterY] = useState(0);


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setCenterX(window.innerWidth / 2);
    setCenterY(window.innerHeight / 2);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // MOUSE PARALLAX //
  document.addEventListener("mousemove" , parallax);
  document.addEventListener("scroll" , parallax);
  function parallax(e){
    this.querySelectorAll(".app_background").forEach((element) => {
      const speed = element.getAttribute("data-speed");
      const x = e.clientX * speed/150;
      const y = centerY - e.clientY;
      if (y) {
        element.style.backgroundPositionY = `${(offsetY * speed/10) + y/100}px`;
        element.style.backgroundPositionX = `-${x * speed * 0.3}px`;
      }
      
    });
  }

  return (
    <div className="app">
      <div
        className="app_background app_background--closest"
        style={{ backgroundPositionY: `${offsetY * 0.3}px` }}
        data-speed="3"
      />
      <div
        className="app_background app_background--middle"
        style={{ backgroundPositionY: `${offsetY * 0.2}px` }}
        data-speed="2"
      />
      <div
        className="app_background app_background--furthest"
        style={{ backgroundPositionY: `${offsetY * 0.1}px` }}
        data-speed="1"
      />

      <div className="app_components">
        <Header />
        <Routes>
          <Route path="/" element={<Work />} className="home-path"/>
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