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
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <Header className={classes.hero} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
