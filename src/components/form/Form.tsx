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
  backgroundColor: '#191919', // Cor de fundo para combinar com o tema escuro
  borderRadius: theme.shape.borderRadius,
  maxWidth: '500px',
  margin: 'auto',
}));

export const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', phone: '' });
  const [errors, setErrors] = useState({ name: false, email: false, message: false, phone: false });

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
      phone: !formData.phone,
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

    const { name, email, message, phone } = formData;
    api.sendEmail(name, email, `Telefone ${name}: ${phone}. Mensagem: ${message}`);
    setFormData({ name: '', email: '', message: '', phone: '' });
  };

  return (
    <FormContainer>
      <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#EEEEEE' }}>
        Entre em Contato
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ color: '#B0B0B0', mb: 2 }}>
        Faça um orçamento sem compromisso
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          gap: 2,
        }}
      >
          <Box 
          sx={{
            display: "flex",
            gap: "20px"
          }}>
           <TextField
            name="name"
            label="Nome"
            variant="outlined"
            fullWidth
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            helperText={errors.name ? 'Insira seu nome' : ''}
            sx={{
              '& .MuiInputLabel-root': {
                color: '#FFF',
              },
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#2C2C2C',
                '& fieldset': {
                  borderColor: '#444',
                },
                '&:hover fieldset': {
                  borderColor: '#999',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#EEEEEE',
                },
              },
              '& .MuiFormHelperText-root': {
                color: '#FF6F61',
              },
              '& .MuiInputBase-input': {
                color: '#FFFFFF', // Cor do texto dentro do input em branco
              }
            }}
          />
          <TextField
            name="phone"
            label="Telefone"
            variant="outlined"
            fullWidth
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            helperText={errors.phone ? 'Insira seu Telefone' : ''}
            sx={{
              '& .MuiInputLabel-root': {
                color: '#FFF',
              },
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#2C2C2C',
                '& fieldset': {
                  borderColor: '#444',
                },
                '&:hover fieldset': {
                  borderColor: '#999',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#EEEEEE',
                },
              },
              '& .MuiFormHelperText-root': {
                color: '#FF6F61',
              },
              '& .MuiInputBase-input': {
                color: '#FFFFFF', // Cor do texto dentro do input em branco
              }
            }}
          /> 
          </Box>
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          fullWidth
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          helperText={errors.email ? 'Insira um email válido' : ''}
          sx={{
            '& .MuiInputLabel-root': {
              color: '#FFF',
            },
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#2C2C2C',
              '& fieldset': {
                borderColor: '#444',
              },
              '&:hover fieldset': {
                borderColor: '#999',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#EEEEEE',
              },
            },
            '& .MuiFormHelperText-root': {
              color: '#FF6F61',
            },
            '& .MuiInputBase-input': {
              color: '#FFFFFF', // Cor do texto dentro do input em branco
            },
          }}
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
          sx={{
            '& .MuiInputLabel-root': {
              color: '#FFF',
            },
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#2C2C2C',
              '& fieldset': {
                borderColor: '#444',
              },
              '&:hover fieldset': {
                borderColor: '#999',
              },
              '& .MuiInputBase-input': {
              color: '#FFFFFF', // Cor do texto dentro do input em branco
              },
              '&.Mui-focused fieldset': {
                borderColor: '#EEEEEE',
              },
            },
            '& .MuiFormHelperText-root': {
              color: '#FF6F61',
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#FF6F61',
            '&:hover': {
              backgroundColor: '#FF4F4F',
            },
          }}
        >
          Enviar
        </Button>
      </Box>
      <Divider sx={{ my: 3, borderColor: '#444',color: '#B0B0B0', fontFamily: "sans-serif"}}>ou</Divider>
      <Box>
        <Typography variant="body2" align="center" sx={{ color: '#B0B0B0' }}>
          Entre em contato pelo{' '}
          <Link href="https://wa.me/12988933305" rel="noopener noreferrer" target="_blank" sx={{ color: '#FF6F61' }}>
            WhatsApp
          </Link>
        </Typography>
      </Box>
    </FormContainer>
  );
};
