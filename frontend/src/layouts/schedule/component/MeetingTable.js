import React, {useState} from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "reactstrap";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import MeetingDetailsModal from "../../../components/modals/MeetingDetailsModal";
import meeting from "../../../demo-data/MeetingData";

const Meetingtable = (props) =>  {

const [isInformationModalOpen, setIsInformationModalOpen] = useState(false);

const columns = [
  // { field: 'id', headerName: 'ID', width: 70 },
  { field: "name", headerName: "Title", width: 200 },
  { field: "type", headerName: "Type", width: 180 },
  { field: "date", headerName: "Date", width: 180 },
  { field: "time", headerName: "Time", width: 180 },
  { field: "duration", headerName: "Duration", width: 180 },
  {field: 'notes',
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


  return (
    <div style={{ height: 400, width: "100%" }}>
      {isInformationModalOpen ? <MeetingDetailsModal isOpen={isInformationModalOpen} toggle={toggleInformationModal} /> : <></>}
      <DataGrid
        rows={props.data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default Meetingtable;