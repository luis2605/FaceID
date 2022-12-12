import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import classes from "./register.module.css";

const Register = ({ onSigninBtn, onRegisterBtn, OnFinishingRegisterBtn }) => {
  return (
    <div className={classes["register-container"]}>
      <Form>
        <h1 className={classes["register-title"]}> Sign In</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Namer</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
          <Form.Text className="text-muted">
            This personal information is secured according to the european DSGVO
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <div className={classes["btn-container"]}>
          <Button variant="dark" type="submit" onClick={onSigninBtn}>
            Sign in
          </Button>
          <Button
            variant="secondary"
            type="submit"
            onClick={OnFinishingRegisterBtn}
          >
            Register
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Register;
