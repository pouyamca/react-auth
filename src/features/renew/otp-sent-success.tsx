import { Button, Stack, Typography } from "@mui/material"
import { useState } from "react"


const OtpSentSuccess = () => {
    return (<Stack justifyContent='space-between' alignItems='center' height={'80vh'}>
        <Typography variant="h3">
            getRevokingEmail into your accout
        </Typography>
        <Typography variant="h6" my={2}>
            not thing we send the verifaicrition email
        </Typography>


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

export default OtpSentSuccess