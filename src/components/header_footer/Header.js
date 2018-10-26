import React, { Component } from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from './SideDrawer';

export default class Header extends Component {

  state = {
    drawerOpen: false,
    headerVisible: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if(window.scrollY > 0) {
      this.setState({
        headerVisible: true
      });
    } else {
      this.setState({
        headerVisible: false
      });
    }
  }

  toggleDrawer = (value) => {
    this.setState({
      drawerOpen: value
    });
  };

  render() {
    return (
      <AppBar
        position='fixed'
        style={{
          backgroundColor: this.state.headerVisible ? 'rgba(255, 40, 37, .7)' : 'transparent',
          boxShadow: 'none',
          padding: '10px 0px'
        }}
      >
        <Toolbar>
          <div className='header_logo'>
            <div className='font_righteous header_logo_musix'>Musixpot.</div>
            <div className='header_logo_title'>Your gateway to great music</div>
          </div>

          <IconButton
            aria-label='Menu'
            color="inherit"
            onClick={() => this.toggleDrawer(true)}
          >
            <MenuIcon/>
          </IconButton>

        <SideDrawer
          open={this.state.drawerOpen}
          onClose={(value) => this.toggleDrawer(value)}
        />
        </Toolbar>
      </AppBar>
    )
  }
}
