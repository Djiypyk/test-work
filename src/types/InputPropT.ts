export type InputPropType = {
    id?: string
    name: string
    type: string
    onChange: (value: any) => void
    value: string
    onBlur?: (e: any) => void
    onClick?: () => void
    label?: string
    error: string | undefined
    required?: boolean
}
