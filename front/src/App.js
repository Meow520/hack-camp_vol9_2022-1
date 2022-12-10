import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoomSetting } from "./pages/RoomSetting";
import { Chat } from "./pages/Chat";
import { CompleteRoomSetting } from "./pages/CompleteRoomSetting";
import { UserSetting } from "./pages/UserSetting";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RoomSetting />} />
          <Route path="/complete" element={<CompleteRoomSetting />} />
          <Route path="/join/:id" element={<UserSetting />} />
          <Route path="/chat/:id" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
