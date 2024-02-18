import { useFormik } from "formik";
import { useState } from "react"
import { LoginValidationSchema } from "./validators";
import { ILoginForm } from "./model";
import { Box, Button, Checkbox, Stack, TextField, Typography } from "@mui/material";


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
        <Stack justifyContent='space-between' alignItems='center' height={'80vh'}>
            <Typography variant="h3">
                Login into your accout
            </Typography>
            <Typography variant="h6" my={2}>
                walcom back please lgin into your account
            </Typography>
            <form onSubmit={loginForm.handleSubmit}>

                <Stack direction='column' justifyContent='space-between' sx={{ minHeight: 350, width: 500, p: 2, borderRadius: 2, background: 'white', boxShadow: '-2px -3px 5px 17px rgba(0,0,0,0.07)' }}>

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
                    <Stack direction='row' justifyContent={'space-between'}>
                        <Stack direction='row' justifyContent={'flex-start'} alignItems='center'>
                            <Checkbox />
                            <Typography variant="body1">
                                remember for 30 day
                            </Typography>

                        </Stack>
                        <Button variant="text">
                            <Typography variant="body2">
                                forget password
                            </Typography>
                        </Button>

                    </Stack>
                    <Button color="primary" variant="contained" fullWidth type="submit">
                        Sign in
                    </Button>
                    <Button variant="outlined">
                        Sing in with google
                    </Button>

                </Stack>
            </form>
            <Stack direction='row' justifyContent={'flex-start'} alignItems='center' mt={2}>

                <Typography variant="body1">
                    you dont have an account plaese creat it?
                </Typography>
                <Button variant="text">
                    <Typography variant="body1">
                        create account
                    </Typography>
                </Button>

            </Stack>

        </Stack>



    )
}

export default Login