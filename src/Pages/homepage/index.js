import React, {Fragment, useState} from "react";
import CustomHeader from "../../components/header";
import CustomDrawer from "../../components/Drawer";
import {useHomepageStyles} from "./style";
import {useLocation} from "react-router-dom";


const Homepage = (props) => {
    const [openDrawer, setOpenDrawer] = useState(false)
    const myStyle = useHomepageStyles();
    const match = useLocation();

    let filterUrl = match.pathname.split('/').filter((x, i) => i < 3);
    const selectTitle = filterUrl[2] === undefined ? filterUrl[1] : filterUrl[2];
    const capitalFirstLetter = selectTitle.slice(0, 1).toUpperCase();
    const title = selectTitle.replace(selectTitle.slice(0, 1), capitalFirstLetter);

    const drawerToggleHandler = () => {
        setOpenDrawer(!openDrawer)
    }

    return (
        <Fragment>
            <CustomHeader title={title}
                          drawerToggle={drawerToggleHandler}/>
            <CustomDrawer drawerToggle={drawerToggleHandler} drawerState={openDrawer}/>
            <div className={myStyle.topSpace}>.</div>
            <div className={myStyle.content}>{props.children}</div>
        </Fragment>
    );
};

export default Homepage;