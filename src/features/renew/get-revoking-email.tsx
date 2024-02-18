import { useFormik } from "formik";
import { useState } from "react"
import { RevkingValidationSchema } from "./validators";
import { IGetRevokingEmailForm } from "./model";
import { Box, Button, Checkbox, Stack, TextField, Typography } from "@mui/material";


const getRevokingEmail = () => {
    const getRevokingEmailForm = useFormik<IGetRevokingEmailForm>({
        initialValues: {
            email: '',
        },
        validationSchema: RevkingValidationSchema,
        onSubmit: (input) => { }
    });


    return (
        <Stack justifyContent='space-between' alignItems='center' height={'80vh'}>
            <Typography variant="h3">
                getRevokingEmail into your accout
            </Typography>
            <Typography variant="h6" my={2}>
                not thing we send the verifaicrition email
            </Typography>
            <form onSubmit={getRevokingEmailForm.handleSubmit}>

                <Stack direction='column' justifyContent='space-between' sx={{ minHeight: 350, width: 500, p: 2, borderRadius: 2, background: 'white', boxShadow: '-2px -3px 5px 17px rgba(0,0,0,0.07)' }}>

                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={getRevokingEmailForm.values.email}
                        onChange={getRevokingEmailForm.handleChange}
                        onBlur={getRevokingEmailForm.handleBlur}
                        error={getRevokingEmailForm.touched.email && Boolean(getRevokingEmailForm.errors.email)}
                        helperText={getRevokingEmailForm.touched.email && getRevokingEmailForm.errors.email}
                    />


                    <Button color="primary" variant="contained" fullWidth type="submit">
                        reset password
                    </Button>


                </Stack>
            </form>
            <Stack direction='row' justifyContent={'flex-start'} alignItems='center' mt={2}>

                <Typography variant="body1">
                    you dont have an account plaese creat it?
                </Typography>
                <Button variant="text">
                    <Typography variant="body1">
                        back to login
                    </Typography>
                </Button>

            </Stack>

        </Stack>



    )
}

export default getRevokingEmail