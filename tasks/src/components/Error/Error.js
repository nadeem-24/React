import React from "react";
import "./Error.css";
import Card from "../UI/Card";

const Error = (props) => {

    const classes = 'error ' + props.className;

    return (
    <Card className={classes}>
        <p>{props.children}</p>
    </Card>
    );
};

export default Error;
