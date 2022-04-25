import React, {useEffect} from "react";
import {Select} from "../../Main/common/components/Select/Select";
import styles from './Form.module.scss'
import {getUnisS} from "../../store/saga/formSaga";
import {useAppDispatch, useAppSelector} from "../../utils/customHook";

export const Form = () => {
    const cities = useAppSelector<string[]>(state => state.app.cities)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getUnisS())
    }, [])
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
            <div className={styles.div5}/>
            <div className={styles.div6}>
                <span>Пароль</span>
            </div>
            <div className={styles.div7}>
                <input type="text"/>
            </div>
            <div className={styles.div8}>
                <p>Ваш новый пароль должен содержать не менее 5 символов.</p>
            </div>
            <div className={styles.div9}>
                <span>Пароль ещё раз</span>
            </div>
            <div className={styles.div10}>
                <input type="text"/>
            </div>
            <div className={styles.div11}>
                <p>Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки.</p>
            </div>
            <div className={styles.div12}/>
            <div className={styles.div13}>
                <span>Электронаня почта</span>
            </div>
            <div className={styles.div14}>
                <input type="text"/>
            </div>
            <div className={styles.div15}>
                <p>Можно изменить адрес, указанный при регистрации. </p>
            </div>
            <div className={styles.div16}>
                <span>Я согласен</span>
            </div>
            <div className={styles.div17}>
                <input type="checkbox"/> <p>принимать актуальную информацию на емейл</p>
            </div>
            <div className={styles.div18}>
                <button>Изменить</button>
                <p>последние изменения 15 мая 2012 в 14:55:17</p>
            </div>
        </div>


    )
}