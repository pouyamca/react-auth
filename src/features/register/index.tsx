import { useState } from "react"
import { useFormik } from "formik";
import { IRegisterForm } from "./model";
import { Box, Button, Checkbox, Stack, TextField, Typography } from "@mui/material";
import { RegisterValidationSchema } from "./validators";


const Register = () => {

    const registerForm = useFormik<IRegisterForm>({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: RegisterValidationSchema,
        onSubmit: (input) => { }
    });


    return (
        <Stack justifyContent='space-between' alignItems='center' height={'80vh'}>
            <Typography variant="h3">
                create   your accout
            </Typography>
            <Typography variant="h6" my={2}>
                start 30 day frre trail             </Typography>
            <form onSubmit={registerForm.handleSubmit}>

                <Stack direction='column' justifyContent='space-between' sx={{ minHeight: 350, width: 500, p: 2, borderRadius: 2, background: 'white', boxShadow: '-2px -3px 5px 17px rgba(0,0,0,0.07)' }}>

                    <TextField
                        fullWidth
                        id="name"
                        name="name"
                        label="name"
                        value={registerForm.values.name}
                        onChange={registerForm.handleChange}
                        onBlur={registerForm.handleBlur}
                        error={registerForm.touched.name && Boolean(registerForm.errors.name)}
                        helperText={registerForm.touched.name && registerForm.errors.name}
                    />

                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="email"
                        type="email"
                        value={registerForm.values.password}
                        onChange={registerForm.handleChange}
                        onBlur={registerForm.handleBlur}
                        error={registerForm.touched.email && Boolean(registerForm.errors.email)}
                        helperText={registerForm.touched.email && registerForm.errors.email}
                    />
                    <TextField
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        value={registerForm.values.password}
                        onChange={registerForm.handleChange}
                        onBlur={registerForm.handleBlur}
                        error={registerForm.touched.password && Boolean(registerForm.errors.password)}
                        helperText={(registerForm.touched.password && registerForm.errors.password) ? registerForm.touched.password && registerForm.errors.password : 'at least 8 char include capital an number'}
                    />

                    <Button color="primary" variant="contained" fullWidth type="submit">
                        get start
                    </Button>
                    <Button variant="outlined">
                        Sing up with google
                    </Button>

                </Stack>
            </form>
            <Stack direction='row' justifyContent={'flex-start'} alignItems='center' mt={2}>

                <Typography variant="body1">
                    already i have an account                </Typography>
                <Button variant="text">
                    <Typography variant="body1">
                        signin
                    </Typography>
                </Button>

            </Stack>

        </Stack>



    )
}


export default Register