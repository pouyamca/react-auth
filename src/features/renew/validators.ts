import * as yup from 'yup';

export const RevkingValidationSchema = yup.object({
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),

});

export const RenewingPassValidationSchema = yup.object({
    password: yup
        .string()
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
    rePassword: yup
        .string()
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password repeat is required')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
});

