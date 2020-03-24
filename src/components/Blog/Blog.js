import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core'

import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact'

const useStyles = makeStyles({
    navbar: {
        backgroundColor: "#333",
        color: "#fff",
        overflow: "auto",
        "& a": {
            color: "#fff"
        },
        "& h1": {
            paddingTop: "20px",
            float: "left"
        },
        "& ul": {
            listStyle: "none",
            margin: "0",
            float: "right"
        }, 
        "& ul li": {
            float: "left"
        },
        "& ul li a": {
            display: "block",
            padding: "20px",
            textAlign: "center"
        },

        "& ul li a:hover": {
            background: "#444",
            color: "#f7c08a",
            textShadow: "#FC0 1px 0 10px"
        },
    },
    footer: {

        textAlign: "center",
        background: "#444",
        color: "white",
        padding: "20px"
    },
    clr: {
        clear: "both"
    }
});

const Blog = () => {
    const classes = useStyles();
    return (
        <>
            <header>
                <nav className={classes.navbar}>
                    <div className= "container">
                        <h1 classes={classes.logo}>
                            <Link to="/">
                                Must See IRAN
                            </Link>
                        </h1>
                        <ul>
                            <li>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <Switch>
                <Route path = "/" exact component = {Home}/>
                <Route path = "/about" exact component = {About}/>
                <Route path = "/contact" exact component = {Contact}/>
            </Switch>
            <div className = {classes.clr}></div>
            <footer className = {classes.footer}>
                <p>ABOuZAR &copy; 2020, All Rights Reserved.</p>
            </footer>
        </>
    )
};

export default Blog;