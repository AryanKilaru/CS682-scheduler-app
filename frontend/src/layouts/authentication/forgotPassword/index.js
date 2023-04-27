import React from 'react';
import { Card, CardHeader, CardBody, Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function forgotPassword() {
    return (
      <div className="bgImage d-flex align-items-center justify-content-center">
        <Card className="vertical-card card-with-background">
          <CardHeader className="page-header text-center card-head">Forgot Password</CardHeader>
          <CardBody className="card-body">
            <Form>
              <FormGroup>
                <Label for="username" className="mb-1">
                   Email
                </Label>
                {/* <FaUserAlt className="mr-2" /> */}
                <Input type="text" name="username" id="username" placeholder="Enter your username" />
              </FormGroup>
              {/* <FormGroup> */}
                {/* <Label for="password" className="mb-0"> */}
                  {/* <FaLock className="mr-2" />  */}
                  {/* Password
                </Label>
                <Input type="password" name="password" id="password" placeholder="Enter your password" /> */}
                {/* <div className="text-right">
                  <a href="#">Forgot password?</a>
                </div> */}
              {/* </FormGroup> */}
              <Button color="primary" block className="mt-4">
                Send Email
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

export default forgotPassword;