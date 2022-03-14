import React, {Fragment} from "react";
import {IconButton} from "@material-ui/core";

const CustomIcon = (props) => {
    const {icon} = props;

    return (
        <Fragment>
            <IconButton style={{padding: "10px"}}>
                {icon}
            </IconButton>
        </Fragment>
    )
}

export default CustomIcon;