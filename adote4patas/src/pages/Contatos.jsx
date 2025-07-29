import React from 'react';
import '../App.css';
import { Box, Typography, Link } from '@mui/material';
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
                            <Link href="https://wa.me/558899830464" underline="none" variant='body1' sx={{color: '#b58947', marginLeft: '10px'}}>
                                (88) 9830-4647
                            </Link>
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
                            <Link href="https://www.instagram.com/ajudeum4patas?igsh=NzdpdTV4dHM4Mnhm" underline="none" variant='body1' sx={{ marginLeft: '10px', color: '#b58947' }}>
                                @ajudeum4patas
                            </Link>
                        </div>
                    </Box>

                    
                </div>
                
            </main>
            

        </>
        
    );
}

export default Contatos;