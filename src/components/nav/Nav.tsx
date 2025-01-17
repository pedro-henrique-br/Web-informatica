import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export const Nav = () => {
  return (
    <AppBar style={{background: "#fff", position: "sticky", height: "80px"}}>
      <Toolbar>
          <img src="src\assets\imgs\GrizzlyBear.png" style={{height: "90px"}} />
        <Box>
          <Typography style={{fontSize: "2rem", color: "#80533f", fontWeight: "900" }}>California Informática</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};