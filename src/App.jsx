import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Right from "./components/Right";
import Preloader from "./components/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="flex ">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="w-4/5">
        <Right />
      </div>
    </div>
  );
}

export default App;
