import { useState, useEffect, useRef } from "react";
import Sidebar from "./components/Sidebar";
import Right from "./components/Right";
import Preloader from "./components/Preloader";
import { FaBars } from "react-icons/fa";

function App() {
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsSidebarOpen(false);
      }
    }
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  if (loading) return <Preloader />;

  return (
    <div className="flex">
      {/* Sidebar for large screens */}
      <Sidebar />

      {/* Hamburger icon for small screens */}
      <button
        ref={buttonRef}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md text-white bg-[#040b14] hover:bg-[#149ddd] transition-colors duration-300"
        aria-label="Toggle sidebar"
      >
        <FaBars size={24} />
      </button>

      {/* Sidebar for small screens (overlay) */}
      {isSidebarOpen && (
        <div ref={sidebarRef}>
          <Sidebar isMobile onCloseSidebar={() => setIsSidebarOpen(false)} />
        </div>
      )}

      {/* Right section */}
      <div className="w-full lg:ml-[20%]">
        <Right />
      </div>
    </div>
  );
}

export default App;
