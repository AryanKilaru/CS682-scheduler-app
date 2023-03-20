import React from 'react';
import { Card, CardHeader, CardBody, Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function signup() {
    return (
      <div className="gradient-background d-flex align-items-center justify-content-center">
        <Card className="vertical-card">
          <CardHeader className="page-header text-center">Sign up</CardHeader>
          <CardBody>
            <Form>
            <FormGroup>
                <Label for="First Name" className="mb-1">
                   First name
                </Label>
                {/* <FaUserAlt className="mr-2" /> */}
                <Input type="text" name="username" id="username" placeholder="Enter your first name" />
              </FormGroup>
            <FormGroup>
                <Label for="username" className="mb-1">
                   Last name
                </Label>
                {/* <FaUserAlt className="mr-2" /> */}
                <Input type="text" name="username" id="username" placeholder="Enter your last name" />
              </FormGroup>
              <FormGroup>
                <Label for="username" className="mb-1">
                   Email
                </Label>
                {/* <FaUserAlt className="mr-2" /> */}
                <Input type="text" name="username" id="username" placeholder="Enter your email" />
              </FormGroup>
              <FormGroup>
                <Label for="password" className="mb-0">
                  {/* <FaLock className="mr-2" />  */}
                  Password
                </Label>
                <Input type="password" name="password" id="password" placeholder="Enter your password" />
              </FormGroup>
              <Button color="primary" block className="mt-4">
                Sign up
              </Button>
              <div className="text-center mb-2 mt-2">
                  <a className="link-text" href="/">Back to login</a>
                </div>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }

export default signup;