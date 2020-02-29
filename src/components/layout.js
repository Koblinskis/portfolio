/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from '@material-ui/core/styles';

import Header from "./header"
import "./layout.css"

const useStyles = makeStyles(theme => ({
  hero: {
    minWidth: '100%',
  },
  pageSize: {
    margin: `0 auto`,
    maxWidth: 960,
    [theme.breakpoints.down('xs')]: {
      maxWidth: 320,
      margin: `0 auto`,
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: 720,
      margin: `0 auto`,
    }
  }
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <div className={classes.pageSize}>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
