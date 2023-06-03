// функция для отправки заявки
export default function SendContact (number, product = null) {
    if (product !== null) {
        // send product and number
        return [number, product]
    }
    else {
        //send number
        return number
    }
}
