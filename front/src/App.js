import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoomSetting from "./pages/RoomSetting";
import Chat from "./pages/Chat";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RoomSetting />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
