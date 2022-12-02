import React from "react";
// import Entry from "./components/pages/Entry.page";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { DefaultLayout } from "./layout/Default.layout";
// import { DashboardPage } from "./components/pages/dashboard/Dashboard.page";
// import { AddTicket } from "./components/pages/new-ticket/Add-newticket";
import { Ticketlistpage } from "./components/pages/ticket-list/Ticketlist.page";

export default function App() {
  return (
    <div className="App">
      {/* <Entry></Entry> */}
      <DefaultLayout>
        {/* <DashboardPage /> */}
        {/* <AddTicket /> */}

        <Ticketlistpage />
      </DefaultLayout>
    </div>
  );
}
