
import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import TextField from '../BaseComponents/TextField';
import Select from '../BaseComponents/Select';
import Grid from '@material-ui/core/Grid';
import Button from '../BaseComponents/Button';

export default function User(props){
    const validationSchema = yup.object({
        birthDate: yup.string().required('Must be entered'),
        sex: yup.string().required('Must be entered')         
    });
    const formik = useFormik({
        initialValues:{
            birthDate: '',
            sex:''
        },
        onSubmit:values=>{
            console.log(values);
        },
        validationSchema: validationSchema
    });
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
            <TextField 
                value={formik.values.birthDate}
                placeholder="test test test"
                fullWidth
                onChange={formik.handleChange}
                error={formik.touched.birthDate && Boolean(formik.errors.birthDate)}
                helperText={formik.touched.birthDate && formik.errors.birthDate}
            />

            <Select
            value={formik.values.sex}
            items={[{name:'مرد',value:'male'},{name:'زن',value:'female'}]}
            onChange={formik.handleChange}
            />

            <Button type="submit" color="primary">OK</Button>

            </form>
        </div>
    )
}
