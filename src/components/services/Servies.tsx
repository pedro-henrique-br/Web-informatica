import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";

const services = [
  {
    title: "Recuperação de Dados",
    description:
      "Trabalhamos na recuperação de dados perdidos em dispositivos com problemas, garantindo que suas informações importantes sejam salvas.",
    image: "https://via.placeholder.com/150/009688/FFFFFF?text=Recuperação+de+Dados",
  },
  {
    title: "Configurações de Dispositivos Wireless",
    description:
      "Realizamos a configuração de redes sem fio, assegurando uma conexão estável e segura para todos os seus dispositivos.",
    image: "https://via.placeholder.com/150/009688/FFFFFF?text=Wireless",
  },
  {
    title: "Reparo de Computadores e Notebooks",
    description:
      "Diagnósticos e reparos em computadores e notebooks que apresentam problemas de inicialização.",
    image: "https://via.placeholder.com/150/009688/FFFFFF?text=Conserto",
  },
  {
    title: "Upgrade de Equipamentos",
    description:
      "Melhoramos a performance dos seus dispositivos com upgrades de hardware, como instalação de mais memória RAM ou troca de HD por SSD.",
    image: "https://via.placeholder.com/150/009688/FFFFFF?text=Upgrades",
  },
  {
    title: "Remoções de Vírus",
    description:
      "Eliminamos malwares e vírus que possam comprometer a segurança dos seus dados.",
    image: "https://via.placeholder.com/150/009688/FFFFFF?text=Vírus",
  },
  {
    title: "Configurações para Melhora de Desempenho",
    description:
      "Otimizamos seus sistemas para garantir um funcionamento mais ágil e eficiente.",
    image: "https://via.placeholder.com/150/009688/FFFFFF?text=Desempenho",
  },
  {
    title: "Diagnóstico de Problemas de Hardware",
    description:
      "Realizamos diagnósticos detalhados para identificar problemas de hardware e sugerir soluções adequadas.",
    image: "https://via.placeholder.com/150/009688/FFFFFF?text=Hardware",
  },
  {
    title: "Formatação e Backups de Informações",
    description:
      "Implementamos soluções de backup para proteger suas informações importantes contra perda.",
    image: "https://via.placeholder.com/150/009688/FFFFFF?text=Backup",
  },
];

export const Services = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: 4,
      }}
    >
      <Typography variant="h4" gutterBottom color="primary">
        Nossos Serviços
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "stretch",
          gap: 4,
          maxWidth: "1200px",
        }}
      >
        {services.map((service, index) => (
          <Card
            key={index}
            sx={{
              flex: "1 1 calc(33% - 32px)", // Ajuste flexível para responsividade
              maxWidth: "345px",
              minWidth: "280px",
              boxShadow: 3,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={service.image}
              alt={service.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {service.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
