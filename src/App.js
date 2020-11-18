import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Amsterdam"/>
      <Footer />
    </div>
  );
}

export default App;
