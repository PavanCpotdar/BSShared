import React, {Fragment, useState} from "react";
import CustomHeader from "../../components/Header";
import CustomDrawer from "../../components/Drawer";


const Homepage = () => {
    const [openDrawer, setOpenDrawer] = useState(false)

    const drawerToggleHandler = () => {
        setOpenDrawer(!openDrawer)
    }

    return (
        <Fragment>
            <CustomHeader drawerToggle={drawerToggleHandler}/>
            <CustomDrawer drawerToggle={drawerToggleHandler} drawerState={openDrawer}/>
        </Fragment>
    );
};

export default Homepage;