import "./App.css";
import Login from "./pages/login/login";
import theme from "../src/theme/maieeTheme";
import Signup from "./pages/signup/signup";
import Home from "./pages/home/home";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/products/products";
import AboutUs from "./pages/about-us/aboutUs";
import ContactUs from "./pages/contact-us/contactUs";
import CustomAppbar from "./components/appbar/customAppbar";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CustomAppbar></CustomAppbar>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          {/* <Route exact path="/jobs/createjob" element={<JobForm />} /> */}
          <Route exact path="/home" element={<Home></Home>} />
          <Route exact path="/product" element={<Products></Products>} />
          <Route exact path="/aboutus" element={<AboutUs></AboutUs>} />
          <Route exact path="/contactus" element={<ContactUs></ContactUs>} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
