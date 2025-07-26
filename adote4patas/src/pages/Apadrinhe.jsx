import { Typography } from '@mui/material';
import CardAdoption from '../components/CardAdoption';
import Btn from '../components/Button';

import FavoriteIcon from '@mui/icons-material/Favorite';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import HomeIcon from '@mui/icons-material/Home';

import Hercules from '../assets/Hercules.jpg';
import malu from '../assets/malu.jpeg';
function Apadrinhe(){

    let animais = [
        { id: 1, nome: 'Hércules', img: Hercules },
        { id: 2, nome: 'Malu', img: malu },
        { id: 4, nome: 'Luna', img: 'luna.jpg' },]

    return (
        <>
            <main>
                <div className="side2">
                    <div>
                        <Typography variant='h4'>
                            Seja um padrinho ou madrinha!
                        </Typography>
                        <Typography variant='body1' sx={{ margin: '20px 0' }}>
                            Ajude nosso trabalho doando um valor, ração, produtos de limpeza e medicamentos
                        </Typography>
                    </div>

                    <div>
                        <Typography variant='h6'>
                            Pets disponíveis para apadrinhamento
                        </Typography>
                    </div>

                    <div className="adopt-side">
                        {animais.map(animal => (
                            <CardAdoption
                            key={animal.id}
                            img={animal.img}
                            nome={animal.nome}
                            categoria={animal.categoria}/>
                        ))}
                    </div>

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
                                <FavoriteIcon sx={{margin: '0'}}/>
                                <h4>Impacto Direto</h4>
                                <p>A sua contribuição apoia diretamente o cuidado dos pets.</p>
                            </div>
                            <div className='step'>
                                <PetsOutlinedIcon sx={{margin: '0'}}/>
                                <h4>Conexão Pessoal</h4>
                                <p>crie um vínculo especial com o animal de estimação que você apadrinha.</p>
                            </div>
                                <div className='step'>
                                <HomeIcon sx={{margin: '0'}}/>
                                <h4>Atualizações sobre o seu pet</h4>
                                <p>Receba atualizações da condição e fotos do pet que você apadrinha</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <Typography variant='h6'>
                            Escolha o apadrinhamento
                    </Typography>
                </div>

                <div style={{width: '70%'}}>
                     <div className='steps-cont'>
                        <div className='step apadrinhe-card'>
                            <span>Cachorro pequeno porte</span>
                            <h1>200R$</h1>
                            <Btn content={'Apadrinhar'} />
                        </div>
                        <div className='step apadrinhe-card'>
                            <span>Gato</span>
                            <h1>150R$</h1>
                            <Btn content={'Apadrinhar'} />
                        </div>
                        <div className='step apadrinhe-card'>
                            <span>Gata</span>
                            <h1>200R$</h1>
                            <Btn content={'Apadrinhar'} />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Apadrinhe;