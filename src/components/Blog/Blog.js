import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core'

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
    current: {
        background: "#444",
        textShadow: "#FC0 1px 0 10px",
        "& a": {
            color: "#f7c08a",
        }
    },
    container: {
        margin: "auto",
        maxWidth: "1100px",
        overflow: "auto",
        padding: "0 20px"
    }
});

const Blog = () => {
    const classes = useStyles();
    return (
        <header>
            <nav className={classes.navbar}>
                <div className = {classes.container}>
                <h1 classes={classes.logo}>
                    <Link to="/">
                        Must See IRAN
                    </Link>
                </h1>
                <ul>
                    <li className = {classes.current}>
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
    )
};

export default Blog;