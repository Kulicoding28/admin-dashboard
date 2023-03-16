import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./table.scss";

const List = () => {
  const rows = [
    {
      id: 1,
      field: "Batavia",
      img: "https://images.pexels.com/photos/1884576/pexels-photo-1884576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      costumer: "Smith",
      date: "15 March",
      hour: 1,
      amount: 600,
      method: "Transfer",
      status: "Pending",
    },
    {
      id: 2,
      field: "Kemang",
      img: "https://images.pexels.com/photos/1657328/pexels-photo-1657328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      costumer: "Alex",
      date: "16 March",
      hour: 1,
      amount: 600,
      method: "Transfer",
      status: "Approved",
    },
    {
      id: 3,
      field: "Cibinong",
      img: "https://images.pexels.com/photos/47343/the-ball-stadion-horn-corner-47343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      costumer: "Smith",
      date: "17 March",
      hour: 1,
      amount: 800,
      method: "Transfer",
      status: "Approved",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Field</TableCell>
            <TableCell className="tableCell">Costumer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Hours</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.field}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.costumer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.hour}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
