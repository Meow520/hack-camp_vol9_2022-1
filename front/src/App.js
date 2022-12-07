import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateRoom from "./components/CreateRoom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateRoom />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
