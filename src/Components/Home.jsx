// import './Home.css';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import { Outlet } from 'react-router-dom';
import CrearNuevoProyectoModal from './modals/CrearNuevoProyectoModal.jsx';
import { Link } from 'react-router-dom';
import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';
import Button from '@mui/joy/Button';
import FolderIcon from '@mui/icons-material/Folder';
import BookIcon from '@mui/icons-material/Book';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { useState } from 'react';


const Home = () => {
  
  const [selected, setSelected] = useState(1);
  
  
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
      }}
    >
      {/* sidebar */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '22rem',
          borderRight: 'solid 2px #FFF625',
        }}
      >
        <Typography
          level="h4"
          sx={{
            display: 'flex',
            alignItems: 'center',
            margin: 0,
            padding: '1rem 2rem',
            fontWeight: 'bold',
            letterSpacing: 0,
          }}
        >
          <img
            style={{ marginRight: '0.5rem', position: 'relative', top: '1px', borderRadius: '50%' }}
            width="53px"
            height="53px"
            src="/logo.jpg"
            alt="Logo"
          />
          <Link to='/'>
            <Typography sx={{
              background: 'var(--degree, linear-gradient(253deg, #FFF625 14.48%, #B4FC00 84.94%));',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}>Artisto</Typography> <span style={{ color: 'white' }}>| Generador de videos con IA </span>
          </Link>
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            paddingTop: '1rem',
            paddingBottom: '1rem',
            paddingLeft: '2rem',
            paddingRight: '2rem',
          }}
        >
          <CrearNuevoProyectoModal />
        </Box>

        <Box
          sx={{
            overflow: 'auto',
            flex: 1,
            padding: '1rem 2rem',
          }}
        >
          <ToggleButtonGroup
          variant="plain"
            sx={{
              border: 'none',
              display: 'flex',
              flexDirection: 'column',
            }}
            onChange={(event, newValue) => {
              setSelected(newValue);
            }}
          >
            <Button 
              startDecorator={ <FolderIcon/>}  
              variant={selected == 1 ? 'solid' : 'plain'}
              value="1"
              size='lg'
              >
               Mis proyectos 
            </Button>
            <br/>
            <Button 
              startDecorator={ <BookIcon/>}  
              variant={selected == 2 ? 'solid' : 'plain'}
              value="2"
              size='lg'
              >
                Tutoriales 
            </Button>
            <br/>
            <Button 
              startDecorator={ <MonetizationOnIcon/>} 
              variant={selected == 3 ? 'solid' : 'plain'}
              value="3"
              size='lg'
              >
                Susbcripciones
              </Button>
            <br/>
            <br/>
          </ToggleButtonGroup>
        </Box>
      </Box>

      <Box sx={{
        flex: 1,
        width: '100%',
      }}>
        <Outlet />
      </Box>
    </Box>
  );

};


export default Home;
