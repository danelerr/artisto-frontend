import Box from '@mui/joy/Box';
import MenuProyectosModal from './modals/MenuProyectosModal.jsx';
import { useNavigate } from 'react-router-dom';






export default function ProyectComponent({ proy }) {

    const navigate = useNavigate();

    let imagenURL;
    if (proy.imagen) {
        const blob = new Blob([new Uint8Array(proy.imagen.data)], { type: 'image/png' });
        imagenURL = URL.createObjectURL(blob);
    }

    const handleClick = (event) => {

        let x = event.target.className;
        // console.log(x);
        if (typeof (x) == 'string' && x.indexOf('clasePROXXX111') != -1) {
            navigate(`/generador/${proy.id}`);
        }
    };

    return (
        <Box
            className="clasePROXXX111"
            sx={{
                border: '2px solid white',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '250px',
                minHeight: '250px',
                margin: '10px',
            }}
            onClick={(e) => handleClick(e)}
        >
            <Box
                sx={{ backgroundColor: 'none', height: '160px' }}
                className="clasePROXXX111"
            >
                {proy.imagen
                    ? <img style={{ 
                        marginRight: '0.5rem',
                        position: 'relative', 
                        top: '1px', 
                        borderTopRightRadius: '10%',
                        borderTopLeftRadius: '10%' 
                    }} width="100%" height="100%" className="clasePROXXX111" src={imagenURL} alt="nombre" />
                    : <img width="100%" height="100%" className="clasePROXXX111" src="default-proyect-icon.svg" alt="nombre" />
                }
            </Box>

            <Box
                sx={{
                    flex: '1', width: '100%',
                    backgroundColor: '#101622', display: 'flex',
                    alignItems: 'center',
                    maxWidth: '100%',
                    justifyContent: 'space-between',
                    borderBottomLeftRadius: '20px',
                    borderBottomRightRadius: '20px',
                }}
                className="clasePROXXX111"
            >

                <Box style={{ height: 'auto', paddingLeft: '10px', overflow: 'hidden', wordWrap: 'break-word', fontFamily: '"Roboto"', }}
                    className="clasePROXXX111">
                    <p className="clasePROXXX111">
                        {proy.nombre}
                    </p>
                </Box>

                <Box style={{ height: 'auto', paddingRight: '10px' }}>
                    <MenuProyectosModal proy={proy} />
                </Box>
            </Box>
        </Box>
    );
}