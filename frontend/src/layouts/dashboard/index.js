import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  Nav,
  NavLink,
} from "reactstrap";
import { PieChart, pieChartDefaultProps } from "react-minimal-pie-chart";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DataTable from "./components/DataTable";
import { useNavigate } from "react-router-dom";
import { logout } from "../../api";
import DateAndTodoList from "./components/DateAndTodoList";

const Dashboard = () => {
  const navigate = useNavigate();
  const defaultLabelStyle = {
    fontSize: "5px",
    fontFamily: "sans-serif",
  };

  const shiftSize = 7;

  const handleLogout = async () => {
    logout()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <div className="gradient-background">
      <header className="bg-dark py-3">
        <Container className="d-flex justify-content-between align-items-center">
          <div>
            <h1 className="text-white">Dashboard</h1>
            <Nav className="nav">
              <NavLink href="/dashboard" className="nav-link text-white">
                Home
              </NavLink>
              <NavLink href="/tasks" className="nav-link text-white">
                Tasks
              </NavLink>
              <NavLink href="/schedule" className="nav-link text-white">
                Schedule
              </NavLink>
            </Nav>
          </div>
          <Button color="primary" onClick={handleLogout}>
            Logout
          </Button>
        </Container>
      </header>

      <main>
        <Container className="my-4">
          <Row className="fixed-height-dashboard-upper-cards">
            <Col md={6} className="mb-4">
              <Card className="my-card pie-chart-progress">
                <CardTitle tag="h5" className="p-3">
                  Progress Chart
                </CardTitle>
                <CardText className="p-3">
                  <PieChart
                    data={[
                      { title: "Completed", value: 10, color: "#E38627" },
                      { title: "In Progress", value: 15, color: "#C13C37" },
                      { title: "Not yet Started", value: 20, color: "#6A2135" },
                    ]}
                    radius={pieChartDefaultProps.radius - shiftSize}
                    segmentsShift={(index) => (index === 0 ? shiftSize : 0.5)}
                    label={({ dataEntry }) => dataEntry.value}
                    style={{ height: "200px" }}
                    labelStyle={{ ...defaultLabelStyle }}
                  />
                  ;
                </CardText>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="my-card calendar-schedule">
                <CardText className="p-3">
                  <DateAndTodoList />
                </CardText>
              </Card>
            </Col>
          </Row>
          <Row className="mt-4 mb-0">
            <Col md={4}>
              <Card className="my-card middle-order-card">
                <CardTitle tag="h5" className="p-3">
                  Active Tasks
                </CardTitle>
                <CardText className="p-3 card-text-number">6</CardText>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="my-card middle-order-card middle-center">
                <CardTitle tag="h5" className="p-3">
                  Tasks due this week
                </CardTitle>
                <CardText className="p-3 card-text-number">5</CardText>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="my-card middle-order-card middle-right">
                <CardTitle tag="h5" className="p-3">
                Upcoming Meetings
                </CardTitle>
                <CardText className="p-3 card-text-number">8</CardText>
              </Card>
            </Col>
          </Row>
          <Row className="mt-0">
            <Col md={12}>
              <Card className="h-100 my-card">
                <CardTitle tag="h5" className="p-3">
                  Upcoming tasks
                </CardTitle>
                <CardText className="p-3">
                  <DataTable />
                </CardText>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
      <footer className="bg-dark py-3">
        <Container>
          <p className="text-white text-center">Copyright © 2023</p>
        </Container>
      </footer>
    </div>
  );
};

export default Dashboard;
