import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateRoom from "./components/CreateRoom";
import UserSetting from "./components/UserSetting";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateRoom />} />
          <Route path="/usersetting" element={<UserSetting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
