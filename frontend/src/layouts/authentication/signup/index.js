import React, { useState } from 'react';
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
import { useNavigate } from "react-router-dom";
import { signup } from '../../../api';
import { FaUserAlt, FaLock } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [signupMessage, setSignupMessage] = useState(null);
  const [error, setError] = useState(null);

  const initialFormData = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signup(formData)
      .then((response) => {
        console.log(response.data);
        setFormData(initialFormData);
        setIsSubmitted(true);
        setSignupMessage("Signup successful!");
      })
      .catch((error) => {
        console.log(error.response.data);
        setError(error.response.data);
        setSignupMessage("Signup failed.");
      });
  };

  return (
    <div className="bgImage d-flex align-items-center justify-content-center">
      <Card className="vertical-card card-with-background">
        <CardHeader className="page-header text-center card-header">Sign up</CardHeader>
        <CardBody className="card-body">
        {error && <p>{error}</p>}
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="First Name" className="mb-1">
                First name
              </Label>
              {/* <FaUserAlt className="mr-2" /> */}
              <Input
                type="text"
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="Enter your first name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="username" className="mb-1">
                Last name
              </Label>
              {/* <FaUserAlt className="mr-2" /> */}
              <Input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Enter your last name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="username" className="mb-1">
                Email
              </Label>
              {/* <FaUserAlt className="mr-2" /> */}
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password" className="mb-0">
                {/* <FaLock className="mr-2" />  */}
                Password
              </Label>
              <Input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </FormGroup>
            <Button type="submit" color="primary" block className="mt-4">
              Sign up
            </Button>
            <div className="text-center mb-2 mt-2">
              <a className="link-text" href="/">
                Back to login
              </a>
            </div>
          </Form>
          
      {isSubmitted && <p>{signupMessage}</p>}
        </CardBody>
      </Card>
    </div>
  );
};

export default Signup;
