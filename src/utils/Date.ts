export const month: string[] = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

export const actualDate = (): string => {
    const date = new Date()
    return `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()} в ${date.getHours()}:${date.getMinutes() < 10
        ? `0${date.getMinutes()}`
        : date.getMinutes()}:${date.getSeconds()}`
}