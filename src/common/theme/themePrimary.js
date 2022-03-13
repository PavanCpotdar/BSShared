// import { createTheme } from '@material-ui/core/styles';

import { createTheme } from "@material-ui/core/styles";

const themePrimary = createTheme({
    palette: {
        primary: {
            main: '#004372',
            darkBlue: '#0e6cad',
            icon: '#777777',
            light: '#deebf7'
        },
        secondary: {
            main: '#ffffff'
        },
        background: {
            default: '#f2f7fb',
            dark: '#D9E3EB',
            secondary: '#f2f2f2'
        },
        list: {
            main: '#D9E3EB'
        },
        label: {
            main: '#777777'
        },
        colors: {
            black: '#000',
            gray: {
                main: '#777777',
                light: '#d0d0d0',
                dark: '#46474E',
                veryLight: '#E6E6E6',
                veryDarkGrayishBlue: '#60626E',
                darkGrayishBlue: '#8A8C8D',
                veryDarkGray: '#707070'
            },

            main: '#004372',
            white: '#ffffff',
            red: '#b33939',
            green: '#218c74',
            magenta: '#6D214F',
            pink: '#34495e',
            indigo: '#2980b9',
            purple: 'rgba(64, 64, 122,1.0)',
            dark: '#2C3A47'
        }
    },

    
});

export default themePrimary;
