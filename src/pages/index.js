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
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 400,
    marginLeft: '30px',
    marginRight: '30px',
    marginBottom: '30px',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '20px',
      marginRight: '20px',
      marginBottom: '20px'
    }
  },
  media: {
    height: 140,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px'
  },
  sideBar: {
    display: 'inline',
    flexGrow: 1,
    minWidth: 200,
    maxWidth: 250,
    maxHeight: '100%',
    backgroundColor: '#cccccc',
    borderColor: '#cecece',
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
    textAlign: 'center',
    borderColor: '#cecece',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 620,
      minWidth: 310,
    }
  },
  center: {
    textAlign: 'center',
    backgroundColor: '#0065ff',
    marginTop: '0px',
    padding: '10px',
    color: 'white',
    fontWeight: 300,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '10px',
      paddingRight: '10px',
    }
  },
  centerTwo: {
    textAlign: 'center',
    paddingLeft: '20px',
    paddingRight: '20px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '10px',
      paddingRight: '10px',
    }
  },
  text: {
    textAlign: 'justify',
    paddingLeft: '25px',
    paddingRight: '25px',
    textIndent: '30px',
    lineHeight: 1.7,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left',
      textIndent: '0px',
    }
  },
  picture: {
    display: 'block',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
  }
}));




const IndexPage = () => {
  const classes = useStyles()

  const icons = (i) => {
    switch(i){
      case 0: 
        return <EmailIcon/>;
      case 1:
        return <MenuBookIcon/>
      case 2:
        return <GitHubIcon/>;
      case 3:
        return <TwitterIcon/>;
      case 4: 
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
        return "https://medium.com/@stevenkoblinskiw";
      case 2:
        return "https://github.com/Koblinskis";
      case 3:
        return "https://twitter.com/KoblinskiSteven";
      case 4: 
        return "https://www.linkedin.com/in/s-michael-koblinski-53a95519b/";
      default:
        return
    }
  }

  const projectLinks = (i) => {
    switch(i){
      case 0:
        return "https://competent-thompson-123cfb.netlify.com/";
      case 1:
        return "https://newintlfoods.com/";
      case 2: 
        return "https://ecstatic-easley-06cd2c.netlify.com/";
      default:
        return "https://github.com/Koblinskis"
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
          <p className={classes.centerTwo}>S. Michael Koblinski</p>
          <List>
            {['Email', 'Blog', 'GitHub', 'Twitter', 'LinkedIn'].map((text, index) => (
              <div><Divider /><Link href={links(index)} >
              <ListItem button key={text} href={links(index)}  >
                <ListItemIcon>{icons(index)}</ListItemIcon>
                <ListItemText primary={text} />
              
  
              </ListItem></Link></div>
            
            ))}
            <Divider />
          </List>
          <p className={classes.centerTwo}>Created by S. Michael Koblinski</p>
        </Box>
        <Box borderTop={1} borderBottom={2} borderRight={2} borderColor='#cecece' className={classes.content} component="div">

          <h1 className={classes.center}>About Me</h1>
          <p className={classes.text}>I am a Full-Stack developer seeking new challenges to further my growth. I first worked with  JavaScript in 2015, but began full-time Full-Stack JavaScript development over six months ago  and in that time I have completed over 150 hours of instructor-led courses, 15 projects, published  a blog, collaborated with other developers, participated in Hacktoberfest 2019, and have  independently studied Computer Science and Data Structures. I have mastered tools and  frameworks such as React JS, Gatsby, NodeJS, Express, and MongoDB.</p>
          
          <h1 id="projects" className={classes.center}>Projects</h1>
          <p>Here are some of my most recent projects.</p>
          <Grid container spacing={0}>
            
            <Grid item md={6} sm={6} xs={12}>
              <Card className={classes.root}>
                <CardActionArea href={projectLinks(2)}>
                  <CardMedia
                    className={classes.media}
                    image={require("../images/Dionysus.jpg")}
                    title="Dionysus"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Dionysus
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Dionysus is a web application that allows users to create secure accounts and store data.
                    </Typography>
                  </CardContent>
                  </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link href={projectLinks(2)}>Go To Site</Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <Card className={classes.root}>
                <CardActionArea href={projectLinks(1)}>
                  <CardMedia
                    className={classes.media}
                    image={require("../images/New-foods.jpg")}
                    title="New International Foods"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      New International Foods
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Catalog site for New International Foods, the #1 distributor of Asian foods in the eastern United States market. Made with Gatsby.
                    </Typography>
                  </CardContent>
                  </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link href={projectLinks(1)}>Go To Site</Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <Card className={classes.root}>
                <CardActionArea href={projectLinks(0)}>
                  <CardMedia
                    className={classes.media}
                    image={require("../images/BlogVBlog.jpg")}
                    title="Blog V Blog"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Blog V Blog
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      A website where users pick one out of two randomly chosen blog titles, in the same category, that they find the most interesting
                    </Typography>
                  </CardContent>
                  </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link href={projectLinks(0)}>Go To Site</Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <Card className={classes.root}>
                
              <CardActionArea href={projectLinks(3)}>
                  <CardMedia
                    className={classes.media}
                    image={require("../images/github.jpg")}
                    title="Github"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      And Many More
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Check my GitHub to see more projects.
                    </Typography>
                  </CardContent>
                  </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link href={projectLinks(3)}>Go To Site</Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          <h1 id="blogs" className={classes.center}>Blog Articles</h1>

          <h4>Here are some blog articles that I have authored. Follow me on <a href="https://medium.com/@stevenkoblinskiw">Medium</a>.</h4>
              <ul style={{textAlign: 'left', fontSize: '20px', lineHeight: '2'}}>
                <li><a href={blogLinks(2)}>Inheritance and the Prototype Chain</a></li>
                <li><a href={blogLinks(3)}>Closures In JavaScript</a></li>
                <li><a href={blogLinks(1)}>The JavaScript Event Loop</a></li>
                <li><a href={blogLinks(0)}>The Benefits of Pure Functions in JavaScript</a></li>
              </ul>
        </Box>
      </div>
    </Layout>
  )
}
 

export default IndexPage
