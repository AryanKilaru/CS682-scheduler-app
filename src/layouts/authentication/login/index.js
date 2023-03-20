import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {

    const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signup');
  }

  const handleSignIn = () => {
    navigate('/dashboard');
  }

    return (
      <div className="gradient-background d-flex align-items-center justify-content-center">
        <Card className="vertical-card">
          <CardHeader className="page-header text-center">Sign in</CardHeader>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="username" className="mb-1">
                   Username
                </Label>
                {/* <FaUserAlt className="mr-2" /> */}
                <Input type="text" name="username" id="username" placeholder="Enter your username" />
              </FormGroup>
              <FormGroup>
                <Label for="password" className="mb-1">
                  {/* <FaLock className="mr-2" />  */}
                  Password
                </Label>
                <Input type="password" name="password" id="password" placeholder="Enter your password" />
                <div className="text-right mt-2">
                  <a className="link-text" href="/forgot-password">Forgot password?</a>
                </div>
              </FormGroup>
              <Button color="primary" block className="mt-4" onClick={handleSignIn}>
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