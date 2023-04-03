import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import moment from 'moment';

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "Tasks", headerName: "Tasks", width: 210 },
  { field: "firstName", headerName: "First name", width: 180 },
  { field: "lastName", headerName: "Last name", width: 180 },
  { field: "start_date", headerName: "Start Date", width: 180, valueFormatter: params => moment(params?.value).format("MM/DD/YYYY"), },
  { field: "end_date", headerName: "End Date", width: 180, valueFormatter: params => moment(params?.value).format("MM/DD/YYYY"), },
  { field: "status", headerName: "Status", width: 180 },
];

export default function TaskTable(props) {
  //   const getRowId = (row) => row.task_id;
  const res = props.rows;
  console.log(res);
  const temp = res.map((data) => {
    const fullName = data.employee_name;
    let firstName, lastName;

    if (fullName.includes(" ")) {
      console.log(fullName);
      [firstName, lastName] = fullName.split(" ");
    } else {
      firstName = fullName;
      lastName = "LNU";
    }
    return {
      id: data.task_id, // unique id property for each row
      Tasks: data.task_name,
      firstName: firstName,
      lastName: lastName,
      start_date: data.start_date,
      end_date: data.end_date,
      status: "Finished",
    };
  });
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={temp}
        getRowId={temp.task_id}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
