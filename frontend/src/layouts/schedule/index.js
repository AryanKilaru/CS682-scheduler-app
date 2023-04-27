import React, {useEffect, useState} from "react";
import { Container, Card, CardTitle, CardText, Nav, NavLink } from "reactstrap";
// import { PieChart, pieChartDefaultProps } from "react-minimal-pie-chart";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import DataTable from "./components/DataTable";
import { useNavigate } from "react-router-dom";
import { meeting_view } from "../../api";
import DataTable from "../dashboard/components/DataTable";
import Header from "../../components/header";
import MeetingTable from "./component/MeetingTable";
// import DateAndTodoList from "./components/DateAndTodoList";

const Dashboard = () => {
  const navigate = useNavigate();
  const [tasks, getTasks] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);
  const[isCompleted, setIsCompleted] = useState(true);

  useEffect(() => {
    viewAllMeeting();
  }, []);

  const viewAllMeeting = () => {
    meeting_view()
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
  
  console.log(tasks);

  return (
    <div className="bgImage">
      <Header />

      <main>
        <Container className="my-4">
        <Card className="my-card schedule-card">
                <CardTitle tag="h5" className="p-3">
                  Schedule Table
                </CardTitle>
                <CardText className="p-3 schedule-card-body">
                  <MeetingTable data={tasks}/>
                </CardText>
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
