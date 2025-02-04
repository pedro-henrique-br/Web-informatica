import { Box, Typography, useMediaQuery } from "@mui/material";
import { TiLocation } from "react-icons/ti";

export const Location = () => {
  const isMobile = useMediaQuery("(max-width:850px)");
  const isMobileMin = useMediaQuery("(max-width:428px)");

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Box
        about="Location"
        sx={{
          width: "90%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "15px",
        }}>
        <Typography
          style={{
            fontFamily: "Montserrat",
            color: "#EEEEEE",
            fontSize: "2rem",
            fontWeight: "800",
          }}>
          Onde estamos?
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
          }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.89552555399!2d-45.941511324678316!3d-23.283245578991785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cdcbd607494e8f%3A0x5a009d346a923794!2sCalifornia%20Informatica!5e0!3m2!1spt-BR!2sbr!4v1737076259578!5m2!1spt-BR!2sbr"
            width={isMobileMin ? "300" : "600"}
            height={isMobile ? "350" : "400"}
            loading="lazy"></iframe>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            }}>
            <Typography
              style={{
                textAlign: "center",
                fontFamily: "Montserrat",
                color: "#EEEEEE",
                fontSize: "1.2rem",
                fontWeight: "600",
              }}>
              <TiLocation size={26} color={"#F50000"} /> Rua Padre João
              Francisco de Siqueira Andrade<br></br>n° 41 - Jacareí/São Paulo
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
