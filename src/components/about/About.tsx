import { Box, Typography, useMediaQuery } from "@mui/material"

export const About = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  
  return (
    <Box
    sx={{
      display: "flex",
      alignItems: "flex-Start",
      justifyContent: "center",
      height: "90%"
    }}>
      <Box
      sx={{
        width: "90vw",
        textAlign: "center",
        mt: "2vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <Typography sx={{fontFamily: "Montserrat", color: "#EEEEEE", fontSize: isMobile ? "1.7rem" : "2rem", fontWeight: "600"}}>Informatica California Soluções em TI</Typography>
        <Typography sx={{fontFamily: "Montserrat", color: "#EEEEEE", fontSize: isMobile ? "1.3rem" : "1.7rem"}}>Assistência Técnica de Informática</Typography>
      <Box>
        <img style={{width: isMobile ? "300px" : "400px"}} src="/assets/images/pc.png" />
      </Box>
      </Box>
    </Box>
  )
}
