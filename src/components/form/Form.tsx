import { FormEvent, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../api';

const FormContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  maxWidth: '500px',
  margin: 'auto',
}));

export const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: false, email: false, message: false });

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const target = e.target as HTMLInputElement | HTMLTextAreaElement;
  const { name, value } = target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};

  const validateForm = () => {
    const newErrors = {
      name: !formData.name,
      email: !/\S+@\S+\.\S+/.test(formData.email),
      message: !formData.message,
    };
    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Por favor, preencha todos os campos corretamente.', {
        position: 'bottom-right',
        autoClose: 5000,
        theme: 'colored',
      });
      return;
    }

    const {name, email, message} = formData

    api.sendEmail(name, email, message)
    setFormData({name: "", email: "", message: ""})
  };

  return (
    <FormContainer>
      <Typography variant="h4" component="h1" gutterBottom>
        Entre em Contato
      </Typography>
      <Typography variant="body1" gutterBottom>
        Vamos conversar! Envie sua mensagem abaixo.
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
      >
        <TextField
          name="name"
          label="Nome"
          variant="outlined"
          fullWidth
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          helperText={errors.name ? 'Insira seu nome' : ''}
        />
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          fullWidth
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          helperText={errors.email ? 'Insira um email válido' : ''}
        />
        <TextField
          name="message"
          label="Mensagem"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          helperText={errors.message ? 'Insira uma mensagem' : ''}
        />
        <Button type="submit" variant="contained" fullWidth>
          Enviar
        </Button>
      </Box>
      <Divider sx={{ my: 3 }}>ou</Divider>
      <Box>
        <Typography variant="body2" align="center">
          Entre em contato pelo{' '}
          <Link href="https://wa.me/12988933305" target="_blank">
            WhatsApp
          </Link>
        </Typography>
      </Box>
    </FormContainer>
  );
};
