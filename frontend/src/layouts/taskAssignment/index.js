import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  CardTitle,
  CardText,
  Nav,
  NavLink,
  CardBody,
  Row,
  Col,
} from "reactstrap";
import CircularProgress from "@mui/material/CircularProgress";
// import { PieChart, pieChartDefaultProps } from "react-minimal-pie-chart";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import DataTable from "./components/DataTable";
import { useNavigate } from "react-router-dom";
import { logout } from "../../api";
import { tasks_view } from "../../api";
import TaskTable from "./component/TaskTable";
import CreateTaskModal from "../../components/modals/CreateTaskModal";
// import DateAndTodoList from "./components/DateAndTodoList";
import Switch from "@mui/material/Switch";
import Header from "../../components/header";

const Dashboard = () => {
  const navigate = useNavigate();
  const [tasks, getTasks] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);
  const[isCompleted, setIsCompleted] = useState(true);

  const toggleCreateTaskModal = () => {
    setIsCreateTaskModalOpen(!isCreateTaskModalOpen);
  };

  const defaultLabelStyle = {
    fontSize: "5px",
    fontFamily: "sans-serif",
  };

  useEffect(() => {
    viewAllTasks();
  }, []);

  const viewAllTasks = () => {
    tasks_view()
      .then((req) => {
        const task = req.data.results;
        getTasks(task);
        // console.log(req);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const shiftSize = 7;

  const handleLogout = async () => {
    logout()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const handleChange = () => {
    setIsCompleted(!isCompleted);
    console.log(isCompleted);
  }

//   console.log(tasks);

  return (
    <div className="bgImage">
      <Header style={{ zIndex: 1 }} />

      <main style={{ position: "relative", zIndex: 0 }}>
        <Container className="my-4">
          <Card className="h-100 my-card my-task-card">
            <CardTitle tag="h5" className="p-3 card-head">
              <Row>
                <Col md="9">
                  <Row>Task Table</Row>
                  <Row>
                    <div className="switch-text">
                      <Switch onChange={handleChange} label="Completed" />
                      Completed task
                    </div>
                  </Row>
                </Col>
                <Col md="3" className="text-right">
                  <Button
                    className="primary card-button"
                    onClick={toggleCreateTaskModal}
                  >
                    Create Task
                  </Button>
                  <CreateTaskModal
                    isOpen={isCreateTaskModalOpen}
                    toggle={toggleCreateTaskModal}
                  />
                </Col>
              </Row>
            </CardTitle>
            {/* <button onClick={toggleCreateTaskModal}>Create Task</button> */}
            <CardBody className="card-body">
              {isLoading ? (
                <CircularProgress />
              ) : (
                <TaskTable rows={tasks} dashboard={false} isCompleted={isCompleted}/>
              )}
            </CardBody>
            <CardText className="p-3"></CardText>
          </Card>
        </Container>
      </main>
      <footer className="bg-dark py-3">
        <Container>
          <p className="text-white text-center">Copyright © 2023</p>
        </Container>
      </footer>
    </div>
  );
};

export default Dashboard;
