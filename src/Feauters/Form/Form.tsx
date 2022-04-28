import React, {memo} from "react";
import {Select} from "../../Main/common/components/Select/Select";
import styles from './Form.module.scss'
import {useAppDispatch, useAppSelector} from "../../utils/customHook";
import {useFormik} from "formik";
import {Button} from "../../Main/common/components/Button/Button";
import {setLastUpdateDate} from "../../store/reducer/formReducer";
import {actualDate} from "../../utils/actualDate";
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
            <div className={styles.form_flexWrapper}>
                <div>
                    <div className={styles.flexRow}>
                        <span className={styles.form_title}>Ваш город</span>
                        <div className={styles.form_value}>
                            <Select options={cities} name="cities" onChange={formik.handleChange}/>
                        </div>
                    </div>
                    <div className={styles.flexRow}>
                        <span className={styles.form_title}>Ваш университет</span>
                        <div className={styles.form_value}>
                            <Select options={arrUni} name="uni" onChange={formik.handleChange}/>
                        </div>
                    </div>
                    <hr/>
                    <div className={styles.flexRow}>
                        <span className={styles.form_title}>Пароль</span>
                        <div className={styles.form_value}>
                            <Input error={formik.errors.password}
                                   name="password"
                                   type="password"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.password}
                                   required={true}/>
                            <p className={styles.form_errors_message}>{formik.touched.password && formik.errors.password}</p>
                        </div>
                        <p className={styles.form_description}>Ваш новый пароль должен содержать не менее 5
                            символов.</p>
                    </div>
                    <div className={styles.flexRow}>
                        <span className={styles.form_title}>Пароль ещё раз</span>
                        <div className={styles.form_value}>
                            <Input error={formik.errors.retryPassword}
                                   name="retryPassword"
                                   type="password"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.retryPassword}
                                   required={true}/>
                            <p className={styles.form_errors_message}>
                                {formik.touched.retryPassword && formik.errors.retryPassword}
                            </p>
                        </div>
                        <p className={styles.form_description}>Повторите пароль, пожалуйста, это обезопасит вас с нами
                            на случай
                            ошибки.</p>
                    </div>
                    <hr/>
                    <div className={styles.flexRow}>
                        <span className={styles.form_title}>Электронная почта</span>
                        <div className={styles.form_value}>
                            <Input error={formik.errors.email}
                                   name="email"
                                   type="text"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.email}
                                   required={true}/>
                            <p className={styles.form_errors_message}>{formik.touched.email && formik.errors.email}</p>
                        </div>
                        <p className={styles.form_description}>Можно изменить адрес, указанный при регистрации. </p>
                    </div>
                    <div className={styles.flexRow}>
                        <span className={styles.form_title}>Я согласен</span>
                        <div className={styles.form_value}>
                            <div className={styles.form_value__check}>
                                <Checkbox
                                    checked={formik.values.checkbox}
                                    type={'checkbox'}
                                    onChange={formik.handleChange}
                                    name={'checkbox'}
                                />
                                <label className={styles.form_agree}>принимать актуальную информацию на e-mail</label>
                            </div>
                        </div>
                    </div>
                    <div className={styles.form_btnAgree}>
                        <div className={styles.form_btnAgree__submit}>
                            <Button type={'submit'} value={'Изменить'}/>
                            <p>последние изменения <br/> {lastUpdateForm}</p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
})
