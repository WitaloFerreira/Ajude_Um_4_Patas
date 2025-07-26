import React, { useState } from 'react';
import { Typography, ToggleButton, TextField, Box, Button } from "@mui/material";

import Btn from '../components/Button.jsx';

function Doacoes(){

    const [valorSelecionado, setValorSelecionado] = useState(null);

    const handleClick = (valor) => {
        setValorSelecionado(valor);
    };

    return(
        <>
            <main>
                <div className='side2'>
                    <div>
                        <Typography variant='h4' sx={{ margin: '0' }}>
                            Faça uma doação
                        </Typography>
                    </div>
                    
                    <div>
                        <Typography variant="body1" sx={{color: '#8C875E', maxWidth: '928px'}}>
                            Sua doação é essencial para continuarmos cuidando dos animais resgatados. Cada contribuição, por menor que seja, faz uma grande diferença na vida deles.
                        </Typography>
                    </div>
                    
                    <div>
                        <Typography variant='h6'>
                            Escolha o valor da sua doação
                        </Typography>
                    </div>
                    

                    <div>
                        <Box sx={{display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '20px'}}>
                            {['25', '50', '100', 'outro'].map((valor) => (
                            <ToggleButton
                            key={valor}
                            value={valor}
                            selected={valorSelecionado === valor}
                            onChange={() => handleClick(valor)}
                            sx={{
                                borderRadius: '12px', // bordas arredondadas
                                border: '1px solid #ddd', // borda individual
                                color: '#5c5c5c',
                                '&.Mui-selected': {
                                backgroundColor: '#f0f0f0', // cor ao selecionar
                                borderColor: '#aaa'
                                }
                            }}>
                                {valor === 'outro' ? 'OUTRO VALOR' : `R$ ${valor}`}
                            </ToggleButton>
                        ))}
                        </Box>
                    </div>

                    <div className='text-field'>
                        <span>Outro valor</span>

                        <TextField id="outlined-basic" label="" variant="outlined"/>
                    </div>

                    <div>
                        <Typography variant='h6'>
                            Escolha a forma de pagamento
                        </Typography>
                    </div>

                    <div>
                        <Box sx={{display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '20px'}}>
                            {['Cartão de Credito', 'Boleto Bancário', 'Pix'].map((valor) => (
                            <ToggleButton
                            key={valor}
                            value={valor}
                            selected={valorSelecionado === valor}
                            onChange={() => handleClick(valor)}
                            sx={{
                                borderRadius: '12px', 
                                border: '1px solid #ddd', 
                                color: '#5c5c5c',
                                '&.Mui-selected': {
                                backgroundColor: '#f0f0f0',
                                borderColor: '#aaa'
                                }
                            }}>
                                {valor}
                            </ToggleButton>
                        ))}
                        </Box>
                    </div>

                    <Box component='form' noValidate autoComplete='off' className='text-field'>
                        <span>Nome Completo</span>

                        <TextField required id="outlined-required" label="Digite seu nome" defaultValue=""/>
                    </Box>

                    <Box component='form' noValidate autoComplete='off' className='text-field'>
                        <span>E-mail</span>

                        <TextField required id="outlined-required" label="Digite seu e-mail" defaultValue=""/>
                    </Box>

                    <Box component='form' noValidate autoComplete='off' className='text-field'>
                        <span>CPF</span>

                        <TextField required id="outlined-required" label="Digite seu CPF" defaultValue=""/>
                    </Box>

                    <Box component='form' noValidate autoComplete='off' className='text-field'>
                        <span>Telefone</span>

                        <TextField required id="outlined-required" label="Digite seu telefone" defaultValue="(xx) xxxx-xxxx "/>
                    </Box>

                    <div style={{}}>
                        <Btn content={'Doar'}/>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Doacoes;