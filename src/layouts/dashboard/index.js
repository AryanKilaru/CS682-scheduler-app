import React from "react";
import { Card, CardHeader, CardBody, Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import Calendar from "./components/Calendar";

function Dashboard() {
    return (
    <div className="gradient-background d-flex align-items-center justify-content-center">
    <Card className="sidebar-card">
      {/* <CardHeader className="page-header text-center">Sign in</CardHeader> */}
      <CardBody>
        Sidebar
      </CardBody>
    </Card>
    <Card className="calendar-card">
      {/* <CardHeader className="page-header text-center">Sign in</CardHeader> */}
      <CardBody>
        <Calendar />
      </CardBody>
    </Card>
  </div>
  )
}

export default Dashboard;