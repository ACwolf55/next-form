import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "./Header";

export default function Home1(props) {
  const router = useRouter();

  //STATE
  const [user, setUser] = useState("");

  useEffect(() => {
    let email = sessionStorage.getItem("email");

    let str = emailChop(email);
    setUser(str);
    console.log(user);
  });

  const emailChop = (email) => {
    let emailAr = email.split("");
    console.log(emailAr);
    let chop = emailAr.findIndex((char) => char == "@");
    let len = emailAr.length - chop;
    emailAr.splice(chop, len, " !");
    let str = emailAr.join("");
    return str;
  };

  const Logout = () => {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("password");
    router.back();
  };

  //RENDER
  return (
    <div className="page">
      <div className="component">
        <Header />

        <div className="Welcome">
          <div className="welcome">
            <h2>Welcome</h2>
            <h2> {user} </h2>
          </div>
        </div>
        <div className="homeLower">
          <hr></hr>
          <button className="login-reg-button" onClick={Logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
