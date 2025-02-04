import { Box, Typography } from "@mui/material"

export const About = () => {
  return (
    <Box
    sx={{
      display: "flex",
      alignItems: "flex-Start",
      justifyContent: "center",
      height: "75vh"
    }}>
      <Box
      sx={{
        mt: "2vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <Typography sx={{fontFamily: "Montserrat", color: "#EEEEEE", fontSize: "2rem", fontWeight: "600"}}>Informatica California Soluções em TI</Typography>
        <Typography sx={{fontFamily: "Montserrat", color: "#EEEEEE", fontSize: "1.7rem"}}>Assistência Técnica de Informática</Typography>
      <Box>
        <img style={{width: "400px"}} src="https://images.tcdn.com.br/img/img_prod/827530/placa_de_video_geforce_rtx_3050_8gb_gigabyte_windforce_oc_edition_999_1_f0efbce236e8d6da952acf00484b984c.png" />
      </Box>
      </Box>
    </Box>
  )
}
