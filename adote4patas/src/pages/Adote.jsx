import React, { useState} from 'react';
import { Typography, Pagination, Fab, Box } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import CardAdoption from "../components/CardAdoption";

import hercules from '../assets/Hercules.jpg';



function Adote(){

    const [paginaAtual, setPaginaAtual] = useState(1);

    const todosAnimais = [
        { id: 1, nome: 'Hércules', categoria: 'Cão', img: hercules },
        { id: 2, nome: 'Hércules', categoria: 'Cão', img: hercules },
        { id: 3, nome: 'Hércules', categoria: 'Cão', img: hercules },
        { id: 4, nome: 'Hércules', categoria: 'Cão', img: hercules },
        { id: 5, nome: 'Hércules', categoria: 'Cão', img: hercules },
        { id: 6, nome: 'Hércules', categoria: 'Cão', img: hercules },
    ];

    const animaisPorPagina = 3;
    const indiceInicio = (paginaAtual - 1) * animaisPorPagina;
    const indiceFim = indiceInicio + animaisPorPagina;
    const animaisVisiveis = todosAnimais.slice(indiceInicio, indiceFim);

     
    console.log('Página atual para renderização:', paginaAtual);


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
                            img={animal.img}
                            nome={animal.nome}
                            categoria={animal.categoria}/>
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
                sx={{ '& .MuiPaginationItem-root': { color: 'black', borderColor: '#F7DB05',}, '& .Mui-selected': {backgroundColor: '#F7DB05 !important', color: 'black', fontWeight: 'bold', borderColor: '#F7DB05',} }}/>
            </main>
        </>
    );
}

export default Adote;