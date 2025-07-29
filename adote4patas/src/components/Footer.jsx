import Link from '@mui/material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Typography } from '@mui/material';

function Footer(){
    return(
        <>
            <footer className='footer'>
              <div className='fst-link-cont'>
                <div className='fst-link'>
                  <Link href="#" underline="none" sx={{color: '#b58947'}}>
                    Políticas
                  </Link>
                </div>
                <div className='fst-link'>
                  <Link href="#" underline="none" sx={{color: '#b58947'}}>
                    Termos de Uso
                  </Link>
                </div>
                <div className='fst-link'>
                  <Link href="/contatos" underline="none" sx={{color: '#b58947'}}>
                    Contato
                  </Link>
                </div>
              </div>
              <div className='redes-cont'>
                <Link href="https://www.instagram.com/ajudeum4patas?igsh=NzdpdTV4dHM4Mnhm" underline="none" sx={{color: '#b58947'}}>
                  <InstagramIcon sx={{fontSize: '2rem'}} />
                </Link>
              </div>
              <div className='fst-link-cont'>
                <Typography variant="body2" sx={{color: '#b58947', margin: '10px'}}>
                  {"\u00A9"} 2025 Ajude um Quatro Patas. Todos os direitos reservados.
                </Typography>  
              </div>
            </footer>
        </>
    );
}

export default Footer;