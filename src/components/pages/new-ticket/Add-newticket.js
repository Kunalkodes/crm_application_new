import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AddTform } from "../../addticketform/AddTicketForm.comp";
export const AddTicket = () => {
  const initialFormdata = {
    subject: "",
    date: "",
    description: ""
  };

  const [formdata, setFormdata] = useState(initialFormdata);

  useEffect(() => {}, [formdata]);

  const handleOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    console.log("form submit request received");
  };

  return (
    <Container>
      <Row>
        <Col>
          {/* <PageBreadcrum/> */}
          the breadcrum goes here....
        </Col>
      </Row>

      <Row>
        <Col>
          <AddTform
            handleOnChange={handleOnChange}
            formdata={formdata}
            handleOnSubmit={handleOnSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
};
