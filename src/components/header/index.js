import React, {Fragment} from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Button, Divider, Grid, List, ListItemText} from "@material-ui/core";
import {useAppBarStyle} from "./style";
import NotificationsIcon from '@material-ui/icons/Notifications';
import Logo from "../../common/logo/Logo";

const CustomHeader = (props) => {
    const {drawerToggle, title} = props;
    const myStyle = useAppBarStyle();

    return (
        <Fragment>
            <Grid container>
                <Grid item xs={12}>
                    <AppBar position="fixed" className={myStyle.appbar}>
                        <Toolbar>

                            <div className={myStyle.logo} onClick={drawerToggle}>
                                <Logo/>
                            </div>

                            <Typography variant="h6" component="div">
                                {title}
                            </Typography>

                            <NotificationsIcon/>

                            <Divider orientation="vertical" flexItem/>

                            <List className={myStyle.list}
                                  component="nav"
                                  aria-labelledby="nested-list-subheader">
                                <Button>
                                    <ListItemText primary={"Spacecode"}/>
                                </Button>
                            </List>

                        </Toolbar>
                    </AppBar>
                </Grid>
            </Grid>
        </Fragment>
    )
};

export default CustomHeader;