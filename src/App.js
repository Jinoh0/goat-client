import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homePage/index";
import { Login } from "./pages/login";
import { EditProfile } from "./pages/editProfile";
import { Profile } from "./pages/profile";
import { UserProfile } from "./pages/userProfile";
import { Question } from "./pages/question";
import "./index.css";
function App() {
  return (
    <Routes>
      <Route path="/feed" element={<HomePage />} />
      {/* <Route path="/" element={<Login />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/:profileId" element={<UserProfile />} />
      <Route path="/question/:questionId" element={<Question />} /> */}
      <Route path="/question/:questionId" element={<Question />} />
    </Routes>
  );
}

export default App;
