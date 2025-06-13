import { useState, useEffect, useRef } from "react";
import Sidebar from "./components/Sidebar";
import Right from "./components/Right";
import Preloader from "./components/Preloader";
import SidebarSmall from "./components/SidebarSmall";
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
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="flex">
      <div className="w-1/5 max-lg:hidden">
        <Sidebar />
      </div>

      {/* Hamburger icon button fixed at top left corner, visible only on small screens */}
      <button
        ref={buttonRef}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md text-white bg-[#040b14] hover:bg-[#149ddd] transition-colors duration-300"
        aria-label="Toggle sidebar"
      >
        <FaBars size={24} />
      </button>

      {/* Conditionally render SidebarSmall only if isSidebarOpen is true */}
      {isSidebarOpen && (
        <div ref={sidebarRef} className="fixed top-0 left-0 z-40">
          <SidebarSmall onCloseSidebar={() => setIsSidebarOpen(false)} />
        </div>
      )}

      <div className="w-4/5">
        <Right />
      </div>
    </div>
  );
}

export default App;
