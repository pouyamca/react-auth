import { Stack } from "@mui/material";
import { useRef, useState } from "react";

export interface InputProps {
    length?: number;
    onComplete: (pin: string) => void;
};


const StepperInput = ({ length = 4, onComplete }: InputProps) => {
    const inputRef = useRef<HTMLInputElement[]>(Array(length).fill(null));


    // if you're not using Typescript, do useState()
    const [OTP, setOTP] = useState<string[]>(Array(length).fill(''));


    const handleTextChange = (input: string, index: number) => {
        const newPin = [...OTP];
        newPin[index] = input;
        setOTP(newPin);

        // check if the user has entered the first digit, if yes, automatically focus on the next input field and so on.


        if (input.length === 1 && index < length - 1) {
            inputRef.current[index + 1]?.focus();
        }

        if (input.length === 0 && index > 0) {
            inputRef.current[index - 1]?.focus();
        }

        // if user has entered all the digits, grab the digits and set as an argument to the onComplete function.


        if (newPin.every((digit) => digit !== '')) {
            onComplete(newPin.join(''));
        }
    };
    return (
        <Stack direction='row' dir='ltr'>
            {Array.from({ length }, (_, index) => (
                <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={OTP[index]}
                    onChange={(e) => handleTextChange(e.target.value, index)}
                    ref={(ref) => (inputRef.current[index] = ref as HTMLInputElement)}
                    className={`border border-solid border-border-slate-500 focus:border-blue-600 p-5 outline-none`}
                    style={{
                        width: '42px',
                        height: '43px',
                        border: '1px solid ',
                        borderColor: inputRef.current[index]?.focus() !== null ? '#C32CD9' : '#CCCCD9',
                        borderRadius: '10px',
                        textAlign: 'center',
                        marginRight: index === length - 1 ? '0' : '10px'
                    }}
                />
            ))}


        </Stack>
    )
}

export default StepperInput