import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import './Nav.modules.css'

export const Nav = () => {

  return (
    <>
    <AppBar style={{ background: "#191919", position: "sticky", height: "85px", boxShadow: "none", display: "flex", justifyContent: "flex-end", borderBottom: "1px solid #232323"}}>
      <Toolbar sx={{ display: "flex", gap: "15px", ml: 6}}>
        <img src="public/assets/images/GrizzlyBear.png" style={{ height: "90px" }} />
        <Box >
          <Typography style={{ fontFamily: 'Bernier', fontSize: "2rem", color: "#EEEEEE", fontWeight: "300" }}>
            California Informatica
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
    </>
  );
};
