import './App.css'
import { Box, Typography } from '@mui/material'
import { Contact } from './components/contact/Contact'
import { Nav } from './components/nav/Nav'
import { Services } from './components/services/Services'

function App() {

  return (
    <>
      <Nav />
      <Services />
      <Box about='About' sx={{height: "100vh"}}>
        <Typography style={{fontSize: "2rem", color: "#80533f", fontWeight: "900" }}>Sobre mim</Typography>
      </Box>
      <Box about='Location' sx={{height: "80vh"}}>
        <Typography style={{fontSize: "2rem", color: "#80533f", fontWeight: "900" }}>Onde estamos?</Typography>
        <Box>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.89552555399!2d-45.941511324678316!3d-23.283245578991785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cdcbd607494e8f%3A0x5a009d346a923794!2sCalifornia%20Informatica!5e0!3m2!1spt-BR!2sbr!4v1737076259578!5m2!1spt-BR!2sbr" width="600" height="450" loading="lazy"></iframe>
        </Box>
      </Box>
      <Contact />
    </>
  )
}

export default App
