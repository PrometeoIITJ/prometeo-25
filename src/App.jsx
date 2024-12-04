import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";

import { AuthProvider } from "./context/AuthContext.jsx";

import Navbar from "./components/Navbar";
import Sponsors from "./pages/Sponsors.jsx";
import Speakers from "./pages/Speakers.jsx";
import Team from "./pages/Team.jsx";
import Team23 from "./pages/Team23.jsx";
import NotFound from "./pages/NotFound";
import Preregister from "./pages/pre_registration";
import Theme from "./pages/Theme.jsx";
import CA from "./pages/CA.jsx";
import Events from "./pages/Events.jsx";
import Gallery from "./pages/gallery.jsx";
import Accomodation from "./pages/accomodation";
import Register from "./pages/Register.jsx";
import Darbar from "./pages/flagship/darbar.jsx";
import Dashboard from "./components/dashboard.jsx";
import PrivateRoute from "./context/PrivateRoute";
import PreregiClosed from "./pages/PreregiClosed.jsx";
import Workshop from "./pages/Workshop.jsx";
import Edit_profile from "./pages/Edit_profile.jsx";
import Informals from "./pages/informals.jsx";
import Home from "./pages/Home.jsx";
import smallLogo from "../src/assets/logo.gif";
import image from "../src/assets/image.png";
import { PlayProvider } from "./components/landing/Play.jsx";
function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Navbar /> 
          <Link to={'/'} >
            <img
              className="home-img"
              src={smallLogo}
              style={{zIndex:100}}
              alt="click to go home"
              onClick={() => handleNavClick()}
            />
            <img
        className="title-image"
        src={image}
        style={{zIndex:100}}
        alt="Prometeo '25"
        onClick={() => handleNavClick()}
      />
          </Link>
          <Routes>
            <Route path="/" element={<PlayProvider> <Home/> </PlayProvider>} />
            <Route path="/ca" element={<CA />} />
            <Route path="/past-speakers" element={<Speakers />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/closed" element={<PreregiClosed />} />
            <Route path="/team" element={<Team />} />
            <Route path="/team23" element={<Team23 />} />
            <Route path="/theme" element={<Theme />} />
            <Route path="/events" element={<Events />} />
            <Route path="/ca" element={<CA />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/preregister" element={<Preregister />} />
            <Route path="/register" element={<Register />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/accommodation" element={<Accomodation />} />
            <Route path="/workshop" element={<Workshop />} />
            <Route path="/informals" element={<Informals />} />
            <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="/edit-profile" element={<Edit_profile />} />
            <Route path="/business-darbar" element={<Darbar />} />
          </Routes>
          <Toaster />
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
