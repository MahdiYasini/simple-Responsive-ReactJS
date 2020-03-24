import React from 'react'
import { makeStyles } from '@material-ui/core'

import flagImageUrl from '../../assets/images/flag.jpg';
import iranImageUrl from '../../assets/images/iran.jpg';


const useStyles = makeStyles({
    setSpan: {
        color: "#f7c08a"
    },
    clr: {
        clear: "both"
    },
    aboutInfo: {
        padding: "30px 0",
        background: '#ccc'

    },
    infoRight: {
        background: "#ccc",
        float: "right",
        width: "50%",
        minHeight: "100%",
        "& img": {
            display: "block",
            width: "70%",
            margin: "auto",
            borderRadius: "50%"
        }
    },
    infoLeft: {
        background: "#ccc",
        float: "left",
        width: "50%",
        minHeight: "100%",
        padding: "15px 10px",
    },
    largeFont: {
        fontSize: "40px"
    },
    testimonials: {
        paddingTop: "100px",
        height: "600px",
        background: `url(${iranImageUrl}) no-repeat center center/cover`,
        "& h2": {
            color: "#fff",
            textAlign: "center",
            paddingBottom: "40px"
        }
    },
    testimonial: {
        background: "#f7c08a",
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "20px",
        marginBottom:"40px",
        textAlign: "center",
        borderRadius: "10px",
        opacity: "0.8"
    }
});

const About = () => {
    const classes = useStyles();
    return (
        <>
            <section className={classes.aboutInfo}>
                <div className="container">
                    <div className={classes.infoLeft}>
                        <h1 className={classes.largeFont}>
                            <span className={classes.setSpan}>About </span>
                        Iran
                        </h1>
                        <p>
                            Iran (officially the Islamic Republic of Iran) is a large country located in the Middle East. It is bordered to the north by the Caspian Sea and the south by the Persian Gulf. With an area of 1,648,195 square kilometers, Iran is the 17th largest country in the world. It is a proof you have to spend more than a couple of days in Iran!
                            Tehran, the capital city of Iran, is the country's largest and most populated city. Isfahan, Shiraz, Tabriz and Mashhad are other major cities of the country.
                            Persian (Farsi) is the official language of the country and is widely spoken. A large number of people also speak other languages/dialects namely Azeri, Kurdish, Luri, Arabic, Baluchi, Gilaki, Mazandarani/Tabari, and Turkmen.
                        </p>
                    </div>
                    <div className={classes.infoRight}>
                        <img src={flagImageUrl} alt="flag" />
                    </div>
                </div>
                <div className={classes.clr}></div>
            </section>
            <section className={classes.testimonials}>
                <div className="container">
                    <h2 className={classes.largeFont}>
                        What people say?
                        </h2>
                    <div className={classes.testimonial}>
                        <p>
                        When one thinks of Persia, he/she probably doesn’t think of gardens (after all, Iran is made up of 2/3rds desert!)  But somehow, thousands of years ago, the people of ancient Persia were able to figure out how to get water to create the most beautifully organized gardens.
                        </p>
                    </div>
                    <div className={classes.testimonial}>
                        <p>
                        Ah, last but not least - the food!  Who doesn’t travel for food?  Iranian cuisine will not leave you disappointed.  The cuisine is based on a combination of rice, meat, vegetables and nuts.  Common herbs include saffron, cinnamon and parsley, and fruits include plum, pomegranate, apricots and raisins. 
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
};

export default About;