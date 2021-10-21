import React from 'react';
import Grid from '../BaseComponents/Grid';
import TextField from '../BaseComponents/TextField';
import Button from '../BaseComponents/Button';
import {useFormik} from 'formik';
import * as yup from 'yup';
import Box from '../BaseComponents/Box';

const validationSchema=yup.object({
    userName:yup.string().required('user name must be entered'),
    password:yup.string().required('password must be entered')
});

export default function Login(){

    const formik = useFormik({
        initialValues:{
            userName:'',
            password:''
        },
        onSubmit:values=>{
            console.log(values);
        },
        validationSchema:validationSchema
    });

    console.log('Login is rendering ...',formik);

    return (
    <form onSubmit={formik.handleSubmit}>
    <Box>    
    <Grid container>
       
        <Grid item xs={12} md={12}>
            <TextField
            name="userName"
            id="userName"
            label="نام کاربری"
            value={formik.values.userName}
            onChange={formik.handleChange}
            error={formik.touched.userName && Boolean(formik.errors.userName)}
            helperText={formik.touched.userName && formik.errors.userName}
            />
        </Grid>
        <Grid item xs={12} md={12}>
            <TextField
            name="password"
            id="password"
            type="password"
            label={'رمزورود'}   
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            />
        </Grid>
        <Grid item xs={12} md={12}>
            <Button type="submit" color="primary">ورود به سیستم</Button>
        </Grid>    
        
    </Grid>
    </Box>
    </form>
    )
}
