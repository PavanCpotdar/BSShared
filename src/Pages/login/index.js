// import { Card, Grid, Typography } from '@mui/material'
import { Button, Card, CardContent, Grid, InputLabel, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';
import CONSTANTS from '../../common/constants';
import Logo from '../../common/logo/Logo';
import CheckboxComponent from '../../components/checkbox/checKBox';
import CustomInput from '../../components/inputfield';
import { useLoginPageStyles } from './style';

function LoginPage() {

  const classes = useLoginPageStyles();

  return (
    <div >

      <Card className={classes.papercard} >
        <CardContent>
          <Grid container direction="row" alignItems="center" justify="center" >
            <div className={classes.root}>
              <Grid className={classes.logoContainer} container direction="row" alignItems="center" justify="center">
                <Logo />
              </Grid>
              <Grid container direction="row" alignItems="center" className={classes.loginCardGrid} justify="center">
                <Grid item>
                  <InputLabel className={classes.inputLabel}>{CONSTANTS.USERNAME}</InputLabel>
                  <CustomInput
                    name="userName"
                    size="md"
                  />
                </Grid>
              </Grid>
              <Grid container direction="row" alignItems="center" className={classes.loginCardGrid} justify="center">
                <Grid item>
                  <InputLabel className={classes.inputLabel}> {CONSTANTS.PASSWORD}</InputLabel>
                  <CustomInput
                    name="password"
                    size="md"
                    type="password"
                  />
                </Grid>
              </Grid>
              <Grid item className={classes.secureLoginContainer}>

                <Grid container direction="row" alignItems={'center'} spacing={4}>
                  <Grid item>
                    <CheckboxComponent
                    />
                  </Grid>
                  <Grid item>
                   <Typography variant="subtitle2" className={classes.forgotPasswordText}>{CONSTANTS.STRINGS_FORGOTPASSWORD}</Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid
            item
            className={classes.loginBtnContainer}
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="column-end"
        >
            <Button
                variant="contained"
                // color="primary"
                className={classes.submitBtn}
            >
      Login
            </Button>
        </Grid>
        
            </div>
          </Grid>

        </CardContent>
        <Typography className={classes.copyrightText} variant="body2" align="center">
                {CONSTANTS.STRINGS_COPYRIGHT}
                <Link color="inherit" href="https://spacecode.com/">
                    {CONSTANTS.STRINGS_SPACECODE_SAS}
                </Link>{' '}
                {new Date().getFullYear()} {CONSTANTS.STRINGS_ALLRIGHTSRESERVED}
            </Typography>
      </Card>
      
      
    </div>
  )
}

export default LoginPage