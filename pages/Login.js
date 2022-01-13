import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "./Header";

export default function Home() {
  const router = useRouter();

  //STATE
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //FUNCTIONS
  useEffect(() => {
    console.log(email, password);
  });

  const handleEmail = (e) => {
    console.log(email);
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    console.log(password);
    setPassword(e.target.value);
  };

  const buttonRoute = () => {
    if (!email.includes("@") || email.length < 3) {
      alert("Enter valid Email");
    } else if (password.length < 2) {
      alert("Enter a Password");
    } else {
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("password", password);
      router.push("/Home");
    }
  };

  //RENDER
  return (
    <div className="page">
      <div className="component">
        <Header />

        <div className="form-container">
          <div className="login-input">
            <input
              className="password-email-input"
              onChange={(e) => handleEmail(e)}
              placeholder="Email"
              type="email"
            ></input>
            <input
              className="password-email-input"
              onChange={(e) => handlePassword(e)}
              placeholder="Password"
              type="password"
            ></input>
            <button className="login-reg-button" onClick={buttonRoute}>
              Login
            </button>
          </div>
          <hr></hr>

          <button className="login-reg-button" onClick={buttonRoute}>
            {" "}
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
