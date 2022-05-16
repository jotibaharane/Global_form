import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Typography,
  Link,
  Button,
} from "@mui/material";

const validName = new RegExp("[a-zA-Z]$");

function FormComp({setFormData,formData}) {
  const [data, setData] = useState({
    label: "",
    fieldtype: "",
    name: "",
    options: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    validName.test(data.name)
      ? setFormData([...formData,{...data,options:data.options.split(',')}])
      : alert("enter Correct Name");
      setData({
        label: "",
        fieldtype: "",
        name: "",
        options: "",
      })
  };

  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{ alignItems: "center", widrh: "100%" }}
      onSubmit={handleSubmit}
    >
      <InputLabel sx={{ width: "100%", textAlign: "center" }}>
        Create Form
      </InputLabel>
      <FormControl fullWidth>
        <TextField
          required
          id="filled-basic"
          label="Label"
          value={data.label}
          onChange={(e) => setData({ ...data, label: e.target.value })}
          variant="filled"
          sx={{
            margin: "10px",
            fontSize: "20px",
            fontWeight: "bolder",
          }}
        />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Field Type</InputLabel>
        <Select
          required
          labelId="demo-simple-select-label"
          value={data.fieldtype}
          variant="filled"
          label="Age"
          onChange={(e) => setData({ ...data, fieldtype: e.target.value })}
          sx={{ margin: "10px" }}
        >
          <MenuItem value={"Text"}>Text</MenuItem>
          <MenuItem value={"Textarea"}>Textarea</MenuItem>
          <MenuItem value={"Select"}>Select</MenuItem>
          <MenuItem value={"Checkbox"}>Checkbox</MenuItem>
          <MenuItem value={"Radio"}>Radio</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <TextField
          required
          id="filled-basic"
          label="Name"
          variant="filled"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          sx={{ margin: "10px" }}
        />
      </FormControl>

      <FormControl fullWidth>
        <TextField
          required
          id="filled-basic"
          label="Options"
          variant="filled"
          value={data.type}
          onChange={(e) => setData({ ...data, options: e.target.value })}
          sx={{ margin: "10px" }}
        />
      </FormControl>
      <FormControl fullWidth sx={{ alignItems: "center" }}>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </FormControl>
    </Box>
  );
}

export default FormComp;
