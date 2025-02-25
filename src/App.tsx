import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-[100dvh] bg-nav-bg p-2">
      <header className="header-main">
        <Navbar />
      </header>

      <div className="h-[98dvh] bg-background rounded-2xl"></div>
    </div>
  );
}

export default App;
