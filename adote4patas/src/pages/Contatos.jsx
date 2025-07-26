import React from 'react';
import '../App.css';
import { Box, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';


function Contatos(){
    return(
        <>
            <main>
                <div className='side2'>
                    <Box sx={{  margin: '50px 0' }}>
                        <Typography variant='h4'>
                            Entre em contato conosco!
                        </Typography>
                        <Typography variant='body1' sx={{ margin: '20px 0' }}>
                            Se você tiver alguma dúvida ou precisar de ajuda, entre em contato conosco através dos seguintes canais:
                        </Typography>
                    </Box>

                    <Box sx={{display: 'flex', flexDirection: 'row', gap: '10px', margin: '20px'}}>
                        <div>
                            <WhatsAppIcon sx={{ fontSize: '2rem', color: '#171712' }} />
                        </div>
                        <div>
                            <Typography variant='body1' sx={{ marginLeft: '10px' }}>
                                WhatsApp:
                            </Typography>
                            <Typography variant='body1' sx={{ marginLeft: '10px', color: '#8C875E' }}>
                                (xx) xxxx-xxxx
                            </Typography>
                        </div>
                    </Box>

                    <Box sx={{display: 'flex', flexDirection: 'row', gap: '10px', margin: '20px'}}>
                        <div>
                            <InstagramIcon sx={{ fontSize: '2rem', color: '#171712' }} />
                        </div>
                        <div>
                            <Typography variant='body1' sx={{ marginLeft: '10px' }}>
                                Instagram:
                            </Typography>
                            <Typography variant='body1' sx={{ marginLeft: '10px', color: '#8C875E' }}>
                                @ajudeumquatropatas
                            </Typography>
                        </div>
                    </Box>

                    <Box sx={{display: 'flex', flexDirection: 'row', gap: '10px', margin: '20px'}}>
                        <div>
                            <InstagramIcon sx={{ fontSize: '2rem', color: '#171712' }} />
                        </div>
                        <div>
                            <Typography variant='body1' sx={{ marginLeft: '10px' }}>
                                Instagram:
                            </Typography>
                            <Typography variant='body1' sx={{ marginLeft: '10px', color: '#8C875E' }}>
                                @ajudeumquatropatas2
                            </Typography>
                        </div>
                    </Box>
                </div>
                
            </main>
            

        </>
        
    );
}

export default Contatos;