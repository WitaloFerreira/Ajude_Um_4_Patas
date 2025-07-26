import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb'; // Icone do Adb

import { Link as RouterLink } from 'react-router-dom';

// Se quiser usar a logo que geramos anteriormente:
import LogoImage from '../assets/logo-mock.png'; // Verifique o caminho correto!

const navLinks = [
  { title: 'Adote', path: '/adotar' },
  { title: 'Apadrinhe', path: '/apadrinhar' },
  { title: 'Doações', path: '/doar'},
  { title: 'Contato', path: '/contatos' } // Corrigido para /contato
];
const settings = ['Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'white', color: '#000', borderBottom: '1px solid hsl(0, 0%, 82%)' }}>
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          {/* LOGO para desktop - Adicionar flexGrow: 1 aqui */}
          {/* Você pode substituir o AdbIcon e Typography pelo seu logo */}
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          {/* Exemplo com a imagem da logo */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <img
              src={LogoImage} // Use a imagem importada
              alt="Logo do Site"
              style={{ height: '40px', objectFit: 'contain' }} // Ajuste o tamanho
            />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: 1, // <--- ADICIONE ESTE ESTILO AQUI
            }}
          >
            Ajude Um 4 Patas
          </Typography>

          {/* Menu de navegação para mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {navLinks.map((link) => (
                <MenuItem key={link.title} component={RouterLink} to={link.path} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{link.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* LOGO para mobile */}
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1, // Mantém flexGrow para mobile, pois o menu hamburger está à esquerda
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Ajude Um 4 Patas
          </Typography>

          {/* Links de navegação para desktop - REMOVA flexGrow: 1 AQUI */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}> {/* Remova flexGrow: 1 daqui */}
            {navLinks.map((link) => (
              <Button
                key={link.title}
                component={RouterLink}
                to={link.path}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block', '&:hover': { backgroundColor: 'whitesmoke' } } }
              >
                {link.title}
              </Button>
            ))}
          </Box>

          {/* Configurações do usuário (Avatar) */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;