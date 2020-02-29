import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import AImage from '../components/Aimage';
import BImage from '../components/Bimage';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  sideBar: {
    display: 'inline',
    flexGrow: 1,
    minWidth: 200,
    maxWidth: 250,
    maxHeight: '100%',
    backgroundColor: '#cccccc',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  content: {
    flexGrow: 1,
    maxWidth: 710,
    minWidth: 600,
    maxHeight: '100%',
    backgroundColor: '#f2f2f2',
    textAlign: 'center'
  },
  center: {
    textAlign: 'center',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  text: {
    textAlign: 'justify',
    paddingLeft: '25px',
    paddingRight: '25px',
    textIndent: '30px'
  }
}));




const IndexPage = () => {
  const classes = useStyles()

  const icons = (i) => {
    switch(i){
      case 0:
        return <GitHubIcon/>;
      case 1:
        return <TwitterIcon/>;
      case 2: 
        return <LinkedInIcon/>;
      default:
        return
    }
  }

  const links = (i) => {
    switch(i){
      case 0:
        return "https://github.com/Koblinskis";
      case 1:
        return "https://twitter.com/KoblinskiSteven";
      case 2: 
        return "https://www.linkedin.com/in/s-michael-koblinski-53a95519b/";
      default:
        return
    }
  }

  const projectLinks = (i) => {
    switch(i){
      case 0:
        return "";
      case 1:
        return "";
      case 2: 
        return "";
      default:
        return
    }
  }

  const blogLinks = (i) => {
    switch(i){
      case 0:
        return "https://medium.com/@stevenkoblinskiw/the-benefits-of-pure-functions-in-javascript-5c9edf7b61bf";
      case 1:
        return "https://medium.com/@stevenkoblinskiw/the-javascript-event-loop-2e0fb6e6c0ba";
      case 2: 
        return "https://medium.com/@stevenkoblinskiw/inheritance-and-the-prototype-chain-901798f95ca6";
      case 3:
        return "https://medium.com/@stevenkoblinskiw/closures-in-javascript-5cfd57f8cdef";
      default:
        return
    }
  }

  return (
    <Layout >
      <SEO title="Home" />
      <div className={classes.container}>
        <Box border={1} borderRight={0} borderBottom={2} className={classes.sideBar} component="div">
          <AImage />
          <p className={classes.center}>Michael Koblinski</p>
          <List>
            {['Git Hub', 'Twitter', 'Linkedin'].map((text, index) => (
              <div><Divider /><Link href={links(index)} >
              <ListItem button key={text} href={links(index)}  >
                <ListItemIcon>{icons(index)}</ListItemIcon>
                <ListItemText primary={text} />
              
  
              </ListItem></Link></div>
            
            ))}
            <Divider />
          </List>
          <p className={classes.center}>Created by Michael Koblinski</p>
        </Box>
        <Box border={1} borderBottom={2} borderRight={2} className={classes.content} component="div">
          <BImage />
          <h1 className={classes.center}>About Me</h1>
          <p className={classes.text}>Hi, my name is Steven Michael Koblinski and I am going to begin this by talking about myself. I first started programming in high school when I decided to take a class on Web Page Design and Game Programming. After high school I pursued programming as I had a passion for it. Since then I have become proficient in both front-end and back-end along with server databases.</p>
          
          <h1>Projects</h1>
          <p className={classes.text}>This is a list of some of my more recent projects:
          <ol>
          <li><Link href={projectLinks(0)}>Blog Vs Blog</Link></li>
          <li><Link href={projectLinks(1)}>New International Foods</Link></li>
          </ol>
          </p>
        </Box>
        <Box>
          <h1 className={classes.center}>Blogs</h1>
          <ol>
            <li><Link href={blogLinks(0)}>The Benefits of Pure Functions in JavaScript</Link></li>
            <li><Link href={blogLinks(1)}>The JavaScript Event Loop</Link></li>
            <li><Link href={blogLinks(2)}>Inheritance and the Prototype Chain</Link></li>
            <li><Link href={blogLinks(2)}>Closures In JavaScript</Link></li>
          </ol>
        </Box>
      </div>
    </Layout>
  )
}
 

export default IndexPage
