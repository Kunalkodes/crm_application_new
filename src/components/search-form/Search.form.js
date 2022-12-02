import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import Proptypes from "prop-types";

export const Searchform = ({ handleOnChange, str }) => {
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column ms="2">
            Search:
          </Form.Label>
          <Col ms="10">
            <Form.Control
              placeholder="search..."
              onChange={handleOnChange}
              value={str}
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

Searchform.propTypes = {
  handleOnChange: Proptypes.func.isRequired,
  str: Proptypes.string.isRequired
};
