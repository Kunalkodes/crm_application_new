import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Proptypes from "prop-types";

export const PasswordReset = ({
  handleOnChange,
  handleOnResetSubmit,
  formSwitcher,
  email,
  password
}) => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2>Reset Password</h2>
            <hr />
            <Form autocomplete="off" onSubmit={handleOnResetSubmit}>
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
              <Button type="submit">Reset Password</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

PasswordReset.proptypes = {
  handleOnChange: Proptypes.func.isRequired,
  handleOnResetSubmit: Proptypes.func.isRequired,
  formSwitcher: Proptypes.func.isRequired,
  email: Proptypes.string.isRequired,
  password: Proptypes.string.isRequired
};
