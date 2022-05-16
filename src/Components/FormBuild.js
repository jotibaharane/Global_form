import React, { useState } from "react";
import Box from "@mui/material/Box";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  ListItemText,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function FormBuild({ formData }) {
  const [change, setChange] = useState("");
  const [value, setValue] = useState("");
  const [checke, setChecke] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(change);
    setChange("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    setChange({ ...change, [e.target.name]: e.target.value });
  };

  const onChange = (e, op) => {
    let find = checke.indexOf(op);
    if (find > -1) {
      checke.splice(find, 1);
    } else {
      checke.push(op);
    }
    setChecke(checke);
    setChange({ ...change, [e.target.name]: checke });
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <InputLabel sx={{ width: "100%", textAlign: "center" }}>Form</InputLabel>
      <Table
        aria-label="simple table"
        sx={{ height: "40px", minWidth: "100px" }}
      >
        {formData.map((data, id) => (
          <TableHead key={id}>
            <TableRow>
              <TableCell>
                {(() => {
                  switch (data.fieldtype) {
                    case "Text":
                      return (
                        <TextField
                          required
                          id="filled-basic"
                          label={data.label}
                          name={data.name}
                          variant="filled"
                          value={value[data.name]}
                          onChange={handleChange}
                          sx={{ margin: "10px", width: "100%" }}
                        />
                      );

                    case "Textarea":
                      return (
                        <FormGroup>
                          <label style={{ margin: "10px 10px 0 10px" }}>
                            {data.label}
                          </label>
                          <TextareaAutosize
                            variant="filled"
                            name={data.name}
                            minRows={3}
                            label={data.label}
                            value={value[data.name]}
                            onChange={handleChange}
                            placeholder="enter value"
                            style={{
                              margin: "0 10px 10px 10px",
                              width: "100%",
                            }}
                          />
                        </FormGroup>
                      );
                    case "Select":
                      return (
                        <FormControl sx={{  m: 1, width: "100%" }} size="small">
                          <InputLabel id="demo-select-small">
                            {data.label}
                          </InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            name={data.name}
                            value={value[data.name]}
                            onChange={handleChange}
                            
                          >
                            {data.options.map((op) => (
                              <MenuItem value={op} key={op}>
                                {op}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      );
                    case "Checkbox":
                      return (
                        <FormGroup>
                           <InputLabel >
                            {data.label}
                          </InputLabel>
                          {data.options.map((op, id) => (
                            <MenuItem key={op} value={op}>
                              <Checkbox
                                name={data.name}
                                value={op}
                                onChange={(e) => onChange(e, op)}
                                selected={checke.includes(op)}
                              />
                              <ListItemText primary={op} />
                            </MenuItem>
                          ))}
                        </FormGroup>
                      );
                    case "Radio":
                      return (
                        <RadioGroup
                          label={data.label}
                          name={data.name}
                          value={value[data.name]}
                          onChange={handleChange}
                        >
                          {data.options.map((op) => (
                            <FormControlLabel
                              value={op}
                              control={<Radio />}
                              label={op}
                              key={op}
                            />
                          ))}
                        </RadioGroup>
                      );
                    default:
                      return <div>no Data</div>;
                  }
                })()}
              </TableCell>
            </TableRow>
          </TableHead>
        ))}
      </Table>

      <FormControl fullWidth sx={{ alignItems: "center", marginTop: "10px" }}>
        {formData.length !== 0 && (
          <Button variant="contained" type="submit">
            Submit
          </Button>
        )}
      </FormControl>
    </Box>
  );
}

export default FormBuild;
