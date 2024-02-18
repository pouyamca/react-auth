import { useFormik } from "formik";
import { useState } from "react"
import { IRenewingPassordForm } from "./model";
import { Box, Button, Checkbox, Stack, TextField, Typography } from "@mui/material";
import { RenewingPassValidationSchema } from "./validators";


const GteNewPassord = () => {
    const renewingPassordForm = useFormik<IRenewingPassordForm>({
        initialValues: {
            password: '',
            rePassword: ''

        },
        validationSchema: RenewingPassValidationSchema,
        onSubmit: (input) => { }
    });


    return (
        <Stack justifyContent='space-between' alignItems='center' height={'80vh'}>
            <Typography variant="h3">
                GteNewPassord into your accout
            </Typography>
            <Typography variant="h6" my={2}>
                walcom back please lgin into your account
            </Typography>
            <form onSubmit={renewingPassordForm.handleSubmit}>

                <Stack direction='column' justifyContent='space-between' sx={{ minHeight: 350, width: 500, p: 2, borderRadius: 2, background: 'white', boxShadow: '-2px -3px 5px 17px rgba(0,0,0,0.07)' }}>


                    <TextField
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        value={renewingPassordForm.values.password}
                        onChange={renewingPassordForm.handleChange}
                        onBlur={renewingPassordForm.handleBlur}
                        error={renewingPassordForm.touched.password && Boolean(renewingPassordForm.errors.password)}
                        helperText={renewingPassordForm.touched.password && renewingPassordForm.errors.password}
                    />

                    <TextField
                        fullWidth
                        id="rePassword"
                        name="rePassword"
                        label="rePassword"
                        value={renewingPassordForm.values.rePassword}
                        onChange={renewingPassordForm.handleChange}
                        onBlur={renewingPassordForm.handleBlur}
                        error={renewingPassordForm.touched.rePassword && Boolean(renewingPassordForm.errors.rePassword)}
                        helperText={renewingPassordForm.touched.rePassword && renewingPassordForm.errors.rePassword}
                    />
                    <Button color="primary" variant="contained" fullWidth type="submit">
                        Sign in
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

export default GteNewPassord