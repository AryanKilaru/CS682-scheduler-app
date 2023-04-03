import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Tasks', headerName: 'Tasks', width: 210 },
  { field: 'firstName', headerName: 'First name', width: 180 },
  { field: 'lastName', headerName: 'Last name', width: 180 },
  {field: 'startDate', headerName: 'Start Date', width: 180},
  {field: 'endDate',headerName: 'End Date',width: 180},
  { field: 'status', headerName: 'Status', width: 180 },
];

const rows = [
  { id: 1, Tasks:'Task 1', lastName: 'Snow', firstName: 'Jon', startDate: "03/30/2023", endDate: "03/30/2023", Status: 'In Progress' },
  { id: 2, Tasks:'Task 2', lastName: 'Lannister', firstName: 'Cersei', startDate: "03/30/2023", endDate: "03/30/2023", Status: 'In Progress' },
  { id: 3, Tasks:'Task 3', lastName: 'Lannister', firstName: 'Jaime', startDate: "03/30/2023", endDate: "03/30/2023", Status: 'In Progress' },
  { id: 4, Tasks:'Task 4', lastName: 'Stark', firstName: 'Arya', startDate: "03/30/2023", endDate: "03/30/2023", Status: 'In Progress' },
  { id: 5, Tasks:'Task 5', lastName: 'Targaryen', firstName: 'Daenerys', startDate: "03/30/2023", endDate: "03/30/2023", Status: 'In Progress' },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
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