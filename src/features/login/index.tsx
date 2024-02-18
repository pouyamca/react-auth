import { useFormik } from "formik";
import { useState } from "react"
import { LoginValidationSchema } from "./validators";
import { ILoginForm } from "./model";
import { Box, Button, Stack, TextField } from "@mui/material";


const Login = () => {
    const loginForm = useFormik<ILoginForm>({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: LoginValidationSchema,
        onSubmit: (input) => { }
    });


    return (

        <form onSubmit={loginForm.handleSubmit}>
            <Stack direction='column' justifyContent='space-between' sx={{ minHeight: 250, width: 350, p: 2, border: '1px solid gray' }}>

                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={loginForm.values.email}
                    onChange={loginForm.handleChange}
                    onBlur={loginForm.handleBlur}
                    error={loginForm.touched.email && Boolean(loginForm.errors.email)}
                    helperText={loginForm.touched.email && loginForm.errors.email}
                />
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={loginForm.values.password}
                    onChange={loginForm.handleChange}
                    onBlur={loginForm.handleBlur}
                    error={loginForm.touched.password && Boolean(loginForm.errors.password)}
                    helperText={loginForm.touched.password && loginForm.errors.password}
                />
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Submit
                </Button>
            </Stack>
        </form>


    )
}

export default Login