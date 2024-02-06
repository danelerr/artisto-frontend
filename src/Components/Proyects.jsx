import Box from '@mui/joy/Box';
import ProyectComponent from "./ProyectComponent.jsx";
import Typography from '@mui/joy/Typography';
import Input from '@mui/joy/Input';
import ColorLens from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';


export default function Proyects() {

    const [proyectos, setProyectos] = useState([]);

    const [search, setSearch] = useState('');

    const cargarProyectos = async () => {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}obtener-proyectos`);
        const data = await res.json();
        setProyectos(data);
        console.log(data);
    }

    useEffect(() => {
        cargarProyectos();
    }, []);

    let arrayFilter;
    if (search.length == 0) {
        arrayFilter = proyectos;
    } else {
        arrayFilter = proyectos.filter(proy => {
            const proyText = proy.nombre.toLowerCase();
            const searchText = search.toLowerCase();
            return proyText.includes(searchText);
        });
    }

    const buscarProyectos = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
    }

    return (
        <Box >
            <Input
                placeholder='Busca un proyecto'
                size="lg"
                sx={{
                    width: '500px',
                    borderRadius: '20px',
                    margin: '10px',
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
                }}

                endDecorator={<ColorLens />}
                onChange={buscarProyectos}
            >
            </Input>

            
            <Typography 
                level="h1"
                sx={{ margin: '10px'}}
            >Mis proyectos</Typography>
            
            <Box style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '5px',
                maxHeight: '86vh', // Usar minHeight en lugar de height
                overflowY: 'auto',
                alignItems: 'stretch',
                boxSizing: 'border-box'
            }}>
                {arrayFilter.map((proy) => (

                    <ProyectComponent
                        key={proy.id}
                        proy={proy}
                    />

                ))}
            </Box>
        </Box>
    );
}
