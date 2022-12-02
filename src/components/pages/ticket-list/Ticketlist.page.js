import React, { useState, useEffect } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { Searchform } from "../../search-form/Search.form";
import { TicketTable } from "../../ticket-table/Ticket.table";
import tickets from "../../../assets/data/dummy-tickets.json";
import Proptypes, { checkPropTypes } from "prop-types";

export const Ticketlistpage = () => {
  const [str, setStr] = useState("");
  const [disp, setDisp] = useState(tickets);

  useEffect(() => {}, [str, setDisp]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
    searchTicket(value);
  };

  const searchTicket = (sttr) => {
    const display = tickets.filter((row) =>
      row.subject.toLowerCase().includes(sttr.toLowerCase())
    );
    setDisp(display);
  };

  return (
    <Container>
      <Row>
        <Col>space for breadcrumb:---</Col>
      </Row>
      <Row>
        <Col>
          <Button variant="dark">add new ticket</Button>
        </Col>
        <Col>
          <Searchform handleOnChange={handleOnChange} str={str} />
        </Col>
        <hr />
      </Row>

      <Row>
        <Col>
          <TicketTable tickets={disp} />
        </Col>
      </Row>
    </Container>
  );
};
