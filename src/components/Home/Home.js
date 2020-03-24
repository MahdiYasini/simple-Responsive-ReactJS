import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Link, Switch, Route } from 'react-router-dom';

import { GiHamburger } from "react-icons/gi";
import { FaHotel } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";

import showCaseImageUrl from '../../assets/images/showCaseImage.jpg';
import learnMoreImageUrl from '../../assets/images/learnMore.jpg'

const useStyles = makeStyles({
    setSpan: {
        color: "#f7c08a"
    },
    showCase: {
        height: "91vh",
        background: `url(${showCaseImageUrl}) no-repeat center center/cover`,
    },
    showCaseContent: {
        color: "#fff",
        textAlign: "center",
        paddingTop: "170px",
        "& h1": {
            fontSize: "60px",
            lineHeight: "1.2em"
        },
        "& p": {
            fontSize: "20px",
            lineHeight: "1.7em"
        }
    },
    addBlur: {
        backdropFilter: "blur(4px) contrast(.9)",
        width: "60%",
        margin: "0 auto",
        borderRadius: "10px",
        padding: "10px"
    },
    homeInfo: {
        height: "50vh"
    },
    infoImg: {
        float: "left",
        width: "50%",
        background: `url(${learnMoreImageUrl})  no-repeat center center/cover`,
        minHeight: "100%"
    },
    infoContent: {
        background: "#333",
        color: "#fff",
        float: "right",
        width: "50%",
        height: "100%",
        textAlign: "center",
        padding: "50px 30px",
        overflow: "hidden",
        "& p": {
            paddingBottom: "30px"
        }
    },
    iconSize: {
        fontSize: "50px"
    },
    box: {
        float: "left",
        width: "33.3%",
        padding: "50px",
        textAlign: "center",
        "& h3": {
            marginBottom: "10px "
        }
    }
});

const Blog = () => {
    const classes = useStyles();
    return (
        <>
            <header>
                <div className={classes.showCase}>
                    <div className="container">
                        <div className={classes.showCaseContent}>
                            <div className={classes.addBlur}>
                                <h1>Now it's time to see
                                    <span className={classes.setSpan}> Iran</span>
                                </h1>
                                <p>A country of Food, Colors, Seasons and Palaces</p>
                                <Link className="btn" to="/about">
                                    About this lovely country.
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className={classes.homeInfo}>
                <div className={classes.infoImg}></div>
                <div className={classes.infoContent}>
                    <h2>
                        Iranian
                        <span className={classes.setSpan}> Hospitality </span>
                        Will Amaze You!
                    </h2>
                    <p>
                        There is a Persian saying which goes:
                        “A guest is loved by God” and this is a true belief in Persian culture.
                        As a tourist, you will sense the kindness of Iranian people toward foreigners.
                        They love to receive you warmly in their country and you will constantly get invited to people’s houses while traveling in Iran!
                    </p>
                    <Link className="btn btnLight" to="/about">
                        READ MORE.
                    </Link>
                </div>
            </section>
            <section className={classes.features}>
                <div className={classes.box}>
                    <GiHamburger className={classes.iconSize} />
                    <h3>
                        Foods
                    </h3>
                    <p>
                        Lots of delicious traditional foods, fast foods and drinks waiting for you.
                    </p>
                </div>
                <div className={classes.box}>
                    <FaHotel className={classes.iconSize} />
                    <h3>
                        Hotels
                    </h3>
                    <p>
                        Palace, home, sweet house, traditional tent, traditional house. Which one of them do you want?
                    </p>
                </div>
                <div className={classes.box}>
                    <FaHistory className={classes.iconSize} />
                    <h3>
                        History
                    </h3>
                    <p>
                        Discover the most historic geographical location in the world.
                    </p>
                </div>
            </section>
        </>
    )
};

export default Blog;