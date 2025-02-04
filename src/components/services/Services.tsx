import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { useState } from "react"

const services = [
  {
    title: "Recuperação de Dados",
    description:
      "Trabalhamos na recuperação de dados perdidos em dispositivos com problemas, garantindo que suas informações importantes sejam salvas.",
    image: "public/assets/images/recupDeDados.jpg",
  },
  {
    title: "Configurações de Dispositivos Wireless",
    description:
      "Realizamos a configuração de redes sem fio, assegurando uma conexão estável e segura para todos os seus dispositivos.",
    image: "public/assets/images/roteador.webp",
  },
  {
    title: "Upgrade de Equipamentos",
    description:
      "Melhoramos a performance dos seus dispositivos com upgrades de hardware, como instalação de mais memória RAM ou troca de HD por SSD.",
    image: "public/assets/images/pcgamer.jpg",
  },
  {
    title: "Reparo de Computadores e Notebooks",
    description:
      "Diagnósticos e reparos em computadores e notebooks que apresentam problemas de hardware ou software.",
    image: "public/assets/images/manutencao-computador.jpg",
  },
  {
    title: "Remoções de Vírus",
    description:
      "Eliminamos malwares e vírus que possam comprometer a segurança dos seus dados.",
    image: "public/assets/images/malware.webp",
  },
  {
    title: "Formatação e Backups de Informações",
    description:
      "Implementamos soluções de backup para proteger suas informações importantes contra perda.",
    image: "public/assets/images/win11.webp",
  },
];

export const Services = () => {
  const [mouseOver ,setMouseOver] = useState([0, false])

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4" gutterBottom  sx={{marginTop: "4vh", fontFamily: "Montserrat", textTransform: "capitalize", color: "#EEEEEE", fontWeight: "600"}}>
        Nossos Servicos
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "stretch",
          gap: 4,
          maxWidth: "90vw",
          marginTop: "5vh"
        }}
      >
        {services.map((service, index) => (
  <Card
    onMouseOver={() => setMouseOver([index, true])}
    onMouseLeave={() => setMouseOver([0, false])}
    key={index}
    sx={{
      flex: "1 1 calc(33% - 32px)", // Ajuste flexível para responsividade
      maxWidth: "345px",
      background: "none",
      minWidth: "280px",
      border: "solid 1px #232323",
      boxShadow: 3,
      display: "flex",
      flexDirection: "column",
      borderRadius: "16px", // Bordas arredondadas
      overflow: "hidden", // Esconde qualquer conteúdo fora da borda
      transition: "transform 0.3s ease-in-out", // Animação de transformação
      '&:hover': {
        transform: "scale(1.05)", // Efeito de zoom no hover
        boxShadow: 6, // Aumenta a sombra no hover
      }
    }}
  >
    <CardMedia
      component="img"
      height="140"
      image={service.image}
      src={service.image}
      alt={service.title}
      sx={{
        objectFit: "cover", // Garante que a imagem cubra todo o espaço sem distorção
        borderBottom: "4px solid #f0f0f0", // Adiciona uma linha sutil abaixo da imagem
      }}
    />
    <CardContent sx={{ padding: "16px", textAlign: "center" }}>
      <Typography 
        gutterBottom 
        variant="h6" 
        component="div" 
        sx={{
          fontWeight: "bold", 
          color: mouseOver[0] === index && mouseOver[1] ? "#FFF" : "#CECECE", // Cor de texto mais forte
          textTransform: "uppercase", // Texto em maiúsculas
          letterSpacing: "1px", // Distância entre letras para destacar o título
        }}
      >
        {service.title}
      </Typography>
      <Typography 
        variant="body2" 
        color="text.secondary" 
        sx={{
          fontSize: "0.9rem", // Ajuste no tamanho da fonte
          color: mouseOver[0] === index && mouseOver[1] ? "#FFF" : "#CECECE", // Cor de texto mais suave
          lineHeight: 1.6, // Maior espaçamento entre as linhas
        }}
      >
        {service.description}
      </Typography>
    </CardContent>
  </Card>
))}

      </Box>
    </Box>
  );
};
