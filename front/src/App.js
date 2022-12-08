import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoomSetting from "./RoomSetting/RoomSetting";
import UserSetting from "./chatting/UserSetting";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RoomSetting />} />
          <Route path="/usersetting" element={<UserSetting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
