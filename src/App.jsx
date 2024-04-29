import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileCard from "./Components/Profile/ProfileCard";
import Login from "./Components/Login_page/Login";
import Log from "./Components/Login_page/Log";
import UploadForm from "./Components/Upload/UploadForm";
import { AuthProvider } from "./Auth/AuthProvider";
import LayOut from "./Components/LayOut/LayOut";
import { Private } from "./Components/Private/Private";
import Qr from "./Components/QR/Qr";
import Showdata from "./Components/Admin/Showdata";
import AdminLog from "./Components/Admin/AdminLog";
function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LayOut />} />
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/loginFrom" element={<Log />} />
            <Route path="/uploadDoc" element={<UploadForm />} />
            <Route path="/qr" element={<Qr />} />
            <Route path="/profile" element={<ProfileCard />} />
            <Route path="/admin" element={<AdminLog />} />
            <Route path="/admin/show" element={<Showdata />} />
            <Route element={<Private />}>
            
            
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
