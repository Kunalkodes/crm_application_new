import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Proptypes from "prop-types";

export const LoginComponent = ({
  handleOnChange,
  handleOnSubmit,
  formSwitcher,
  email,
  password
}) => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2>Client Login</h2>
            <hr />
            <Form autocomplete="off" onSubmit={handleOnSubmit}>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  placeholder="enter email_id"
                  name="email"
                  type="email"
                  value={email}
                  onChange={handleOnChange}
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  placeholder="enter password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={handleOnChange}
                  required
                />
              </Form.Group>
              <hr />
              <Button type="submit">Login</Button>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col>
            <a href="#!" onClick={() => formSwitcher("rest")}>
              forgot password ?
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

LoginComponent.proptypes = {
  handleOnChange: Proptypes.func.isRequired,
  handleOnSubmit: Proptypes.func.isRequired,
  formSwitcher: Proptypes.func.isRequired,
  email: Proptypes.string.isRequired,
  password: Proptypes.string.isRequired
};
