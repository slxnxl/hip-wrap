// import "../../styles/component.scss"
import useMediaQuery from "../../utils/useMediaQuery"
import {useEffect, useState} from "react";

export default function GridComponent({array}) {

    //const [nett, setNet] = useState([])

    let index = 0

    const containerPadding = 40;

    const isMobile = useMediaQuery('(max-width: 640px)')

    const [screenSize, getDimension] = useState({
        dynamicWidth: typeof window !== "undefined" && window?.innerWidth,
        dynamicHeight: typeof window !== "undefined" && window?.innerHeight
    });
    const setDimension = () => {
        getDimension({
            dynamicWidth: typeof window !== "undefined" && window?.innerWidth,
            dynamicHeight: typeof window !== "undefined" && window?.innerHeight
        })
    }

    useEffect(() => {
        window?.addEventListener('resize', setDimension);
        const cells = document.getElementsByClassName('cell');
        if (cells.length > 0) {
            for (let item of cells) {
                if (isMobile) {
                    item.style['height'] = screenSize.dynamicWidth - containerPadding + 'px'
                } else item.style['height'] = 'auto'
            }
        }

        return (() => {
            window.removeEventListener('resize', setDimension);
        })
    }, [screenSize])


    let net = [];
    let first = [];
    let second = [];
    let third = [];

    let bar = []

    for (let currentPage = 0; currentPage < array.length / 10 ; currentPage++) {
        console.log(array.length)

        console.log(currentPage)

        const updatedArray = array.slice([currentPage * 10], [(currentPage * 10) + 10]).map(item => item);

        bar.push(updatedArray)

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

    console.log(bar)


/*

    array.map(photo => {

        const item = <div className='cell'>{index} {photo.id}</div>

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

        net.push(
            <div className="net" key={array.length / 10}>
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
        )

        index++

        if (index >= 10) {
            index = 0
            first = [];
            second = [];
            third = [];
        }

    })


    net.push(
        <div className="net">
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
    )
*/

    return (
        <div id='container'>
            {net.map(item => item)}
        </div>
    );
}