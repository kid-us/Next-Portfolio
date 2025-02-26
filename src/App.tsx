import "./App.css";
import Navbar from "./components/Navbar";
import Window from "./components/Window";

function App() {
  return (
    <div className="h-[100dvh] bg-nav-bg p-2">
      <header className="header-main">
        <Navbar />
      </header>

      <div className="h-[98dvh] bg-background rounded-2xl overflow-y-auto">
        <div className="h-[300vh]">
          <Window />
        </div>
      </div>
    </div>
  );
}

export default App;
