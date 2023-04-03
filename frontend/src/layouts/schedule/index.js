import React from "react";
import { Container, Card, CardTitle, CardText, Nav, NavLink } from "reactstrap";
// import { PieChart, pieChartDefaultProps } from "react-minimal-pie-chart";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import DataTable from "./components/DataTable";
import { useNavigate } from "react-router-dom";
import { logout } from "../../api";
// import DateAndTodoList from "./components/DateAndTodoList";

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
        <Card className="h-100 my-card">
                <CardTitle tag="h5" className="p-3">
                  Schedule Table
                </CardTitle>
                <CardText className="p-3">
                  
                </CardText>
              </Card>
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
