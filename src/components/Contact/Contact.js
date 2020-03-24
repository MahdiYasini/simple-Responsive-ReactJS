import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    setSpan: {
        color: "#f7c08a"
    },
    largeFont: {
        fontSize: "40px"
    },
    contactForm: {
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "30px 0",
        "& label": {
            display: "block",
            marginBottom: "5px"
        },
        "& input ,textarea": {
            width: "100%",
            padding: "10px",
            border: "1px solid #ddd"
        },
        "& input:focus ,textarea:focus": {
            outline: "none",
            borderColor: "#f7c08a"
        },
        "& textarea": {
            height: "150px"
        }
    },
    formGroup: {
        marginBottom: "24px"
    }
});

const About = () => {
    const classes = useStyles();
    return (
        <>
            <section className={classes.contactForm}>
                <div className="container">
                    <h1 className={classes.largeFont}>
                        <span className={classes.setSpan}>Contact </span>
                    Us
                    </h1>
                    <p>Please fill out from the below</p>
                    <form>
                        <div className={classes.formGroup}>
                            <label for="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className={classes} />
                        </div>
                        <div className={classes.formGroup}>
                            <label for="">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className={classes} />
                        </div>
                        <div className={classes.formGroup}>
                            <label for="message">Message</label>
                            <textarea
                                type="text"
                                name="message"
                                id="message"
                                className={classes}> </textarea>
                        </div>
                        <button type="submit" className="btn">
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
};

export default About;