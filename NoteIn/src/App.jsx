import "./App.css";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="page-container">
      <Header />
      <SearchBar />
      <Footer />
    </div>
  );
}

export default App;
