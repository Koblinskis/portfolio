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

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  sideBar: {
    flexGrow: 1,
    minWidth: 200,
    maxWidth: 250,
    maxHeight: '100%',
    backgroundColor: '#80dfff',
  },
  content: {
    flexGrow: 1,
    maxWidth: 710,
    minWidth: 600,
    maxHeight: '100%',
    backgroundColor: '#b3ffb3',
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
});




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
      case 3: 
        return <FacebookIcon/>;
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
        return "https://github.com/Koblinskis";
      case 3: 
        return "https://github.com/Koblinskis";
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
            {['Git Hub', 'Twitter', 'Linkedin', 'Facebook'].map((text, index) => (
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
          <p className={classes.text}>Lorem ipsum dolor amet crucifix blue bottle everyday carry cliche cronut snackwave helvetica vice sustainable. Farm-to-table organic celiac sartorial poke bushwick pickled photo booth next level 3 wolf moon godard try-hard thundercats poutine pork belly. Raclette squid banjo godard fixie man braid listicle swag woke pok pok. Aesthetic neutra disrupt, iPhone ennui pitchfork seitan roof party polaroid normcore coloring book.

Umami cloud bread gastropub skateboard. Retro narwhal tote bag bushwick farm-to-table brunch portland next level. Direct trade migas chia snackwave, trust fund hammock paleo keffiyeh scenester kinfolk banh mi poutine brooklyn. Mlkshk taiyaki brooklyn raw denim forage hella yuccie shabby chic franzen woke hexagon cornhole salvia. Lo-fi readymade iPhone, kale chips skateboard kogi put a bird on it man braid 3 wolf moon. Coloring book hell of fashion axe messenger bag palo santo ennui actually authentic tacos art party cloud bread kinfolk snackwave stumptown.</p>
          <h1>Projects</h1>
          <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
            frameBorder='0'
            allow='autoplay; encrypted-media'
            allowFullScreen
            title='video'
            height="300"
            width="533"
          />
          <p className={classes.text}>Lorem ipsum dolor amet crucifix blue bottle everyday carry cliche cronut snackwave helvetica vice sustainable. Farm-to-table organic celiac sartorial poke bushwick pickled photo booth next level 3 wolf moon godard try-hard thundercats poutine pork belly. Raclette squid banjo godard fixie man braid listicle swag woke pok pok. Aesthetic neutra disrupt, iPhone ennui pitchfork seitan roof party polaroid normcore coloring book.

Umami cloud bread gastropub skateboard. Retro narwhal tote bag bushwick farm-to-table brunch portlan</p>
        </Box>

      </div>
    </Layout>
  )
}
 

export default IndexPage
