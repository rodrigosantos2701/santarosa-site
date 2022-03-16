import React from 'react';
import styled from 'styled-components'
import { Button, Menu, MenuItem, IconButton} from '@material-ui/core';
import HeaderBar from './headerBar';
import Logo from '../../images/logo.png'
import { Container, ContainerMenu, Img, ItemMenu } from './styled';
import MenuIcon from '@material-ui/icons/Menu';

const menuItems = ['Home', 'A Empresa', 'Escolas', 'Serviços', 'Incluir no Transporte', 'Atendimento']

const Header = ({ page, setPage }) => {

  const isMobile = window.screen.width < 1024
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (index, event) => {
    setPage(index)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <HeaderBar />

      <Container>
        <Img src={Logo} alt='logo' />

        {isMobile ?

          <div>
            <IconButton
              id="demo-positioned-button"
              aria-controls={open ? 'demo-positioned-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <div >

              <MenuIcon style={{fontSize:'32px'}}/>
              </div>
            </IconButton>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              {menuItems.map((item, index) =>
              <div style={{padding:'15px', paddingRight:'30px'}}>
                <MenuItem key={index} onClick={(event) => handleMenu(index, event)}>{item}</MenuItem>
              </div>
              )}
            </Menu>
          </div>

          :

          <ContainerMenu>
            {menuItems.map((item, index) =>
              <ItemMenu>
                <Button key={index} onClick={(event) => handleMenu(index, event)}>{item}</Button>
              </ItemMenu>
            )}
          </ContainerMenu>
        }
      </Container>
    </>
  );
}

export default Header;
