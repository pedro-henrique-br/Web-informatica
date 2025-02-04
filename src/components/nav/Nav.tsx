import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import './Nav.modules.css';

export const Nav = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <AppBar
      style={{
        background: "#191919",
        position: "sticky",
        height: "85px",
        boxShadow: "none",
        display: "flex",
        justifyContent: "center",
        borderBottom: "1px solid #232323",
      }}
    >
      <Toolbar sx={{ display: "flex", alignItems: "center", gap: isMobile ? "5px" : "15px" }}>
        <img
          src="/assets/images/GrizzlyBear.png"
          style={{ height: isMobile ? "60px" : "90px" }}
        />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            style={{
              fontFamily: "Bernier",
              fontSize: isMobile ? "1.5rem" : "2rem",
              color: "#EEEEEE",
              fontWeight: "300",
            }}
          >
            California Informatica
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
