import useMediaQuery from "../../utils/useMediaQuery"
import {useEffect, useState} from "react";

export default function GridComponent({array}) {

    const isMobile = useMediaQuery('(max-width: 640px)')

    //массив с 3мя рядами сетки
    let net = [];
    //1 ряд
    let first = [];
    //2й ряд
    let second = [];
    //3й ряд
    let third = [];

    // берем по 10 элементов из передаваемого массива и добавляем их в сетку, разделяя на 3 ряд/блока (по 3/4/3 элемента)

    for (let currentPage = 0; currentPage < array.length / 10 ; currentPage++) {

        const updatedArray = array.slice([currentPage * 10], [(currentPage * 10) + 10]).map(item => item);

        updatedArray.map((photo, index) => {
            
            const item = <div className='cell' key={index}>{index} {photo.id}</div>

            if (index < 11) {
                if (index < 3) {
                    first.push(item);
                }
                if (index > 2 && index < 7) {
                    second.push(item);
                }

                if (index > 6) {
                    third.push(item);
                }
            }
        })

        const foo = <div className="net" key={currentPage}>
            <div className="net_first">
                {first}
            </div>
            <div className="net_second">
                {second}
            </div>
            <div className="net_third">
                {third}
            </div>

        </div>

        net = [...net, foo]

        first = [];
        second = [];
        third = [];

    }

    return (
        isMobile
        ?(<div className="container">
            {array.map((photo, index)=>{
            return <div className="cell" key={index}>{index}{photo.id}</div>
            })}
        </div>)
        :(<div id='container' className="container">
            {net.map(item => item)}
        </div>)
    );
}