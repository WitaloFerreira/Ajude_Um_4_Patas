import '../App.css';
import { Box, Typography, Stack} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import HomeIcon from '@mui/icons-material/Home';
import Btn from '../components/Button';

import ImagemHome from '../assets/vapo.jpg';
import malu from '../assets/malu.jpeg';
import home1 from '../assets/home1.jpeg';
import home2 from '../assets/home2.jpeg';

import CardHome from '../components/CardHome';

function HomePage() {
  return(
    <>
      <main>
        <section className='side1'>
          <div>
            <img src={ImagemHome} alt="Imagem de um cachorro"  className='img-home'/>
          </div>
          <Box className='side1text' sx={{ p: 4, mt: 4 }}>
            <Typography variant="h3" gutterBottom>
              Adote um amigo de quatro patas
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
              Encontre o companheiro perfeito para sua família e dê um lar amoroso a um animal necessitado.
            </Typography>
          </Box>
        </section>

        <section className='side2'>
          <Box className='how-to' sx={{ p: 4, mt: 4 }}>
            <Typography variant="h3" gutterBottom>
              Como funciona
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
              O processo de adoção é simples e gratificante. Siga estes passos para encontrar seu novo amigo:
            </Typography>
          </Box>

          <div className='steps-cont'>
            <div className='step'>
              <FavoriteIcon sx={{margin: '0'}}/>
              <h4>Encontre seu par perfeito</h4>
              <p>Explore nossa lista de animais disponíveis para adoção e encontre aquele que combina com seu estilo de vida e família.</p>
            </div>
            <div className='step'>
              <PetsOutlinedIcon sx={{margin: '0'}}/>
              <h4>Preencha o formulário</h4>
              <p>Preencha o formulário de adoção com suas informações e expectativas. Nossa equipe entrará em contato para agendar uma visita.</p>
            </div>
            <div className='step'>
              <HomeIcon sx={{margin: '0'}}/>
              <h4>Leve para casa</h4>
              <p>Após a aprovação, você poderá levar seu novo amigo para casa e começar uma nova jornada juntos.</p>
            </div>
          </div>

          <Box>
            <Typography variant="h5" gutterBottom sx={{ margin: '15px' }}>
              Quem somos
            </Typography>

            <Typography variant='body1' gutterBottom sx={{ margin: '15px' }}>
              Somos uma organização não governamental dedicada a resgatar, reabilitar e encontrar lares amorosos para animais abandonados e em situação de risco. Nossa missão é promover o bem-estar animal e conscientizar a sociedade sobre a importância da adoção responsável.
            </Typography>

            <Box className='no-border-cont'>
              <CardHome
                img={home1}
                title={'Nossa História'}
                description={'O abrigo Ajude Um 4 Patas nasceu do olhar sensível e da coragem de Omeinda Ferreira, voluntária incansável na causa animal em Russas/CE. Tudo começou quando ela conheceu um abrigo improvisado, onde cães viviam em condições precárias. Ao ver a realidade daqueles animais, Omeinda não conseguiu ignorar e desde então, passou a ir todos os dias cuidar deles.'}
              />

              <CardHome
                img={home2}
                title={'Nossa Missão'}
                description={'Com o tempo, assumiu sozinha a responsabilidade pelo abrigo. Hoje, cuida de mais de 50 animais, garantindo alimento, higiene, carinho e tratamento para cada um. Mas sua missão vai além do abrigo, ela também ajuda animais em situação de rua, levando para castração, oferecendo os primeiros cuidados e tentando encontrar lares responsáveis.'}
              />

              <CardHome
                img={malu}
                title={'Nossa Visão'}
                description={'Vislumbramos um mundo onde todos os animais sejam tratados com respeito e dignidade, onde não hajam mais animais abandonados e onde a adoção seja a primeira escolha para quem busca um companheiro de quatro patas. Acreditamos que cada animal merece uma chance de ser amado e cuidado como parte da família.'}
              />
            </Box>
          </Box>

          <Stack  spacing = {3} alignItems={'center'} justifyContent={'center'} sx={{ p: 4, mt: 4 }}>
            <Typography variant='h3'>
              Junte-se a nós
            </Typography>

            <Typography>
              Faça parte da nossa comunidade e ajude a transformar a vida de animais necessitados. Seja um voluntário, faça uma doação ou adote um amigo de quatro patas.
            </Typography>
            
            <Btn content={'Saiba Mais'} />
          </Stack>

        </section>
      </main>
    </>
  );
}

export default HomePage;

