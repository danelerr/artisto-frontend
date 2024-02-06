import { useState, useEffect } from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import Add from '@mui/icons-material/Add';
import { useLocation  } from 'react-router-dom';

//crea proyectos y guiones
export default function CrearNuevoProyectoModal() {

    const [open, setOpen] = useState(false);

    const [proyecto, setProyecto] = useState({
        nombre: '',
        descripcion: ''
    });

    
    const location = useLocation();

    const [rutaActual, setRutaActual] = useState(location.pathname);
 

    const handleChange = (e) => {
        setProyecto({...proyecto, [e.target.name]: e.target.value});
    }

    const handleCreate = async (event) => {

        event.preventDefault();


        await fetch(`${import.meta.env.VITE_BACKEND_URL}crear-proyecto`, {
            method: 'POST',
            body: JSON.stringify(proyecto),
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log('submit');
        setOpen(false);
        window.location.reload();
        
    }

    useEffect(() => {
        // Se ejecutará cada vez que la ruta cambie
        setRutaActual(location.pathname);
      }, [location]);
    
    return (
        <>
            <Button
                startDecorator={<Add />}
                size='lg'
                color='primary'
                style={{ 
                    background: 'var(--degree, linear-gradient(253deg, #FFF625 14.48%, #B4FC00 84.94%))', 
                    color: 'black',
                    fontWeight: 'bold', 
                    width: '100%',
                    
                 }}
                onClick={() => {    
                    console.log(rutaActual);
                    setProyecto({
                        nombre: '',
                        descripcion: ''
                    });
                    setOpen(true);
                }}
            >
                Nuevo Proyecto
            </Button>


            <Modal open={open} 
                onClose={() => {setOpen(false)}}>
                <ModalDialog>
                    <DialogTitle> 
                        Crear un nuevo proyecto
                        </DialogTitle>
                    <DialogContent> 
                        Completa los campos para crear el proyecto
                    </DialogContent>

                    <form
                        onSubmit={handleCreate}
                    >   
                        <Stack spacing={2}>
                            <FormControl>
                                <FormLabel>Nombre </FormLabel>
                                <Input name='nombre'  autoFocus required onChange={handleChange} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Descripción</FormLabel>
                                <Input  name='descripcion' onChange={handleChange} />
                            </FormControl>
                            <Button 
                                type="submit"
                                color='primary'
                                sx={{ 
                                    background: 'var(--degree, linear-gradient(253deg, #FFF625 14.48%, #B4FC00 84.94%))', 
                                    color: 'black', 
                                    fontWeight: 'bold', 
                                    width: '100%' 
                                }}
                            >
                                Crear Proyecto
                            </Button>
                        </Stack>
                    </form>
                </ModalDialog>
            </Modal>
        </>
    );
}