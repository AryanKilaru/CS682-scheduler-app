import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { tasks_create } from "../../api";

const CreateTaskModal = ({ isOpen, toggle }) => {
  const [taskName, setTaskName] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      task_name: taskName,
      employee_name: employeeName,
      start_date: startDate,
      end_date: endDate,
    };

    // Send the form data to the API using fetch or axios
    tasks_create(formData)
      // .then((response) => response.json())
      .then((data) => {
        console.log("Task created:", data);
        toggle(); // Close the modal
      })
      .catch((error) => {
        console.error("Error creating task:", error);
      });
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
      <Form onSubmit={handleSubmit}>
        <ModalBody>
          <FormGroup>
            <Label for="taskName">Task Name</Label>
            <Input
              type="text"
              name="taskName"
              id="taskName"
              value={taskName}
              onChange={(event) => setTaskName(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="employeeName">Employee Name</Label>
            <Input
              type="text"
              name="employeeName"
              id="employeeName"
              value={employeeName}
              onChange={(event) => setEmployeeName(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="startDate">Start Date</Label>
            <Input
              type="date"
              name="startDate"
              id="startDate"
              value={startDate}
              onChange={(event) => setStartDate(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="endDate">End Date</Label>
            <Input
              type="date"
              name="endDate"
              id="endDate"
              value={endDate}
              onChange={(event) => setEndDate(event.target.value)}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit">
            Create Task
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default CreateTaskModal;
