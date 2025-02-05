import { Box, Typography, Link, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Instagram, WhatsApp } from '@mui/icons-material';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#f8f8f8',
  color: '#333',
  padding: theme.spacing(4, 2),
  borderTop: '1px solid #ddd',
}));

const SocialIcon = styled(Link)(({ theme }) => ({
  margin: theme.spacing(0, 1),
  color: '#fff',
  display: 'inline-flex',
  width: 36,
  height: 36,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  backgroundColor: '#4267B2', // Cor padrão para Facebook, pode ser ajustada
  '&:nth-of-type(2)': { backgroundColor: '#E4405F' }, // Instagram
  '&:nth-of-type(3)': { backgroundColor: '#25D366' }, // WhatsApp
}));

export const Footer = () => {
  return (
    <FooterContainer
      sx={{
        background: "none"
      }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={4}>
          <Typography variant="h6" color="#fff">Sobre</Typography>
          <Typography variant="body2" color="#CECECE">
            Somos uma empresa independente e não autorizada por fabricantes. Atendemos como assistência.
          </Typography>
          <Link href="" sx={{ color: '#FF6F61', fontSize: "0.9rem", fontFamily: "sans-serif", textDecoration: 'none' }}>Saiba Mais</Link>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h6" color="#fff">Contato</Typography>
          <Typography variant="body2" color="#CECECE">Rua Padre João Francisco de Siqueira Andrade<br></br> - Jacareí/São Paulo</Typography>
          <Typography variant="body2" color="#CECECE">(12) 98893-3305</Typography>

          <Box mt={1}>
            <SocialIcon href="https://www.instagram.com/california_informatica/" target="_blank" rel="noopener noreferrer"><Instagram /></SocialIcon>
            <SocialIcon href="https://wa.me/12988933305" target="_blank" rel="noopener noreferrer"><WhatsApp /></SocialIcon>
          </Box>
        </Grid>
      </Grid>
      
      <Box textAlign="center" mt={3}>
        <Typography variant="body2" color="#CECECE">© 2025 Informática California. Todos os direitos reservados.</Typography>
        <Typography variant="body2" color="#CECECE">Desenvolvido por: <Link href="https://wa.me/12988933305" target="_blank" rel="noopener noreferrer" sx={{ color: '#FF6F61', textDecoration: 'none' }}>Pedro Barbosa</Link></Typography>
      </Box>
    </FooterContainer>
  );
};
