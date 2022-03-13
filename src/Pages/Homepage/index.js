import React, {Fragment, useState} from "react";
import CustomHeader from "../../components/Header";
import CustomDrawer from "../../components/Drawer";
import {useHomepageStyles} from "./style";
import ClientPage from "../client";


const Homepage = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
    const myStyle = useHomepageStyles();

    const drawerToggleHandler = () => {
        setOpenDrawer(!openDrawer)
    }

    return (
        <Fragment>
            <CustomHeader drawerToggle={drawerToggleHandler}/>
            <CustomDrawer drawerToggle={drawerToggleHandler} drawerState={openDrawer}/>
            <div className={myStyle.topSpace}></div>
            <ClientPage/>
        </Fragment>
    );
};

export default Homepage;