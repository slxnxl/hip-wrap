// TODO сюда функцию для отправки запросов клиентов на заказ
import {pb} from "../../utils/pb"
export default function SendContact (number, product = null) {
    if (product !== null) {
        // добавить дату заявки и номер в базу
        // мб сделать отдельное подключение к базе (думаю так лучше будет)
        // pb add
        // send product and number
        return [number, product]
    }
    else {
        //send number
        console.log('send number on api', number)
        return number
    }
}