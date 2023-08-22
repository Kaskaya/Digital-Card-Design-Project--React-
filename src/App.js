import "./App.css";
import Main from "./components/Main";
import Person from "./images/person.png";
import Header from "./components/Header";
import Button from "./components/Button";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <img src={Person} />
      <Header />
      <Button />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
