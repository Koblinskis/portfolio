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
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
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
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 620,
      minWidth: 310,
    }
  },
  center: {
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
        return "https://competent-thompson-123cfb.netlify.com/";
      case 1:
        return "https://newintlfoods.com/";
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
          <div className={classes.picture}>
          <BImage  />

          </div>
          <h1 className={classes.center}>About Me</h1>
          <p className={classes.text}>Junior developer seeking full-time employment as a full-stack developer. Mentored under senior developer in a structured training program including weekly attendance meetings and completion of goals. Completion of several course certificates and personal projects. Projects include both pair-programming and single projects exhibiting both front end and back end knowledge. Proficient in React, Gatsby, React Hooks, as well as NodeJS, mongoDB, REST APIs.</p>
          
          <h1>Projects</h1>
          <p className={classes.text}>This is a list of some of my more recent projects:</p>
          <Grid container spacing={0}>
            <Grid item md={6} sm={6} xs={12}>
              <Card className={classes.root}>
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
                <CardActions>
                  <Button size="small" color="primary">
                    <Link href={projectLinks(0)}>Learn More</Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <Card className={classes.root}>
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
                      A website made for a company to allow them to sell products online
                    </Typography>
                  </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link href={projectLinks(1)}>Learn More</Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          <h1 className={classes.center}>Blogs</h1>
          <Grid container spacing={0}>
            <Grid item md={6} sm={6} xs={12}>
              <Card className={classes.root}>
                  <CardMedia
                    className={classes.media}
                    image={require("../images/pure-functions.jpg")}
                    title="The Benefits of Pure Functions in JavaScript"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      The Benefits of Pure Functions in JavaScript
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                       the same category, that they find the most interesting
                    </Typography>
                  </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link href={blogLinks(0)}>Learn More</Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <Card className={classes.root}>
                  <CardMedia
                    className={classes.media}
                    image={require("../images/event-loop.jpg")}
                    title="The JavaScript Event Loop"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      The JavaScript Event Loop
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      A website made for a company to allow them to sell products online
                    </Typography>
                  </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link href={blogLinks(1)}>Learn More</Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <Card className={classes.root}>
                  <CardMedia
                    className={classes.media}
                    image={require("../images/prototype-chain.jpg")}
                    title="Inheritance and the Prototype Chain"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Inheritance and the Prototype Chain
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      A website made for a company to allow them to sell products online
                    </Typography>
                  </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link href={blogLinks(2)}>Learn More</Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <Card className={classes.root}>
                  <CardMedia
                    className={classes.media}
                    image={require("../images/closures.jpg")}
                    title="Closures In JavaScript"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Closures In JavaScript
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      A website made for a company to allow them to sell products online
                    </Typography>
                  </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link href={blogLinks(3)}>Learn More</Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Layout>
  )
}
 

export default IndexPage
