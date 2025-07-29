import React, { useState, useEffect } from 'react';
import { Typography, Pagination, Box, CircularProgress } from "@mui/material";
import CardSponsorship from '../components/CardSponsorship';
import Btn from '../components/Button';

import FavoriteIcon from '@mui/icons-material/Favorite';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import HomeIcon from '@mui/icons-material/Home';

function Apadrinhe() {
    const [animaisParaApadrinhar, setAnimaisParaApadrinhar] = useState([]);
    const [paginaAtual, setPaginaAtual] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
+
    useEffect(() => {
        const fetchAnimais = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/animais');
                if (!response.ok) {
                    throw new Error('Falha na resposta da rede. Status: ' + response.status);
                }
                const temp = await response.json();
                const data = temp.filter(animal => animal.classificacao === "apd");
                setAnimaisParaApadrinhar(data);
            } catch (err) {
                console.error("Erro ao buscar animais para apadrinhar:", err);
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
    const animaisVisiveis = animaisParaApadrinhar.slice(indiceInicio, indiceFim);

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
                        <Typography variant='h4'>
                            Seja um padrinho ou madrinha!
                        </Typography>
                        <Typography variant='body1' sx={{ margin: '20px 0' }}>
                            Ajude nosso trabalho doando um valor, ração, produtos de limpeza e medicamentos.
                        </Typography>
                    </div>

                    <div>
                        <Typography variant='h6'>
                            Pets disponíveis para apadrinhamento
                        </Typography>
                    </div>

                    <div className="adopt-side">
                        {animaisVisiveis.map(animal => (
                            <CardSponsorship
                                key={animal.id}
                                img={`http://localhost:3000${animal.imgUrl}`} 
                                nome={animal.nome}
                                sexo={animal.sexo}
                                tipo={animal.tipo}
                                info={animal.info}
                            />
                        ))}
                    </div>
                </div>
                
                <Pagination
                    count={Math.ceil(animaisParaApadrinhar.length / animaisPorPagina)}
                    page={paginaAtual}
                    onChange={(event, value) => setPaginaAtual(value)}
                    sx={{ my: 4, '& .MuiPaginationItem-root': { color: 'black', borderColor: '#F7DB05', }, '& .Mui-selected': { backgroundColor: '#F7DB05 !important', color: 'black', fontWeight: 'bold', borderColor: '#F7DB05', } }}
                />

                <div className="side2" style={{borderTop: '1px solid #ccc', paddingTop: '2rem'}}>
                     <div>
                        <Typography variant='h6'>
                            Como funciona o apadrinhamento
                        </Typography>
                        <Typography variant='body1' sx={{ margin: '20px 0' }}>
                            Você pode contribuir com o valor integral ou parcial (qualquer quantia é bem-vinda) de uma castração, vacinações, ração ou medicamentos.
                        </Typography>
                    </div>

                    <div>
                        <Typography variant='h6'>
                            Benefícios do apadrinhamento
                        </Typography>
                        <div className='steps-cont'>
                            <div className='step'>
                                <FavoriteIcon sx={{ margin: '0' }} />
                                <h4>Impacto Direto</h4>
                                <p>A sua contribuição apoia diretamente o cuidado dos pets.</p>
                            </div>
                            <div className='step'>
                                <PetsOutlinedIcon sx={{ margin: '0' }} />
                                <h4>Conexão Pessoal</h4>
                                <p>Crie um vínculo especial com o animal de estimação que você apadrinha.</p>
                            </div>
                            <div className='step'>
                                <HomeIcon sx={{ margin: '0' }} />
                                <h4>Atualizações sobre o seu pet</h4>
                                <p>Receba atualizações da condição e fotos do pet que você apadrinha.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{width: '70%', marginTop: '2rem'}}>
                    <Typography variant='h6' sx={{textAlign: 'center', mb: 2}}>
                        Escolha o apadrinhamento
                    </Typography>
                    <div className='steps-cont'>
                        <div className='step apadrinhe-card'>
                            <span>Cachorro pequeno porte</span>
                            <h1>R$ 200</h1>
                            <Btn content={'Apadrinhar'} />
                        </div>
                        <div className='step apadrinhe-card'>
                            <span>Gato</span>
                            <h1>R$ 150</h1>
                            <Btn content={'Apadrinhar'} />
                        </div>
                        <div className='step apadrinhe-card'>
                            <span>Gata</span>
                            <h1>R$ 200</h1>
                            <Btn content={'Apadrinhar'} />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Apadrinhe;