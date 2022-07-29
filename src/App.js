import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homePage/index";
import { Login } from "./pages/login";
import { Profile } from "./pages/profile";
import { Question } from "./pages/question";
import { AuthContextComponent } from "./context/authContext";
import { SearchUser } from "./pages/userProfile";
import { EditProfile } from "./pages/editProfile";
import { ProtectedRoute } from "./components/protectedRoute";

import "./index.css";
function App() {
  return (
    <AuthContextComponent>
      <div className="entirebg1 h-[100%]">
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/feed" element={<HomePage />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route
            path="/profile"
            element={<ProtectedRoute component={Profile} />}
          />
          <Route path="/question/:id" element={<Question />} />
          <Route path="/:profileId" element={<SearchUser />} />
        </Routes>
      </div>
    </AuthContextComponent>
  );
}

export default App;
