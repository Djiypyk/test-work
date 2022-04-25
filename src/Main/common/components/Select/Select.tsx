import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent, memo} from 'react'
import styles from './Select.module.scss'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

export const Select: React.FC<SuperSelectPropsType> = memo((
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] | undefined = options ?
        options.map((el, i) =>
            <option key={i} value={el}>{el}</option>) : options; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        let newValue = e.currentTarget.value
        onChange && onChange(e)
        onChangeOption && onChangeOption(newValue)

        // onChange, onChangeOption
    }

    return (
        <select
            className={styles.select}
            onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
})