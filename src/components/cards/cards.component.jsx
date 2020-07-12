import React from 'react';
import { Card, CardContent, Typograpgy, Grid } from '@material-ui/core';

import styles from './cards.module.css';

const Cards = (props) => {
    console.log(props);
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typograpgy color="textSecondary" gutterBottom >Infected</Typograpgy>
                        <Typograpgy variant="h5">REAL DATA</Typograpgy>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;
