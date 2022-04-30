import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
    },
    heading: {
        fontFamily: 'Courgette',
        color: 'black',
        textDecoration: 'none',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
    },
    profile: {
        alignItems: 'center',
        margin: '10px',
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
    },
    userName: {
        fontFamily: 'Caveat',
        margin: '10px',
        display: 'flex',
        alignItems: 'center',
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
    },

    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
    [theme.breakpoints.down('sm')]: {
        appBar: {
            borderRadius: 15,
            margin: '20px 0',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0px 50px',
        },
        heading: {
            fontSize:'30px',
        },
        userName: {
            display: 'none',
 
        },
        profile: {
            justifyContent: 'flex-end',
            width:'300px',
        },
        logout:{
            justifyContent: 'flex-end',
            margin:"5%",
        },
    },
    [theme.breakpoints.down('xs')]: {
        heading: {
            fontSize:'20px',
        },
        userName: {
            display: 'none',
        },
        profile: {
            justifyContent: 'flex-end',
            width:'200px',
        },
        logout:{
            justifyContent: 'flex-end',
            margin:"5%",
        },
    }


}));