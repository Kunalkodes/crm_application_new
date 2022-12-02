import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import { LoginComponent } from "../../components/login/Login.comp";
import { PasswordReset } from "../../components/password-reset/Password.reset";
import "./Entry.style.css";

function Entry() {
  const [email, setEmail] = useState(" ");
  const [pass, setPass] = useState(" ");
  const [formState, setformState] = useState("login");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "pass":
        setPass(value);
        break;
      default:
        break;
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!email || !pass) {
      return alert("fill up the form");
    }
  };
  const handleOnResetSubmit = (e) => {
    e.preventDefault();
    if (!email || !pass) {
      return alert("fill up the Reset form");
    }
  };

  const formSwitcher = (e) => {
    setformState(e);
  };

  return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box">
        {formState === "login" && (
          <LoginComponent
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            formSwitcher={formSwitcher}
            email={email}
            pass={pass}
          />
        )}

        {formState === "rest" && (
          <PasswordReset
            handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher={formSwitcher}
            email={email}
            pass={pass}
          />
        )}
      </Jumbotron>
    </div>
  );
}

export default Entry;
