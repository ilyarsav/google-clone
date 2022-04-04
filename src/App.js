import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchLinks from "./components/SearchLinks";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import { ResultContextProvider } from "./context/ResultContextProvider";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <ResultContextProvider>
      <Router>
        <div className={darkTheme ? "dark" : ""}>
          <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
            <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
            <SearchLinks />
            <Footer />
          </div>
        </div>
      </Router>
    </ResultContextProvider>
  );
};

export default App;
