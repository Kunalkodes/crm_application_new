import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { TicketTable } from "../../../components/ticket-table/Ticket.table.js";
import tickets from "../../../assets/data/dummy-tickets.json";

export const DashboardPage = () => {
  console.log(tickets);
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <Button
            variant="dark"
            style={{ "font-size": "2 rem", padding: "10px 30px" }}
          >
            Add New Ticket
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center my-2">
          <div>Total tickets : 50</div>
          <div>Pending tickets :5</div>
        </Col>
      </Row>

      <Row>
        <Col className=" my-2">Recently Added Tickets</Col>
      </Row>
      <Row>
        <Col className=" my-2">
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};
