import "./App.css";
import Header from "./assets/components/Header.jsx";
import Main from "./assets/components/Main.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}

export default App;
