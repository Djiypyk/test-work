import React, {memo} from "react";
import {Select} from "../../Main/common/components/Select/Select";
import styles from './Form.module.scss'
import {useAppDispatch, useAppSelector} from "../../utils/customHook";
import {useFormik} from "formik";
import {Button} from "../../Main/common/components/Button/Button";
import {setLastUpdateDate} from "../../store/reducer/formReducer";
import {actualDate} from "../../utils/Date";
import {UserT} from "../../types/formReducer";
import {Checkbox} from "../../Main/common/components/Checkbox/Checkbox";

export type FormParamsT = {
    status: string
    cities?: string
    uni?: string
    email: string
    password: string
    retryPassword: string
    checkbox: boolean

}
export const Form = memo(() => {
    const status = useAppSelector<string>(state => state.app.status)
    const cities = useAppSelector<string[]>(state => state.app.cities.map(c => c.city))
    const arrUni = useAppSelector<string[]>(state => state.app.arrayUniName)
    const lastUpdateForm = useAppSelector<string>(state => state.app.lastUpdateForm)
    const userInfo = useAppSelector<UserT>(state => state.app.user)
    const dispatch = useAppDispatch()
    const formik = useFormik({
        validate: (values) => {
            const errors: Partial<FormParamsT> = {};
            if (!values.email) {
                errors.email = 'Укажите E-mail';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Укажите корректный E-mail';
            }
            if (values.password.length < 5) {
                errors.password = 'Используйте не менее 5 символов'
            } else if (!values.password) {
                errors.password = 'Укажите пароль'
            }
            if (values.password !== values.retryPassword) {
                errors.retryPassword = 'Пароли не совпадают'
            }
            return errors;
        },
        initialValues: {
            status: status,
            email: userInfo.email,
            password: userInfo.password,
            retryPassword: '',
            uni: arrUni[0],
            cities: cities[0],
            checkbox: userInfo.agree
        },
        onSubmit: (values: FormParamsT) => {
            dispatch(setLastUpdateDate(actualDate()))
            console.log(JSON.stringify(values))
        },
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={styles.form_wrapper}>
                <div className={styles.form_city}>
                    <span>Ваш город</span>
                </div>
                <div className={styles.form_uni}>
                    <span>Ваш университет</span>
                </div>
                <div className={styles.form_city_select}>
                    <Select options={cities} name="cities" onChange={formik.handleChange}/>
                </div>
                <div className={styles.form_uni_select}>
                    <Select options={arrUni} name="uni" onChange={formik.handleChange}/>
                </div>
                <div className={styles.div5}/>
                <div className={styles.div6}>
                    <span>Пароль</span>
                </div>
                <div className={styles.form_password}>
                    <input
                        className={formik.errors.password && styles.form_input_error}
                        name="password"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}/>
                    <p className={styles.errors_message}>{formik.touched.password && formik.errors.password}</p>
                </div>
                <div className={styles.div8}>
                    <p>Ваш новый пароль должен содержать не менее 5 символов.</p>
                </div>
                <div className={styles.div9}>
                    <span>Пароль ещё раз</span>
                </div>
                <div className={styles.form_retryPassword}>
                    <input
                        required
                        className={formik.errors.retryPassword && styles.form_input_error}
                        name="retryPassword"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.retryPassword}/>
                    <p className={styles.errors_message}> {formik.touched.retryPassword && formik.errors.retryPassword} </p>
                </div>
                <div className={styles.div11}>
                    <p>Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки.</p>
                </div>
                <div className={styles.div12}/>
                <div className={styles.div13}>
                    <span>Электронаня почта</span>
                </div>
                <div className={styles.form_email}>
                    <input
                        className={formik.errors.email && styles.form_input_error}
                        name="email"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}/>
                    <p className={styles.errors_message}>{formik.touched.email && formik.errors.email}</p>
                </div>
                <div className={styles.div15}>
                    <p>Можно изменить адрес, указанный при регистрации. </p>
                </div>
                <div className={styles.div16}>
                    <span>Я согласен</span>
                </div>
                <div className={styles.div17}>
                    <Checkbox checked={formik.values.checkbox} type={'checkbox'} onChange={formik.handleChange}
                              name={'checkbox'}/>
                    <label>принимать актуальную информацию на емейл</label>
                </div>
                <div className={styles.from_btnSubmit}>
                    <Button type={'submit'} value={'Изменить'}/>
                    <p>последние изменения {lastUpdateForm}</p>
                </div>
            </div>
        </form>
    )
})