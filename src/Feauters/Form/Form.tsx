import React from "react";
import {Select} from "../../Main/common/components/Select/Select";
import styles from './Form.module.scss'
import {useAppSelector} from "../../store/config/index";

export const Form = () => {
    const cities = useAppSelector<string[]>(state => state.app.cities)
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
        <div className={styles.form_wrapper}>
            <div className={styles.form_city}>
                <span>Ваш город</span>
            </div>
            <div className={styles.form_uni}>
                <span>Ваш университет</span>
            </div>
            <div className={styles.form_city_select}>
                <Select options={cities}/>
            </div>
            <div className={styles.form_uni_select}>
                <Select options={cities}/>
            </div>


        </div>
    )
}