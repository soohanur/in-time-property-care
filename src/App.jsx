import { Outlet } from "react-router-dom";
import useLenis from "./hooks/useLenis";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import Preloader from "./components/Preloader";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  useLenis();
  return (
    <div className="relative overflow-x-hidden">
      <Preloader />
      <Cursor />
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
