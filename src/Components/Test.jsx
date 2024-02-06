import Box from '@mui/joy/Box';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';


export default function Test() {
    return (
        <Box
            sx={{
                backgroundColor: 'black',
                color: 'white',
                height: '100vh'
            }}
        >
            {/* Parte de arriba */}
            <Box sx={{
                paddingTop: '20px',
                display: 'flex',
                alignItems: 'center'
            }}>
                <Box
                    onClick={() => window.history.back()}
                    sx={{
                        display: 'flex',
                        gap: '10px',
                        alignItems: 'center',
                        cursor: 'pointer',
                    }}>
                    <img
                        style={{ marginRight: '0.5rem', position: 'relative', top: '1px', borderRadius: '50%' }}
                        width="53px"
                        height="53px"
                        src="/logo.jpeg"
                        alt="Logo"
                    />
                    <Typography color='white' level="h4"> Proyecto x </Typography>
                </Box>
            </Box>

            {/* Parte del generador de prompts */}
            <Box
                sx={{
                    paddingTop: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '20px'
                }}
            >
                <Input sx={{
                    border: 'none',
                    color: 'white',
                    backgroundColor: '#101622',
                    width: '80%',
                    height: '50px',
                    '&::before': {
                        display: 'none',
                    },
                    '&:focus-within': {
                        outline: '2px solid #FFF625',
                        outlineOffset: '2px'
                    },
                    '&:focus': {
                        borderColor: 'pink', // Cambia este color al que desees
                        outline: 'none', // Elimina el borde predeterminado
                      },
                }}>
                </Input>

                <Button sx={{
                    borderRadius: '11px',
                    color: 'black',
                    height: '50px',
                    width: '150px',
                    background: 'var(--degree, linear-gradient(253deg, #FFF625 14.48%, #B4FC00 84.94%))',
                }}>
                    Generar
                </Button>
            </Box>
        </Box>
    )
}