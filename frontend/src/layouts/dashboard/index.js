import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  Nav,
  NavLink,
} from "reactstrap";
import CircularProgress from '@mui/material/CircularProgress';
import { PieChart, pieChartDefaultProps } from "react-minimal-pie-chart";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DataTable from "./components/DataTable";
import { useNavigate } from "react-router-dom";
import { logout, tasks_view } from "../../api";
import DateAndTodoList from "./components/DateAndTodoList";
import TaskTable from "../taskAssignment/component/TaskTable";
import Header from "../../components/header";

const Dashboard = () => {
  const navigate = useNavigate();
  const [tasks, getTasks] = useState("");
  const [activeTasks, setActiveTasks] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const defaultLabelStyle = {
    fontSize: "5px",
    fontFamily: "sans-serif",
  };

  useEffect(() => {
    const viewAllTasks = async () => {
      console.log("Yeah its here");
      await tasks_view()
        .then((req) => {
          const task = req.data.results;
          getTasks(task);
          setActiveTasks(task.length);
          console.log(tasks);
          console.log(tasks.length);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };
     // Add a 1 second delay before calling the API
  const timeout = setTimeout(() => {
    viewAllTasks();
  }, 1000);
  
  // Cleanup function to clear the timeout in case the component unmounts before the API call is completed
  return () => clearTimeout(timeout);
  }, []);

  var completed = Array.isArray(tasks) ? tasks.filter(function (el) {
    return el.is_completed === true;
  }) : [];

  var inProgress = Array.isArray(tasks) ? tasks.filter(function (el) {
    var current_date = new Date();
    var task_date = new Date(el.start_date);
    return task_date <= current_date;
}) : [];

var notYetStarted = Array.isArray(tasks) ? tasks.filter(function (el) {
  var current_date = new Date();
  var task_date = new Date(el.start_date);
  return task_date >= current_date;
}) : [];

  var completed_length = completed === NaN ? 0 : completed.length ;

  var inProgress_length = inProgress === NaN ? 0 : inProgress.length ;

  var notYetStarted_length = notYetStarted === NaN ? 0 : notYetStarted.length ;

  // const recent_tasks = () => {
  //   var newArray = tasks.filter(function (el) {
    
  //         return el.priority === "high";
  //     });

  //   return newArray.length;
  // };

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

  return (
    <div className="bgImage">
    {/*<div className="gradient-background"> */}
{isLoading ? <CircularProgress /> :      
    

      <main>
      <Header />
        <Container className="my-4">
          <Row className="fixed-height-dashboard-upper-cards">
            <Col md={6} className="mb-4">
              <Card className="my-card pie-chart-progress">
                <CardTitle tag="h5" className="p-3 card-head">
                  Progress Chart
                </CardTitle>
                <CardText className="p-3 card-body">
                  <PieChart
                    data={[
                      { title: "Completed", value: completed_length, color: "#E38627" },
                      { title: "In Progress", value: inProgress_length, color: "#C13C37" },
                      { title: "Not yet Started", value: notYetStarted_length, color: "#6A2135" },
                    ]}
                    radius={pieChartDefaultProps.radius - shiftSize}
                    segmentsShift={(index) => (index === 0 ? shiftSize : 0.5)}
                    label={({ dataEntry }) => dataEntry.value}
                    style={{ height: "200px" }}
                    labelStyle={{ ...defaultLabelStyle }}
                  />
                  ;
                </CardText>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="my-card calendar-schedule">
                <CardText className="p-3 card-body">
                  <DateAndTodoList />
                </CardText>
              </Card>
            </Col>
          </Row>
          <Row className="mt-4 mb-0">
            <Col md={4}>
              <Card className="my-card middle-order-card">
                <CardTitle tag="h5" className="p-3 card-head">
                  Active Tasks
                </CardTitle>
                <CardText className="p-3 card-text-number card-body">{tasks.length}</CardText>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="my-card middle-order-card middle-center">
                <CardTitle tag="h5" className="p-3 card-head">
                  Tasks due this week
                </CardTitle>
                <CardText className="p-3 card-text-number card-body">5</CardText>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="my-card middle-order-card middle-right">
                <CardTitle tag="h5" className="p-3 card-head">
                Upcoming Meetings
                </CardTitle>
                <CardText className="p-3 card-text-number card-body">8</CardText>
              </Card>
            </Col>
          </Row>
          <Row className="mt-0">
            <Col md={12}>
              <Card className="h-100 my-card">
                <CardTitle tag="h5" className="card-head p-3">
                  High Priority tasks
                </CardTitle>
                <CardText className="p-3 card-body">
                {isLoading ? <CircularProgress /> : <TaskTable rows={tasks} dashboard={true}/>}
                </CardText>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>}
      <footer className="bg-dark py-3">
        <Container>
          <p className="text-white text-center">Copyright © 2023</p>
        </Container>
      </footer>
    </div>
  );
};

export default Dashboard;
