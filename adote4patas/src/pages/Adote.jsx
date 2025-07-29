import React, { useState, useEffect } from 'react'; 
import { Typography, Pagination, Fab, Box, CircularProgress } from "@mui/material"; 
import AddIcon from '@mui/icons-material/Add';
import CardAdoption from "../components/CardAdoption";



function Adote(){
    const [todosAnimais, setTodosAnimais] = useState([]); 
    const [paginaAtual, setPaginaAtual] = useState(1);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchAnimais = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/animais'); 

                if (!response.ok) {
                    throw new Error('Falha na resposta da rede. Status: ' + response.status);
                }
                
                const temp = await response.json();
                const data = temp.filter(animal => animal.classificacao === "adt");
                setTodosAnimais(data); 
            } catch (err) {
                console.error("Erro ao buscar animais:", err);
                setError(err.message); 
            } finally {
                setLoading(false);
            }
        };

        fetchAnimais();
    }, []);

    const animaisPorPagina = 3;
    const indiceInicio = (paginaAtual - 1) * animaisPorPagina;
    const indiceFim = indiceInicio + animaisPorPagina;
    const animaisVisiveis = todosAnimais.slice(indiceInicio, indiceFim);

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <CircularProgress />
                <Typography sx={{ ml: 2 }}>Carregando animais...</Typography>
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <Typography color="error">Erro ao carregar dados: {error}</Typography>
            </Box>
        );
    }

    return (
        <>
            <main>
                <div className="side2">
                    <div>
                        <Typography variant='h4' sx={{ margin: '0' }}>
                            Animais para adoção
                        </Typography>
                    </div>
                    
                    <div>
                        <Typography variant="body1" sx={{color: '#8C875E', maxWidth: '928px'}}>
                            Conheça nossos amigos de quatro patas que estão procurando um lar amoroso. Cada um tem uma história única e está pronto para trazer alegria e companherismo para sua vida.
                        </Typography>
                    </div>

                    <div className="adopt-side">
                        {animaisVisiveis.map(animal => (
                            <CardAdoption
                            key={animal.id}
                            img={`http://localhost:3000${animal.imgUrl}`} 
                            sexo={animal.sexo}
                            nome={animal.nome}
                            tipo={animal.tipo}
                            info={animal.info}
                            />
                        ))}
                    </div>
                    

                    <div className='super'>
                        <Box sx={{ '& > :not(style)': { m: 1 } }}>
                            <Fab color="primary" aria-label="add">
                                <AddIcon />
                            </Fab>
                        </Box>
                    </div>
                </div>

                <Pagination
                    count={Math.ceil(todosAnimais.length / animaisPorPagina)}
                    page={paginaAtual}
                    onChange={(event, value) => setPaginaAtual(value)}
                    sx={{ '& .MuiPaginationItem-root': { color: 'black', borderColor: '#F7DB05',}, '& .Mui-selected': {backgroundColor: '#F7DB05 !important', color: 'black', fontWeight: 'bold', borderColor: '#F7DB05',} }}
                />
            </main>
        </>
    );
}

export default Adote;