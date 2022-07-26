import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homePage/index";
import { Login } from "./pages/login";
import { EditProfile } from "./pages/editProfile";
import { Profile } from "./pages/profile";
import { UserProfile } from "./pages/userProfile";
import { Question } from "./pages/question";
import { AuthContextComponent } from "./context/authContext";

import { ProtectedRoute } from "./components/protectedRoute";

import "./index.css";
function App() {
  return (

    <AuthContextComponent>    
      <Routes>
        <Route path="/feed" element={<HomePage />} />
        <Route path="/" element={<Login />} />
        {/* <Route path="/edit-profile" element={<EditProfile />} /> */}
        <Route
          path="/profile"
          element={<ProtectedRoute component={Profile} />}
        />
        {/* <Route path="/profile/:profileId" element={<UserProfile />} /> */}
         <Route path="/question/:questionId" element={<Question />} /> 
      </Routes>
    </AuthContextComponent>

  );
}

export default App;
