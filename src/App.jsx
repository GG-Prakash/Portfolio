import Sidebar from "./components/Sidebar"
import Right from "./components/Right"
import Preloader from "./components/Preloader"

function App() {
  return (
    <>
    <Preloader />
      <div className="flex ">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className="w-4/5">
          <Right />
        </div>
      </div>
    </>
  )
}

export default App
