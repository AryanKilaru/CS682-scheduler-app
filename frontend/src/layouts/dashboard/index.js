import React from "react";
// import {  } from 'reactstrap';
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
  Nav,
  NavbarBrand,
} from "reactstrap";
import Calendar from "./components/Calendar";
import { useNavigate } from 'react-router-dom';
import Sidebar from "../taskAssignment/component/Sidebar";

function Dashboard() {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signup');
  }

  const handleLogout = () => {
    navigate('/');
  }


  return (
    <>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Scheduler App</NavbarBrand>
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#">Scheduled</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/tasks">Tasks</NavLink>
            </NavItem>
          </Nav>
          <Nav navbar className="ml-auto">
            <NavItem>
              <Button color="primary" onClick={handleLogout}>Logout</Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      {/* <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#">Scheduler App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#">Profile</Nav.Link>
            <Nav.Link href="#">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
      <div className="gradient-background d-flex align-items-center justify-content-center">
        {/* <Card className="sidebar-card"> */}
        {/* <Sidebar /> */}
        {/* <CardHeader className="page-header text-center">Sign in</CardHeader>
      <CardBody>
        Sidebar
      </CardBody>
    </Card> */}
        <Card className="calendar-card">
          {/* <CardHeader className="page-header text-center">Sign in</CardHeader> */}
          <CardBody>
            <Calendar />
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default Dashboard;
