import { Button, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { IGetOtpPropType } from "./model"
import { useLocation } from "react-router-dom";
import StepperInput from "../../components/stepper-input";


const GetOtp = () => {
    const { hash } = useLocation();

    const otpVerification = (pin: string) => {
        console.log(pin)
    }

    return (<Stack justifyContent='space-between' alignItems='center' height={'80vh'}>
        <Typography variant="h3">
            check your email
        </Typography>
        <Typography variant="h6" my={2}>
            we sent verification to
        </Typography>
        <Typography variant="h6" my={2}>
            email@gmail.com
        </Typography>
        <StepperInput onComplete={otpVerification} />

        <Button variant="text">
            <Typography variant="body1">
                verify email
            </Typography>
        </Button>


    </Stack>


    )
}

export default GetOtp