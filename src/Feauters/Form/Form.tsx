import React, {memo} from "react";
import {Select} from "../../Main/common/components/Select/Select";
import styles from './Form.module.scss'
import {useAppDispatch, useAppSelector} from "../../utils/customHook";
import {useFormik} from "formik";
import {Button} from "../../Main/common/components/Button/Button";
import {setLastUpdateDate} from "../../store/reducer/formReducer";
import {actualDate} from "../../utils/Date";
import {UserT} from "../../types/formReducerT";
import {Checkbox} from "../../Main/common/components/Checkbox/Checkbox";
import {ValidationForm} from "../../utils/ValidationForm";
import {FormParamsT} from "../../types/FormCT";
import {Input} from "../../Main/common/components/Input/Input";

export const Form = memo(() => {
    const cities = useAppSelector<string[]>(state => state.app.cities.map(c => c.city))
    const arrUni = useAppSelector<string[]>(state => state.app.arrayUniName)
    const lastUpdateForm = useAppSelector<string>(state => state.app.lastUpdateForm)
    const userInfo = useAppSelector<UserT>(state => state.app.user)
    const dispatch = useAppDispatch()
    const formik = useFormik({
        validate: ValidationForm,
        initialValues: {
            cities: cities[0],
            uni: arrUni[0],
            email: userInfo.email,
            password: userInfo.password,
            retryPassword: '',
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
                <div className={styles.form_hr}/>
                <div className={styles.form_password_text}>
                    <span>Пароль</span>
                </div>
                <div className={styles.form_password}>
                    <Input error={formik.errors.password}
                           name="password"
                           type="password"
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           value={formik.values.password}
                           required={true}/>
                    <p className={styles.form_errors_message}>{formik.touched.password && formik.errors.password}</p>
                </div>
                <div className={styles.form_password_description}>
                    <p>Ваш новый пароль должен содержать не менее 5 символов.</p>
                </div>
                <div className={styles.form_retryPassword_text}>
                    <span>Пароль ещё раз</span>
                </div>
                <div className={styles.form_retryPassword}>
                    <Input error={formik.errors.retryPassword}
                           name="retryPassword"
                           type="password"
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           value={formik.values.retryPassword}
                           required={true}/>
                    <p className={styles.form_errors_message}> {formik.touched.retryPassword && formik.errors.retryPassword} </p>
                </div>
                <div className={styles.form_retryPassword_description}>
                    <p>Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки.</p>
                </div>
                <div className={styles.hr2}/>
                <div className={styles.form_email_text}>
                    <span>Электронаня почта</span>
                </div>
                <div className={styles.form_email_input}>
                    <Input error={formik.errors.email}
                           name="email"
                           type="text"
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           value={formik.values.email}
                           required={true}/>
                    <p className={styles.form_errors_message}>{formik.touched.email && formik.errors.email}</p>
                </div>
                <div className={styles.form_change_email_description}>
                    <p>Можно изменить адрес, указанный при регистрации. </p>
                </div>
                <div className={styles.form_agree}>
                    <span>Я согласен</span>
                </div>
                <div className={styles.form_agree_checkbox}>
                    <Checkbox checked={formik.values.checkbox} type={'checkbox'} onChange={formik.handleChange}
                              name={'checkbox'}/>
                    <p>принимать актуальную информацию на емейл</p>
                </div>
                <div className={styles.from_btnSubmit}>
                    <Button type={'submit'} value={'Изменить'}/>
                    <p>последние изменения {lastUpdateForm}</p>
                </div>
            </div>
        </form>
    )
})