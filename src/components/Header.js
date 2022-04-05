import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Cart from './Cart';

const Header = () => {

    const header = {
        backgroundColor: '#008500',
        color: '#fff'
    };

    return(
       /*   */
        <AppBar position="static" color="transparent" style={header}>
            <Toolbar>
                <Grid container direction="row" justify="space-between" alignItems="center" xs={12} >
                    <Typography variant='h3'>
                    <img src={process.env.PUBLIC_URL + '/images/favicon_soccershop.png'} />
                        Dio Shopping
                    </Typography>
                    <Link to="/">
                        <Button color="primary">Home</Button>
                    </Link>
                    <Link to="/contato">
                        <Button color="primary">Contato</Button>
                    </Link>
                    <Cart />           
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
