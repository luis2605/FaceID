import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import classes from "./signin.module.css";

const Singin = ({ onSigninBtn }) => {
  return (
    <div className={classes["signin-container"]}>
      <Form>
        <h1 className={classes["signin-title"]}> Sign In</h1>
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
          <Button variant="secondary" type="submit">
            Register
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Singin;
