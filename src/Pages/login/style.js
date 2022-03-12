import { makeStyles } from '@material-ui/core';

export const useLoginPageStyles = makeStyles(
    (theme) => ({
        root: {
            width: 450,
            height: 530,
            borderRadius: '10px',
            margin: '0 auto',
            marginTop: 100,
            backgroundColor: "white"
            // backgroundColor: theme.palette.secondary.main
            // '.makeStyles-root-31':{
            //     backgroundColor: "red"
            // }
        },
        papercard:{
            backgroundColor: "#F2F7FB"
        },
        title: {
            fontSize: 30,
            marginBottom: 50
        },
        pos: {
            marginBottom: 12
        },

        typographyH6: {
            color: "#000",
            fontWeight: '600',
            marginTop: 50,
            marginBottom: 10
        },
        typographySubtitle: {
            textAlign: 'left',
            width: 250,
            margin: '0 auto',
            color: "#000",
            fontWeight: '400'
        },
        typographyOTPSubtitle: {
            textAlign: 'left',
            width: 300,
            margin: '0 auto',
            color: "#000",
            fontWeight: '400',
            marginTop: 20
        },
        logoContainer: {
            backgroundColor: theme.palette.primary.main,
            width: '100%',
            height: '90px',
            borderTopRightRadius: '10px',
            borderTopLeftRadius: '10px'
        },
        inputLabel: {
            marginBottom: 5,
            fontSize: '14px',
            color: "#777777"
        },
        error: {
            color: "red",
            marginLeft: 80
        },
        submitBtn: {
            width: 285,
            marginTop: 15,
            padding: '15px',
            backgroundColor:"#004372",
            color:"white"
        },
        copyrightText: {
            color: "#777777",
            marginTop: 20,
            marginBottom: 5
        },
        signInGrid: {
            marginLeft: 310,
            marginTop: 8
        },
        loginCardGrid: {
            marginTop: 60
        },
        passwordInputBox: {
            marginTop: 35
        },
        secureLoginContainer: {
            marginTop: 20,
            marginLeft:80   
        },
        forgotPasswordText: {
            cursor: 'pointer',
            marginLeft:80,
            fontWeight:"bold"
        },
        OTPInputBox: {
            marginTop: 30
        },
        loginBtnContainer: {
            marginTop: 40
        },
        backBtnContainer: {
            marginLeft: 310,
            marginTop: 8
        },
        otpLoginBtn: {
            marginTop: 30,
            marginBottom: 20
        },
        otpEmailInputBox: {
            marginTop: 60
        },
        signInText: {
            cursor: 'pointer'
        },
        otpSendBtn: {
            marginTop: 30,
            marginBottom: 20
        }
    }),
    { index: 1 }
);
