import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { tasks_create, tasks_update, task_view } from "../../api";

const DeleteTaskModal = ({ isOpen, toggle, id }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [priority, setPriority] = useState('');
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
        console.log("task");
        console.log(task);
        setTaskName(task.task_name);
        setTaskDescription(task.task_description);
        setEmployeeName(task.employee_name);
        setStartDate(task.start_date);
        setEndDate(task.end_date);
        setPriority(task.priority);
      })
      .catch((error) => {
        console.log(error);
      });
  };

 

  // Handle changes to the priority dropdown
  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
        task_name: taskName,
        task_description: taskDescription,
        employee_name: employeeName,
        start_date: startDate,
        end_date: endDate,
        priority: priority,
      is_delete: true
    };
    console.log(formData);
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
      <ModalHeader toggle={toggle}>Delete Modal</ModalHeader>
        <ModalBody>
          Are you Sure you want to delete this task?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit" onClick={handleSubmit}>
            Yes
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            No
          </Button>
        </ModalFooter>
    </Modal>
  );
};

export default DeleteTaskModal;
