import React, { useState } from "react";
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
import { FaUserAlt, FaLock } from "react-icons/fa";
import { login } from "../../../api";
// import { useHistory } from 'react-router-dom';
// import jwtDecode from "jwt-decode";
import "bootstrap/dist/css/bootstrap.min.css";

function Login(props) {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
  };

  // const handleSignIn = () => {
  //   navigate('/dashboard');
  // }

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [errorMsg, setErrorMsg] = useState('');

  const history = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  // const [authenticate, setAuthenticate] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    login(formData)
      .then(() => {
        navigate('/dashboard');
        props.setAuthenticate(true);
      })
      .catch((error) => {
        console.log(error);
        setError(error.response.data);
      });
  };

  return (
    <div className="gradient-background d-flex align-items-center justify-content-center">
      <Card className="vertical-card">
        <CardHeader className="page-header text-center">Sign in</CardHeader>
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="username" className="mb-1">
                Username
              </Label>
              {/* <FaUserAlt className="mr-2" /> */}
              <Input
                 type="text"
                 id="username"
                 name="username"
                 value={formData.username}
                 onChange={handleChange}
                placeholder="Enter your username"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password" className="mb-1">
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
              <div className="text-right mt-2">
                <a className="link-text" href="/forgot-password">
                  Forgot password?
                </a>
              </div>
            </FormGroup>
            <Button type="submit" color="primary" block className="mt-4">
              Sign in
            </Button>
          </Form>
          <Button color="light" block className="mt-4" onClick={handleSignUp}>
            Sign up
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default Login;
