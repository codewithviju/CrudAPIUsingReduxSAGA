import React, { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import {
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Tooltip,
  Paper,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { deepPurple, green } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserStart, loadUsersStart } from "../Redux/Actions";
const useStyle = makeStyles({
  headingColor: {
    backgroundColor: deepPurple[400],
    color: "white",
  },
  addStuColor: {
    backgroundColor: green[400],
    color: "white",
  },
  stuListColor: {
    backgroundColor: "#1565C0",
    color: "white",
  },
  tableHeadCell: {
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
  },
});

const Home = () => {
  const dispatch = useDispatch();
  const clasess = useStyle();
  const { users, loading } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadUsersStart());
  }, []);

  if (loading) {
    return (
      <>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </div>
      </>
    );
  }

  // Delete The User

  const handleDelete = (id) => {
    if (window.confirm("Are You Sure That You Want To Delete ?")) {
      dispatch(deleteUserStart(id));
    }
  };

  return (
    <>
      <Box textAlign="center" p={2} className={clasess.stuListColor} mt={4}>
        <Typography
          variant="h4"
          style={{ fontFamily: "Encode Sans sans-serif" }}
        >
          Users List
        </Typography>
      </Box>
      <TableContainer component={Paper} p={4}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#1565C0" }}>
              <TableCell
                align="center"
                className={clasess.tableHeadCell}
                style={{ color: "white" }}
              >
                No
              </TableCell>
              <TableCell
                align="center"
                className={clasess.tableHeadCell}
                style={{ color: "white" }}
              >
                Name
              </TableCell>
              <TableCell
                align="center"
                className={clasess.tableHeadCell}
                style={{ color: "white" }}
              >
                Email
              </TableCell>
              <TableCell
                align="center"
                className={clasess.tableHeadCell}
                style={{ color: "white" }}
              >
                Phone
              </TableCell>
              <TableCell
                align="center"
                className={clasess.tableHeadCell}
                style={{ color: "white" }}
              >
                Address
              </TableCell>
              <TableCell
                align="center"
                className={clasess.tableHeadCell}
                style={{ color: "white" }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((items, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{items.id}</TableCell>
                  <TableCell align="center">{items.name}</TableCell>
                  <TableCell align="center">{items.email}</TableCell>
                  <TableCell align="center">{items.phone}</TableCell>
                  <TableCell align="center">{items.address}</TableCell>
                  <TableCell align="center">
                    <Tooltip title="Edit">
                      <IconButton>
                        <Link to={`/editUser/${items.id}`}>
                          <EditIcon color="primary"></EditIcon>
                        </Link>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton onClick={() => handleDelete(items.id)}>
                        <DeleteIcon color="secondary"></DeleteIcon>
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Home;
