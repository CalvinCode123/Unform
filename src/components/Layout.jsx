import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="app-wrapper">
      <div className="app-layout">
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
