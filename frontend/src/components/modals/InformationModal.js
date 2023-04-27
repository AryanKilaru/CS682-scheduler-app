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
import { tasks_create, tasks_update, task_view } from "../../api";
import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const Progress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${LinearProgress}-bar`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.primary.main,
  },
}));

const InformationModal = ({ isOpen, toggle, id }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [priority, setPriority] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    viewSingleTask();
  }, []);

  const startingDate = new Date(startDate);
  const endingDate = new Date(endDate);
  const presentDate = new Date();

  const viewSingleTask = () => {
    console.log(id);
    task_view(id)
      .then((req) => {
        // console.log(req);
        const task = req.data;
        console.log("task");
        console.log(task);
        // setTaskName(task.task_name);
        // setEmployeeName(task.employee_name);
        setStartDate(task.start_date);
        setEndDate(task.end_date);
        // setPriority(task.priority);
        setTaskDescription(task.task_description);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const TestFunction = () => {
    console.log(startingDate);
    console.log(endingDate);
    console.log(presentDate);
  };

  const totalDuration = endingDate.getTime() - startingDate.getTime();
  const completedDuration = presentDate.getTime() - startingDate.getTime();
  const completedPercentage = Math.floor(
    (completedDuration / totalDuration) * 100
  );

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Task Description</ModalHeader>
      <ModalBody>
        {taskDescription}
        <div className="StatusBar">
          <p>Task Status</p>
          <Progress
            variant="determinate"
            value={completedPercentage}
            onClick={TestFunction}
            sx={{
                '& .MuiLinearProgress-bar': {
                  bgcolor: completedPercentage > 75 ? 'red' : 
                           completedPercentage > 50 ? 'yellow' : 
                           'blue'
                }
              }}
          />
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default InformationModal;
