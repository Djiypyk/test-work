import React from "react";
import { EditableStatus } from "../Main/common/components/EditableSpan/EditableStatus";
import {useFormik} from "formik";



export const Form = () => {
    // const formik = useFormik({
    //     validate: validatePassAndEmail,
    //     initialValues: {
    //         email: '',
    //         password: 'qwerty123',
    //         rememberMe: false,
    //     },
    //     onSubmit: (values: LoginValues) => {
    //         dispatch({ type: AuthTypeSaga.LoginSaga, values })
    //         setIsSecurity(false)
    //         formik.resetForm()
    //     },})

    return (
        <EditableStatus/>
    )
}