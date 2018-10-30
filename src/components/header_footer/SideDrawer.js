import React from 'react'

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { scroller } from 'react-scroll';

const SideDrawer = (props) => {

    const scrollToSection = (section) => {
      scroller.scrollTo(section,{
        duration: 1500,
        delay: 100,
        smooth: true,
        offset: -140,
      });
      props.onClose(false)
    }

  return (
    <Drawer
      anchor='right'
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component='nav'>
        <ListItem button onClick={() => scrollToSection('featured')}>
          Event Starts In
        </ListItem>
        <ListItem button onClick={() => scrollToSection('musixinfo')}>
          Event Info
        </ListItem>
        <ListItem button onClick={() => scrollToSection('highlights')}>
          Highlights
        </ListItem>
        <ListItem button onClick={() => scrollToSection('pricing')}>
          Pricing
        </ListItem>
        <ListItem button onClick={() => scrollToSection('location')}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;