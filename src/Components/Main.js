import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormComp from "./FormComp"
import FormBuild from "./FormBuild";
function Main() {
    
  const [formData, setFormData] = useState([]);
  const [formInpute, setFormInpute] = useState([]);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        padding: "10px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={5} sx={{ height: "90vh" }}>
          <Box sx={{ border: "1px solid black", height: "90vh" }}><FormComp setFormData={setFormData} formData={formData}/></Box>
        </Grid>
        <Grid item xs={5} sx={{ height: "90vh" }}>
          <Box sx={{ border: "1px solid black", minHeight: "90vh" }}><FormBuild formData={formData}/></Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Main;
