import { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Opencall from "./pages/Opencall";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import videosrc from "./assets/desktop.mp4";
import { gsap } from "gsap";
import "./App.css";

function App() {
  const [showOverlay, setShowOverlay] = useState(true);
  const mainRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          opacity: 0,
          duration: 1.5,
          ease: "power2.out",
          onComplete: () => {
            setShowOverlay(false);
            if (mainRef.current) {
              gsap.fromTo(
                mainRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 1.5, ease: "power2.out" }
              );
            }
          },
        });
      }
    }, 3000); // Delay to match video intro length
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-layout">
      {showOverlay && (
        <div className="video-overlay" ref={overlayRef}>
          <video
            className="bg-video"
            src={videosrc}
            autoPlay
            muted
            playsInline
          />
        </div>
      )}

      <div ref={mainRef} style={{ opacity: 0 }}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/Opencall" element={<Opencall />} />
              <Route path="/about" element={<About />} />
              <Route path="/events" element={<Events />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        </Router>
      </div>
    </div>
  );
}

export default App;
