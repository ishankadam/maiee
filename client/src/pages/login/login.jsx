import { Button, Card, Link, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import login from "../../assets/discover.jpeg";
import { useNavigate } from "react-router-dom";
import Textfield from "../../components/textfield/textfield";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (user.username.trim().length < 1 || user.password.trim().length < 1) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [user]);

  const handleEdit = (value, field) => {
    setUser((prev) => ({ ...prev, [field]: value }));
  };

  const handleLogin = () => {
    if (user.username === "ishan" && user.password === "Ishan@123") {
      navigate("/dashboard");
    }
  };

  return (
    <Card
      sx={{
        display: "flex",
        height: "70%",
        width: "70%",
        justifyContent: "center",
        alignItems: "center",
        margin: "30px",
      }}
    >
      {/* Image Section */}
      <div
        style={{
          flex: 1,
          maxWidth: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          key={`login-Thumbnail`}
          src={login}
          alt={`login-Thumbnail`}
          style={{
            width: "400px",
            height: "600px",
            borderRadius: "2%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Form Section */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "20px",
          maxWidth: "50%",
        }}
      >
        <Typography variant="body1" sx={{ marginBottom: "20px" }}>
          LOGIN TO YOUR ACCOUNT
        </Typography>
        <Typography
          variant="h4"
          sx={{
            marginBottom: "20px",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "left",
          }}
        >
          WELCOME BACK!
        </Typography>
        <Textfield
          label="Username"
          config={{ field: "username" }}
          sx={{ marginTop: "20px" }}
          handleEdit={handleEdit}
        />
        <Textfield
          label="Password"
          config={{ field: "password" }}
          sx={{ marginTop: "20px", marginBottom: "10px" }}
          handleEdit={handleEdit}
        />

        <Button
          color="success"
          variant="contained"
          sx={{ marginTop: "20px", marginBottom: "10px" }}
          disabled={buttonDisabled}
          onClick={handleLogin}
        >
          LOGIN
        </Button>
        <Link href="#" sx={{ marginBottom: "20px" }}>
          Forgot Password?
        </Link>
      </div>
    </Card>
  );
};

export default Login;
