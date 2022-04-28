import React, {ChangeEvent, DetailedHTMLProps, FC, memo, SelectHTMLAttributes} from 'react'
import styles from './Select.module.scss'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsT = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

export const Select: FC<SuperSelectPropsT> = memo((
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] | undefined = options ?
        options.map((el, i) =>
            <option key={i} value={el}>{el}</option>) : options;

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        let newValue = e.currentTarget.value
        onChange && onChange(e)
        onChangeOption && onChangeOption(newValue)
    }

    return (
        <select
            className={styles.select}
            onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
})