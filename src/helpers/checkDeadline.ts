import dayjs from "dayjs";

export const checkDeadline = (date: string | undefined) => {
    const currentDay = dayjs().format('DD')
    const propsDay = dayjs(date).format('DD')
    const currentMonth = dayjs().format('MM')
    const propsMonth = dayjs(date).format('MM')
    if (+propsMonth > +currentMonth) {
        return false
    } else {
        return +propsDay < +currentDay
    }
}