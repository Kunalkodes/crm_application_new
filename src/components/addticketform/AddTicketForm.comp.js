import React from "react";
import { Form, Button, Jumbotron, Row, Col } from "react-bootstrap";
import Proptypes from "prop-types";

export const AddTform = ({ handleOnChange, handleOnSubmit, formdata }) => {
  console.log(formdata);
  return (
    <Jumbotron>
      <h2 className="text-center ">Add New Ticket</h2>
      <hr />
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject :
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              name="subject"
              value={formdata.subject}
              placeholder="enter here"
              onChange={handleOnChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Date :
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="date"
              value={formdata.date}
              onChange={handleOnChange}
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Description :</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            rows="5"
            onChange={handleOnChange}
            value={formdata.description}
          />
        </Form.Group>
        <Button type="submit" variant="dark" block>
          {" "}
          Press to Submit{" "}
        </Button>
      </Form>
    </Jumbotron>
  );
};

AddTform.Proptypes = {
  handleOnChange: Proptypes.func.isRequired,
  handleOnSubmit: Proptypes.func.isRequired,
  formdata: Proptypes.object.isRequired
};
