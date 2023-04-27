import React, { useState } from "react";
import {
    Container,
    Nav,
    NavLink,
  } from "reactstrap";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { logout, tasks_view } from "../../api";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {

    const navigate = useNavigate();
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
    <div>
      <header className="bg-dark py-3">
        <Container className="d-flex justify-content-between align-items-center">
          <div>
            <h1 className="text-white">Schedule</h1>
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
    </div>
)}

export default Header;
