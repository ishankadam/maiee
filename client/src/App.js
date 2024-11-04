// App.js
import { Route, Routes } from "react-router-dom";
import CustomAppbar from "./components/appbar/customAppbar";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Home from "./pages/home/home";
import Products from "./pages/products/products";
import AboutUs from "./pages/about-us/aboutUs";
import ContactUs from "./pages/contact-us/contactUs";
import Dashboard from "./pages/dashboard/dashboard";

function App() {
  return (
    <>
      <CustomAppbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
