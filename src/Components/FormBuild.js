import React, { useState } from "react";
import {
  Box,
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
  Table,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

function FormBuild({ formData }) {
  const [change, setChange] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(change);
    setChange("");
  };

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      const checke = change[e.target.name] ? change[e.target.name] : [];

      let find = checke.indexOf(e.target.value);
      find > -1 ? checke.splice(find, 1) : checke.push(e.target.value);
      setChange({ ...change, [e.target.name]: checke });
    } else {
      setChange({ ...change, [e.target.name]: e.target.value });
    }
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
                          value={change[data.name] ? change[data.name] : ""}
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
                            value={change[data.name] ? change[data.name] : ""}
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
                        <FormControl sx={{ m: 1, width: "100%" }} size="small">
                          <InputLabel id="demo-select-small">
                            {data.label}
                          </InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            name={data.name}
                            value={change[data.name] ? change[data.name] : ""}
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
                          <InputLabel>{data.label}</InputLabel>
                          {data.options.map((op, id) => (
                            <MenuItem key={id} value={op}>
                              <Checkbox
                                name={data.name}
                                value={op}
                                onChange={handleChange}
                                selected={
                                  change[data.name]!==undefined
                                    ? change[data.name].includes(op)
                                    : false
                                }
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
                          value={change[data.name] ? change[data.name] : ""}
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
