import React, { useState, useEffect } from "react";
import { Typography, Box, Grid, TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { deepPurple } from "@mui/material/colors";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUserStart, updateUserStart } from "../Redux/Actions";
const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
};
const usestyle = makeStyles({
  headingColor: {
    backgroundColor: deepPurple[400],
    color: "white",
  },
  addStuColor: {
    backgroundColor: "#1976D2",
    color: "white",
  },
});
const AddEditUSer = () => {
  const [formValue, setFormValue] = useState(initialState);
  const [editMode, SetEditMode] = useState(false);
  const { users } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      SetEditMode(true);
      const singleUser = users.find((item) => item.id === Number(id));
      setFormValue({ ...singleUser });
    }
  }, [id]);

  const classes = usestyle();

  const { name, email, phone, address } = formValue;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && phone && address) {
      if (!editMode) {
        dispatch(createUserStart(formValue));
        setTimeout(() => navigate("/"), 500);
      } else {
        dispatch(updateUserStart({ id, formValue }));
        SetEditMode(false);
        setTimeout(() => navigate("/"), 500);
      }
    }
  };
  return (
    <>
      <Grid
        container
        justify="center"
        alignItems="center"
        justifyContent="center"
        spacing={4}
        center
      >
        <Grid item md={6} xs={12} mt={3}>
          <Box textAlign="center" p={2} className={classes.addStuColor} mb={2}>
            <Typography variant="h4">
              {!editMode ? "Add User Detail" : "Update User Detail"}
            </Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="Name"
                  label="Name"
                  name="name"
                  id="name"
                  value={name || ""}
                  fullWidth
                  autoFocus
                  onChange={onInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="Email"
                  label="Email"
                  name="email"
                  id="email"
                  value={email || ""}
                  fullWidth
                  autoFocus
                  onChange={onInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="Phone"
                  label="Phone"
                  name="phone"
                  id="phone"
                  value={phone || ""}
                  fullWidth
                  autoFocus
                  onChange={onInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="Address"
                  label="Address"
                  name="address"
                  id="address"
                  value={address || ""}
                  fullWidth
                  autoFocus
                  onChange={onInputChange}
                />
              </Grid>
            </Grid>
            <Box m={3}>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                color="primary"
              >
                {!editMode ? "Add User" : "Update User"}
              </Button>
            </Box>
            <Box m={3} textAlign="center">
              <Button variant="contained" onClick={() => navigate("/")}>
                Back To Home
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default AddEditUSer;
