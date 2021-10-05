import React from 'react';
import Grid from '../BaseComponents/Grid';
import TextField from '../BaseComponents/TextField';
import Button from '../BaseComponents/Button';

export default function Login(){
    return (
    <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
            <TextField
            label="نام کاربری"
            />
        </Grid>
        <Grid item xs={12} md={12}>
            <TextField
            label={'رمزورود'}   
            />
        </Grid>
        <Grid item xs={12} md={12}>
            <Button>ورود به سیستم</Button>
        </Grid>        
    </Grid>
    )
}
