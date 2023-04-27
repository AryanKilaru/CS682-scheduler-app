import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { tasks_create, task_view, tasks_update } from "../../api";
import Switch from "@mui/material/Switch";

const EditTaskModal = ({ isOpen, toggle, id }) => {
  const [task, getTask] = useState("");
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [priority, setPriority] = useState("");
  const [isCompleted, setIsCompleted] = useState();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    viewSingleTask();
  }, []);

  const viewSingleTask = () => {
    console.log(id);
    task_view(id)
      .then((req) => {
        // console.log(req);
        const task = req.data;
        console.log("Initial State: " + task.is_completed);
        console.log("task");
        console.log(task);
        setTaskName(task.task_name);
        setEmployeeName(task.employee_name);
        setStartDate(task.start_date);
        setEndDate(task.end_date);
        setPriority(task.priority);
        setTaskDescription(task.task_description);
        setIsCompleted(task.is_completed);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Toggle the dropdown state
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleIsCompleted = () => {
    console.log("Before Toggle " + isCompleted);
    // setIsCompleted(!isCompleted);
    setIsCompleted(!isCompleted);
    console.log("After Toggle " + isCompleted);
  };

  // Handle changes to the priority dropdown
  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Before Submit:" + isCompleted);

    const formData = {
      task_name: taskName,
      employee_name: employeeName,
      start_date: startDate,
      end_date: endDate,
      priority: priority,
      task_description: taskDescription,
      is_completed: isCompleted,
    };

    // console.log(formData);

    tasks_update(formData, id)
      .then((response) => {
        console.log("Task updated:", response);
        toggle(); // Close the modal
      })
      .catch((error) => {
        console.error("Error updating task:", error);
      });
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Edit Task</ModalHeader>
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
            <Label for="taskDescription">Task Description</Label>
            <Input
              type="textarea"
              name="taskDescription"
              id="taskDescription"
              placeholder="Enter task description"
              value={taskDescription}
              onChange={(event) => setTaskDescription(event.target.value)}
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
          <FormGroup>
            <Label for="endDate">Is completed</Label>
            <Switch
              onChange={handleIsCompleted}
              label="Completed"
              checked={isCompleted}
            />
          </FormGroup>
          <FormGroup>
            <Label for="taskPriority">Task Priority</Label>
            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
              <DropdownToggle caret>
                {priority ? priority : "Select priority"}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem value="low" onClick={handlePriorityChange}>
                  Low
                </DropdownItem>
                <DropdownItem value="medium" onClick={handlePriorityChange}>
                  Medium
                </DropdownItem>
                <DropdownItem value="high" onClick={handlePriorityChange}>
                  High
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit">
            Save Task
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default EditTaskModal;
