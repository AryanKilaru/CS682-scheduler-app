import React, {useState} from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "reactstrap";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import MeetingDetailsModal from "../../../components/modals/MeetingDetailsModal";

export default function DataTable() {

const [isInformationModalOpen, setIsInformationModalOpen] = useState(false);

const columns = [
  // { field: 'id', headerName: 'ID', width: 70 },
  { field: "title", headerName: "Title", width: 200 },
  { field: "type", headerName: "Type", width: 180 },
  { field: "date", headerName: "Date", width: 180 },
  { field: "time", headerName: "Time", width: 180 },
  { field: "duration", headerName: "Duration", width: 180 },
  {field: 'details',
  headerName: 'Details',
  sortable: false,
  width: 120,
  disableClickEventBubbling: true,
  renderCell: (params) => {
  //   return null;

  const onInfoIcon = () => {
      // setTaskId(params.id);
      toggleInformationModal();
    };
    
    return (
      // <GridActionsCellItem>\
      <div>
        <IconButton>
          <InfoIcon onClick={onInfoIcon}/>
        </IconButton>
        </div>
      // </GridActionsCellItem>
    );
  },
},
  {field: 'actions',
  headerName: 'Actions',
  sortable: false,
  width: 120,
  disableClickEventBubbling: true,
  renderCell: (params) => {
  //   return null;
    return (
      // <GridActionsCellItem>\
      <div>
        <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
        </div>
      // </GridActionsCellItem>
    );
  },
},
];

const detail = () => {
  return;
  <Button>Details</Button>;
};

const toggleInformationModal = () => {
  setIsInformationModalOpen(!isInformationModalOpen);
};

const rows = [
  {
    id: 1,
    title: "Monday mornirg",
    type: "Type 1",
    date: "04/15/2022",
    time: "18:00:00",
    duration: "30:00:00",
    details: "",
    action: "",
  },
  {
    id: 2,
    title: "Tuesday hustle",
    type: "Type 4",
    date: "04/15/2022",
    time: "18:00:00",
    duration: "30:00:00",
    details: "",
    action: "",
  },
  {
    id: 3,
    title: "Wednesday fight",
    type: "Type 3",
    date: "04/15/2022",
    time: "18:00:00",
    duration: "30:00:00",
    details: "",
    action: "",
  },
  {
    id: 4,
    title: "Thursday survival",
    type: "Type 5",
    date: "04/15/2022",
    time: "18:00:00",
    duration: "30:00:00",
    details: "",
    action: "",
  },
  {
    id: 5,
    title: "Friday finish",
    type: "Type 2",
    date: "04/15/2022",
    time: "18:00:00",
    duration: "30:00:00",
    details: "",
    action: "",
  },
  // { id: 1, Tasks:'Task 1', lastName: 'Snow', firstName: 'Jon', startDate: "03/30/2023", endDate: "03/30/2023", Status: 'In Progress' },
  // { id: 2, Tasks:'Task 2', lastName: 'Lannister', firstName: 'Cersei', startDate: "03/30/2023", endDate: "03/30/2023", Status: 'In Progress' },
  // { id: 3, Tasks:'Task 3', lastName: 'Lannister', firstName: 'Jaime', startDate: "03/30/2023", endDate: "03/30/2023", Status: 'In Progress' },
  // { id: 4, Tasks:'Task 4', lastName: 'Stark', firstName: 'Arya', startDate: "03/30/2023", endDate: "03/30/2023", Status: 'In Progress' },
  // { id: 5, Tasks:'Task 5', lastName: 'Targaryen', firstName: 'Daenerys', startDate: "03/30/2023", endDate: "03/30/2023", Status: 'In Progress' },
];

  return (
    <div style={{ height: 400, width: "100%" }}>
      {isInformationModalOpen ? <MeetingDetailsModal isOpen={isInformationModalOpen} toggle={toggleInformationModal} /> : <></>}
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
