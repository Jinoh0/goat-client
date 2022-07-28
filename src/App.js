import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homePage/index";
import { Login } from "./pages/login";
import { Profile } from "./pages/profile";
import { UserProfile } from "./pages/userProfile";
import { Question } from "./pages/question";
import { AuthContextComponent } from "./context/authContext";
import { SearchUser } from "./pages/userProfile";
import { EditProfile } from "./components/editProfileForm";
import { ProtectedRoute } from "./components/protectedRoute";

import "./index.css";
function App() {
  return (
    <AuthContextComponent>
      <Routes>
        <Route path="/feed" element={<HomePage />} />
        <Route path="/" element={<Login />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route
          path="/profile"
          element={<ProtectedRoute component={Profile} />}
        />
        {/* <Route path="/profile/:profileId" element={<UserProfile />} /> */}
        <Route path="/question/:id" element={<Question />} />
        <Route path="/:profileId" element={<SearchUser />} />
      </Routes>
    </AuthContextComponent>
  );
}

export default App;
