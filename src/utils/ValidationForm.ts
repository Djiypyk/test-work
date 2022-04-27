import {FormParamsT} from "../types/FormCT";

export const ValidationForm = (values:FormParamsT) => {
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
}