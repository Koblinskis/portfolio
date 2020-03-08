import PropTypes from "prop-types"
import React from "react"

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import AImage from '../components/Aimage';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    display: 'block',
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  text: {
    textAlign: 'center'
  }
}));


export default function Header() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const icons = (i) => {
    switch(i){
      case 0: 
        return <EmailIcon/>;
      case 1:
        return <GitHubIcon/>;
      case 2:
        return <TwitterIcon/>;
      case 3: 
        return <LinkedInIcon/>;
      default:
        return
    }
  }

  const links = (i) => {
    switch(i){
      case 0:
        return "mailto:stevenkoblinskiw@gmail.com";
      case 1:
        return "https://github.com/Koblinskis";
      case 2:
        return "https://twitter.com/KoblinskiSteven";
      case 3: 
        return "https://www.linkedin.com/in/s-michael-koblinski-53a95519b/";
      default:
        return
    }
  }

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
    <AImage/>
    <p className={classes.text}>S. Michael Koblinski</p>
      <List>
            {['Email', 'GitHub', 'Twitter', 'LinkedIn'].map((text, index) => (
              <div><Divider /><Link href={links(index)} >
              <ListItem button key={text} href={links(index)} >
                <ListItemIcon>{icons(index)}</ListItemIcon>
                <ListItemText primary={text} />
              
  
              </ListItem></Link></div>
            
            ))}
            <Divider />
          </List>
    </div>
  );

  return (
    <Box 
    component="div"
    className={classes.root} style={{
      margin: `0 auto`,
      marginBottom: '1.45rem',
      maxWidth: '100%',
      padding: `0 0rem`,
    }}>
      <AppBar position="static" style={{
        backgroundColor: "#0066ff"
      }}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon onClick={toggleDrawer('left', true)} />
          </IconButton>
          <div>S. MICHAEL KOBLINSKI</div>
        </Toolbar>
      </AppBar>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </Box>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

