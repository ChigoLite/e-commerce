import { createTheme } from '@mui/material';
import { green, grey } from '@mui/material/colors'

const primary = green[400]
const secondary = grey[700]

const Theme = createTheme({
    palette: {
        primary: {
            main: primary,
        },
        secondary: {
            main:secondary,
        }
    },
    
})

export default Theme;
